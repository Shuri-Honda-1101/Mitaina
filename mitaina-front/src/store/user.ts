import { atom } from 'recoil';
import { getJSON } from '../lib/EndpointHelper';

export const userAtom = atom({
	key: 'auth/signIn',
	default: getJSON('auth/user').then((user) => user || null)
});
