import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../store/user';

export const LoggedInRoute = ({ component }: any) => {
	const user = useRecoilValue(userAtom);

	return <>{user ? component : <Navigate to="/login" />}</>;
};
