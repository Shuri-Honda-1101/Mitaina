import React, { FC } from 'react';

type Props = {
	children: React.ReactNode;
	modalActionTitle: string;
	idFor: string;
	classes?: string[];
	modalActionClasses?: string[];
	onClick?: (event: any) => void;
};

export const Modal: FC<Props> = ({
	children,
	modalActionTitle,
	idFor,
	classes = [],
	modalActionClasses = [],
	onClick
}: Props) => {
	const className = ['modal-box', 'relative', ...classes].join(' ');
	const modalActionClassName = ['btn', ...modalActionClasses].join(' ');

	return (
		<>
			<input type="checkbox" id={idFor} className="modal-toggle" />
			<label htmlFor={idFor} className="modal cursor-pointer">
				<label className={className} htmlFor="">
					{children}
					<div className="modal-action">
						<label htmlFor={idFor} onClick={onClick} className={modalActionClassName}>
							{modalActionTitle}
						</label>
					</div>
				</label>
			</label>
		</>
	);
};

export default Modal;
