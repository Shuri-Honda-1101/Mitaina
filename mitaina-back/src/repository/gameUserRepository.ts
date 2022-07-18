import { GameUser } from '@prisma/client';
import prisma from '../lib/prisma';

type CreateGameUser = { userId: string; roomId: string; score: number; isHost: boolean };

export class GameUserRepository {
	static async createGameUser(data: CreateGameUser): Promise<GameUser> {
		const { userId, roomId, score, isHost } = data;
		return await prisma.gameUser.create({
			data: {
				userId,
				roomId,
				score,
				isHost
			}
		});
	}

	// static async getIsExistUserFromLoginId(loginId: string): Promise<boolean> {
	// 	const user = await prisma.user.findUnique({
	// 		where: { loginId }
	// 	});
	// 	return !!user;
	// }

	// static async getUserByLoginId(loginId: string): Promise<User | null> {
	// 	const user = await prisma.user.findUnique({
	// 		where: { loginId }
	// 	});
	// 	if (!user) {
	// 		return null;
	// 	}
	// 	return user;
	// }

	// static async getUser(userId: string): Promise<User | null> {
	// 	const user = await prisma.user.findUnique({
	// 		where: { id: userId }
	// 	});
	// 	if (!user) {
	// 		return null;
	// 	}
	// 	return user;
	// }
}
