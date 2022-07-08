import { Request, Response, Router } from 'express';

// Constants
const router = Router();

router.post('/', async (req: Request, res: Response) => {
	return res
		.cookie('mitaina-session', '', {
			expires: new Date(0)
		})
		.status(201)
		.send();
});

export default router;
