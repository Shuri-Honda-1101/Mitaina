import { Request, Response, Router } from 'express';
import prisma from '../../../lib/prisma';
import { UserRepository } from '../../../repository/userRepository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Constants
const router = Router();

const sessionExpiresIn = 7 * 24 * 60 * 60; // 7 days

router.get('/', async (req: Request, res: Response) => {
	const users = await prisma.user.findMany();
	return res.json(users);
});

router.post('/', async (req: Request, res: Response) => {
	const data = await req.body;
	const user = await UserRepository.getUserByLoginId(data.loginId);
	const passwordCheck = user && (await bcrypt.compare(data.password, user.passwordHash));
	if (!(user && passwordCheck)) {
		return res.status(400).send('Invalid loginId or password');
	}

	const now = Math.floor(Date.now() / 1000);
	const sessionInfo = {
		iat: now,
		exp: now + sessionExpiresIn,
		sub: user.id
	};
	const token = jwt.sign(sessionInfo, 'secret');

	return res
		.cookie('mitaina-session', token, {
			httpOnly: true,
			secure: true,
			path: `/`
		})
		.status(204)
		.send();
});

export default router;
