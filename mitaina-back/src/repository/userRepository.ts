import { User } from '@prisma/client';
import prisma from '../lib/prisma';
import bcrypt from 'bcrypt';

type CreateUser = { loginId: string; userName: string; password: string };

export class UserRepository {
	static async createUser(data: CreateUser): Promise<User> {
		const { loginId, userName, password } = data;
		console.log({
			loginId,
			name: userName,
			passwordHash: await bcrypt.hash(password, 10)
		});
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
}
