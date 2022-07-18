import { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../../../repository/userRepository';

const router = Router();

function verifyJWT<Payload = unknown>(token: string, secret: string): Payload | null {
	try {
		return jwt.verify(token, secret, { algorithms: ['HS256'] }) as Payload;
	} catch (e: any) {
		if (e.name === 'TokenExpiredError' || e.name === 'JsonWebTokenError') {
			return null;
		} else {
			throw e;
		}
	}
}

router.get('/user', async (req: Request, res: Response) => {
	const cookies = req.cookies;
	if (cookies['mitaina-session']) {
		const sessionInfo = verifyJWT<{ sub: string }>(cookies['mitaina-session'], 'secret');
		if (sessionInfo) {
			const currentUser = await UserRepository.getUser(sessionInfo.sub);
			return res.json(currentUser);
		}
	}
	return res.status(401).send('Unauthorized');
});

export default router;
