import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userSelector } from '../store/user';

export const LoggedInRoute = ({ component }: any) => {
	const [currentUser, store] = useRecoilState(userSelector);
	useEffect(() => {
		store(currentUser);
	}, []);

	return <>{currentUser ? component : <Navigate to="/login" />}</>;
};
