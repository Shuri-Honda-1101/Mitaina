import React, { FC, useState } from 'react';
import { postJSON } from '../../lib/EndpointHelper';
import { XCircleIcon, CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';
import Hero from 'components/atoms/Hero';
import Card from 'components/atoms/Card';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';

type Props = {};

const Register: FC<Props> = () => {
	const navigate = useNavigate();
	const [loginId, setLoginId] = useState<string>('');
	const [userName, setUserName] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [message, setMessage] = useState<{
		type: 'success' | 'error';
		message: string;
	} | null>(null);
	const [result, setResult] = useState<boolean>(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (loginId === '' || userName === '' || password === '') {
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
		const createRes = await postJSON('register', {
			loginId,
			userName,
			password
		});
		if (createRes.status === 409) {
			setMessage({ type: 'error', message: 'すでに登録されているログインIDです' });
		} else if (createRes.status === 404) {
			setMessage({ type: 'error', message: 'アカウント作成に失敗しました' });
		}
		if (createRes.ok) {
			setMessage({
				type: 'success',
				message: 'アカウントを作成しました。下記のリンクからログインしてください。'
			});
			setResult(true);
		}
	};
	return (
		<>
			<Hero titleText="ミタイナ風オンライン">
				{message && (
					<div className={`alert alert-${message.type} shadow-lg`}>
						<div className="flex items-center">
							{message.type === 'success' ? (
								<CheckCircleIcon className="w-6" />
							) : (
								<XCircleIcon className="w-6" />
							)}
							<span className="text-sm">{message.message}</span>
						</div>
					</div>
				)}
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
							<label htmlFor="register-userName" className="label">
								<span className="label-text">ユーザー名</span>
							</label>
							<Input
								onClick={() => setMessage(null)}
								type="email"
								id="register-userName"
								border={true}
								value={userName}
								onChange={(e) => setUserName(e.target.value)}
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
						{result && (
							<div className="label mt-2">
								<p
									onClick={() => navigate('../login')}
									className="label-text-alt link link-hover text-primary flex justify-start items-center"
								>
									<ArrowLeftIcon className="w-3 mr-1" />
									ログイン
								</p>
							</div>
						)}
						<div className="form-control mt-6">
							<Button type="submit" color="primary" disabled={result}>
								登録
							</Button>
						</div>
					</form>
				</Card>
			</Hero>
		</>
	);
};

export default Register;
