import React, { FC, useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';
import { postJSON } from 'lib/EndpointHelper';

//components
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Hero from 'components/atoms/Hero';
import Card from 'components/atoms/Card';
import Alert from 'components/atoms/Alert';

type Props = {};

const Login: FC<Props> = () => {
	const [loginId, setLoginId] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [message, setMessage] = useState<{
		type: 'success' | 'error';
		message: string;
	} | null>(null);
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (loginId === '' || password === '') {
			setMessage({ type: 'error', message: '入力されていない項目があります' });
			return;
		}
		if (loginId.length < 6) {
			setMessage({ type: 'error', message: 'ログインIDは6文字以上です' });
			return;
		}
		if (password.length < 6) {
			setMessage({ type: 'error', message: 'パスワードは6文字以上です' });
			return;
		}
		const res = await postJSON('signin', {
			loginId,
			password
		});
		if (res.ok) {
			navigate('/');
		} else if (res.status === 400) {
			setMessage({ type: 'error', message: 'ログインIDまたはパスワードが間違っています' });
		}
	};
	return (
		<>
			<Hero titleText="ミタイナ風オンライン">
				{message && <Alert message={message.message} type={message.type} />}
				<Card>
					<form onSubmit={handleSubmit}>
						<div className="form-control">
							<label htmlFor="register-loginId" className="label">
								<span className="label-text">ユーザーID</span>
							</label>
							<Input
								onClick={() => setMessage(null)}
								type="text"
								pattern="^[0-9A-Za-z]+$"
								id="register-loginId"
								border={true}
								value={loginId}
								onChange={(e) => setLoginId(e.target.value)}
							/>
						</div>
						<div className="form-control">
							<label htmlFor="register-password" className="label">
								<span className="label-text">パスワード</span>
							</label>
							<Input
								onClick={() => setMessage(null)}
								type="password"
								id="register-password"
								border={true}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="form-control mt-6">
							<Button type="submit" color="primary">
								ログイン
							</Button>
						</div>
						<div className="label mt-2">
							<p
								onClick={() => navigate('../register')}
								className="label-text-alt link link-hover text-primary flex justify-start items-center"
							>
								<ArrowLeftIcon className="w-3 mr-1" />
								ユーザー登録
							</p>
						</div>
					</form>
				</Card>
			</Hero>
		</>
	);
};

export default Login;
