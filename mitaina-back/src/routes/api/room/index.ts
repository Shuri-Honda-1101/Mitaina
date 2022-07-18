import { Request, Response, Router } from 'express';
import prisma from '../../../lib/prisma';
import { GameUserRepository } from '../../../repository/gameUserRepository';
import { RoomRepository } from '../../../repository/roomRepository';

// Constants
const router = Router();

router.get('/', async (req: Request, res: Response) => {
	const users = await prisma.room.findMany();
	// return res.json(users);
	return res.status(200).json({ message: 'Room and GameUser created successfully' });
});

router.post('/', async (req: Request, res: Response) => {
	const { roomName, password, user } = await req.body;
	const roomCreateData = { roomName, password };
	const room = await RoomRepository.createRoom(roomCreateData);
	if (room) {
		const gameUserCreateData = { userId: user.id, roomId: room.id, score: 0, isHost: true };
		const gameUser = await GameUserRepository.createGameUser(gameUserCreateData);
		if (gameUser) {
			return res.writeHead(200, 'Room and GameUser created successfully').end();
		} else {
			return res.writeHead(400, 'GameUser not created').end();
		}
	} else {
		return res.writeHead(400, 'Room not created').end();
	}
});

export default router;
