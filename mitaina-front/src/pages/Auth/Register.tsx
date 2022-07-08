import React, { FC, useState } from 'react';
import { postJSON } from '../../lib/EndpointHelper';
import { XCircleIcon, CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';

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
			<div className="relative hero pb-32 min-h-screen bg-base-200">
				<div className="hero-content flex-col gap-8">
					<div className="text-center">
						<h1 className="text-5xl font-bold">ミタイナ</h1>
					</div>
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
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<div className="card-body">
							<form onSubmit={handleSubmit}>
								<div className="form-control">
									<label htmlFor="register-loginId" className="label">
										<span className="label-text">ユーザーID</span>
									</label>
									<input
										onClick={() => setMessage(null)}
										type="text"
										pattern="^[0-9A-Za-z]+$"
										id="register-loginId"
										className="input input-bordered"
										value={loginId}
										onChange={(e) => setLoginId(e.target.value)}
									/>
								</div>
								<div className="form-control">
									<label htmlFor="register-userName" className="label">
										<span className="label-text">ユーザー名</span>
									</label>
									<input
										onClick={() => setMessage(null)}
										type="email"
										id="register-userName"
										className="input input-bordered"
										value={userName}
										onChange={(e) => setUserName(e.target.value)}
									/>
								</div>
								<div className="form-control">
									<label htmlFor="register-password" className="label">
										<span className="label-text">パスワード</span>
									</label>
									<input
										onClick={() => setMessage(null)}
										type="password"
										id="register-password"
										className="input input-bordered"
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
									<button type="submit" className="btn btn-primary" disabled={result}>
										登録
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
