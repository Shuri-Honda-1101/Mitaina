import { Room } from '@prisma/client';
import prisma from '../lib/prisma';
import bcrypt from 'bcrypt';

type CreateRoom = { roomName: string; password: string };

export class RoomRepository {
	static async createRoom(data: CreateRoom): Promise<Room> {
		const { roomName, password } = data;
		return await prisma.room.create({
			data: {
				name: roomName,
				passwordHash: await bcrypt.hash(password, 10)
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
