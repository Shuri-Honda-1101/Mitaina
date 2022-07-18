import Modal from 'components/atoms/Modal';
import React, { FC } from 'react';
import Button from 'components/atoms/Button';

type Props = {
	children: React.ReactNode;
	idFor: string;
	modalClasses?: string[];
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
};

const OpenModal: FC<Props> = ({
	idFor,
	btnChildren,
	children,
	modalClasses = [],
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
			<Modal idFor={idFor} children={children} classes={modalClasses}></Modal>
		</>
	);
};

export default OpenModal;
