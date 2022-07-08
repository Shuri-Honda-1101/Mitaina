import { User } from '@prisma/client';
import { atom, DefaultValue, selector } from 'recoil';
import { getJSON } from '../lib/EndpointHelper';

export const userAtom = atom<User | null>({
	key: 'auth/userAtom',
	default: null
});

export const userSelector = selector<User>({
	key: 'auth/getUserState',
	get: async ({ get }) => {
		const currentUser = get(userAtom);
		if (currentUser) {
			return currentUser;
		} else {
			const user = getJSON('auth/user');
			return user as Promise<User>;
		}
	},
	set: ({ set }, newValue) => {
		set(userAtom, newValue instanceof DefaultValue ? null : newValue);
	}
});
