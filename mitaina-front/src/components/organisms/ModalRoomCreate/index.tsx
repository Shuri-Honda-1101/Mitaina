import { ArrowCircleRightIcon } from '@heroicons/react/outline';
import OpenModal from 'components/molecules/OpenModal';
import React, { FC } from 'react';

type Props = {};

const ModalRoomCreate: FC<Props> = () => {
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
			modalActionTitle="ルームを作成する"
		>
			<p>test</p>
		</OpenModal>
	);
};

export default ModalRoomCreate;
