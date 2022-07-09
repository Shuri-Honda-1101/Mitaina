import React, { FC } from 'react';

type Props = {
	children: React.ReactNode;
};

export const Card: FC<Props> = ({ children }: Props) => {
	return (
		<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
			<div className="card-body">{children}</div>
		</div>
	);
};

export default Card;
