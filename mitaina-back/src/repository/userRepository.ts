import { User } from '@prisma/client';
import prisma from '../lib/prisma';
import bcrypt from 'bcrypt';

type CreateUser = { loginId: string; userName: string; password: string };

export class UserRepository {
	static async createUser(data: CreateUser): Promise<User> {
		const { loginId, userName, password } = data;
		return await prisma.user.create({
			data: {
				loginId,
				name: userName,
				passwordHash: await bcrypt.hash(password, 10)
			}
		});
	}

	static async getIsExistUserFromLoginId(loginId: string): Promise<boolean> {
		const user = await prisma.user.findUnique({
			where: { loginId }
		});
		return !!user;
	}

	static async getUserByLoginId(loginId: string): Promise<User | null> {
		const user = await prisma.user.findUnique({
			where: { loginId }
		});
		if (!user) {
			return null;
		}
		return user;
	}

	static async getUser(userId: string): Promise<User | null> {
		const user = await prisma.user.findUnique({
			where: { id: userId }
		});
		if (!user) {
			return null;
		}
		return user;
	}
}
