import { ArrowCircleRightIcon } from '@heroicons/react/outline';
import Alert from 'components/atoms/Alert';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import OpenModal from 'components/molecules/OpenModal';
import { postJSON } from 'lib/EndpointHelper';
import React, { FC, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'store/user';

type Props = {};

const ModalRoomCreate: FC<Props> = () => {
	const currentUser = useRecoilValue(userAtom);
	const [roomName, setRoomName] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [message, setMessage] = useState<{
		type: 'success' | 'error';
		message: string;
	} | null>(null);

	const onClickCreateRoom = async () => {
		if (roomName === '') {
			setMessage({ type: 'error', message: 'ルーム名は必須項目です' });
			return;
		}
		const createRes = await postJSON('room', { roomName, password, user: currentUser });
		console.log(createRes);
		if (createRes.statusText === 'GameUser not created') {
			setMessage({ type: 'error', message: 'ユーザーの作成に失敗しました' });
		}
		if (createRes.statusText === 'Room not created') {
			setMessage({ type: 'error', message: 'ルームの作成に失敗しました' });
		}
		if (createRes.ok) {
			setMessage({
				type: 'success',
				message: 'ルームを作成しました'
			});
		}
	};
	return (
		<OpenModal
			btnColor="primary"
			btnSize="large"
			btnClasses={['shadow-xl', 'my-2', 'relative']}
			btnBlock={true}
			btnChildren={
				<>
					ルームを作成する
					<ArrowCircleRightIcon className="w-6 absolute top-1/2 right-5 -translate-y-2/4" />
				</>
			}
			idFor="modal-room-create"
		>
			<div className="flex justify-center">
				<div className="flex justify-center flex-col max-w-xs w-full">
					{message && <Alert message={message.message} type={message.type} />}
					<div className="w-full">
						<label htmlFor="register-loginId" className="label">
							<span className="label-text">ルーム名</span>
						</label>
						<Input
							onClick={() => setMessage(null)}
							type="text"
							pattern="^[0-9A-Za-z]+$"
							id="register-loginId"
							border={true}
							value={roomName}
							onChange={(e) => setRoomName(e.target.value)}
						/>
					</div>
					<div className="w-full">
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
					<Button classes={['my-5', 'w-full']} color="primary" onClick={onClickCreateRoom}>
						ルームを作成する
					</Button>
				</div>
			</div>
		</OpenModal>
	);
};

export default ModalRoomCreate;
