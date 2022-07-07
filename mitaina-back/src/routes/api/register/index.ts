import { Request, Response, Router } from 'express';
import prisma from '../../../lib/prisma';
import { UserRepository } from '../../../repository/userRepository';

// Constants
const router = Router();

router.get('/', async (req: Request, res: Response) => {
	const users = await prisma.user.findMany();
	return res.json(users);
});

router.post('/', async (req: Request, res: Response) => {
	const data = await req.body;
	const isExist = await UserRepository.getIsExistUserFromLoginId(data.loginId);
	if (isExist) {
		return res.status(409).send('User already exists');
	}
	const user = await UserRepository.createUser(data);
	if (user) {
		return res.status(204).send();
	} else {
		return res.status(404).send();
	}
});

export default router;
