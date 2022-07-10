import Modal from 'components/atoms/Modal';
import React, { FC } from 'react';
import Button from 'components/atoms/Button';

type Props = {
	children: React.ReactNode;
	idFor: string;
	modalActionTitle: string;
	modalClasses?: string[];
	modalActionClasses?: string[];
	onClickModal?: (event: any) => void;
	btnChildren: React.ReactNode;
	btnColor?:
		| 'default'
		| 'primary'
		| 'secondary'
		| 'accent'
		| 'ghost'
		| 'link'
		| 'success'
		| 'warning'
		| 'error';
	btnOutline?: boolean;
	btnSize?: 'large' | 'medium' | 'small' | 'normal';
	btnBlock?: boolean;
	btnLoading?: boolean;
	btnShape?: 'default' | 'circle' | 'square';
	btnDisabled?: boolean;
	btnClasses?: string[];
	btnType?: 'button' | 'submit' | 'reset';
	onClickBtn?: (event: any) => void;
};

const OpenModal: FC<Props> = ({
	idFor,
	btnChildren,
	children,
	modalActionTitle,
	modalClasses = [],
	modalActionClasses = [],
	onClickModal,
	btnColor,
	btnOutline,
	btnSize,
	btnBlock,
	btnLoading,
	btnShape,
	btnDisabled,
	btnClasses,
	btnType
}) => {
	return (
		<>
			<Button
				color={btnColor}
				outline={btnOutline}
				size={btnSize}
				block={btnBlock}
				loading={btnLoading}
				shape={btnShape}
				disabled={btnDisabled}
				classes={btnClasses}
				type={btnType}
			>
				<label htmlFor={idFor} className="modal-button">
					{btnChildren}
				</label>
			</Button>
			<Modal
				idFor={idFor}
				children={children}
				modalActionTitle={modalActionTitle}
				classes={modalClasses}
				modalActionClasses={modalActionClasses}
				onClick={onClickModal}
			></Modal>
		</>
	);
};

export default OpenModal;
