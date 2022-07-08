import { User } from '@prisma/client';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getJSON } from '../../lib/EndpointHelper';
import { userAtom } from '../../store/user';

type Props = {};

const Top: FC<Props> = () => {
	const navigate = useNavigate();
	const user = useRecoilValue(userAtom);
	useEffect(() => {
		if (!user) {
			navigate('../login');
		}
	}, [user]);
	return (
		<>
			<p>Top</p>
		</>
	);
};

export default Top;
