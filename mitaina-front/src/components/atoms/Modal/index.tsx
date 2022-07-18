import React, { FC } from 'react';

type Props = {
	children: React.ReactNode;
	idFor: string;
	classes?: string[];
};

export const Modal: FC<Props> = ({ children, idFor, classes = [] }: Props) => {
	const className = ['modal-box', 'relative', ...classes].join(' ');

	return (
		<>
			<input type="checkbox" id={idFor} className="modal-toggle" />
			<label htmlFor={idFor} className="modal cursor-pointer">
				<label className={className} htmlFor="">
					{children}
				</label>
			</label>
		</>
	);
};

export default Modal;
