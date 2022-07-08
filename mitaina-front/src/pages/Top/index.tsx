import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { postJSON } from '../../lib/EndpointHelper';

type Props = {};

const Top: FC<Props> = () => {
	const navigate = useNavigate();
	const onClickLogout = async () => {
		const res = await postJSON('signout', {});
		if (res.ok) {
			navigate('/login');
		}
	};
	return (
		<>
			<p>Top</p>
			<button onClick={onClickLogout}>ログアウト</button>
		</>
	);
};

export default Top;
