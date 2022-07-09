import Button from 'components/atoms/Button';
import Card from 'components/Card';
import Hero from 'components/Hero';
import Input from 'components/atoms/Input';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { postJSON } from '../../lib/EndpointHelper';
import { ArrowCircleRightIcon, ArrowLeftIcon } from '@heroicons/react/outline';

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
			<Hero titleText="ミタイナ風オンライン">
				<Card>
					<Button
						color="accent"
						size="large"
						classes={['shadow-xl', 'my-2', 'relative']}
						block={true}
					>
						ルームを作成する
						<ArrowCircleRightIcon className="w-6 absolute top-1/2 right-5 -translate-y-2/4" />
					</Button>
					<Button
						color="secondary"
						size="large"
						classes={['shadow-xl', 'my-2', 'relative']}
						block={true}
					>
						ルームに参加する
						<ArrowCircleRightIcon className="w-6 absolute top-1/2 right-5 -translate-y-2/4" />
					</Button>
					<div className="label mt-2">
						<p
							onClick={onClickLogout}
							className="label-text-alt link link-hover text-primary flex justify-start items-center"
						>
							<ArrowLeftIcon className="w-3 mr-1" />
							ログアウト
						</p>
					</div>
				</Card>
			</Hero>
			<button onClick={onClickLogout}>ログアウト</button>
		</>
	);
};

export default Top;
