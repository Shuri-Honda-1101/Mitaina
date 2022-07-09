import React, { FC } from 'react';
import {
	XCircleIcon,
	CheckCircleIcon,
	InformationCircleIcon,
	ExclamationIcon
} from '@heroicons/react/outline';

type Map = {
	key: string;
	class: string[];
};

type Props = {
	type?: 'default' | 'info' | 'success' | 'warning' | 'error';
	message: string;
};

const typeSetting: Map[] = [
	{ key: 'default', class: [''] },
	{ key: 'info', class: ['alert-info'] },
	{ key: 'success', class: ['alert-success'] },
	{ key: 'warning', class: ['alert-warning'] },
	{ key: 'error', class: ['alert-error'] }
];

export const Alert: FC<Props> = ({ message, type = 'default' }: Props) => {
	const _type = typeSetting.filter((map: Map) => map.key === type).map((map: Map) => map.class);
	return (
		<div className={`alert ${_type} shadow-lg`}>
			<div className="flex items-center">
				{type === 'success' && <CheckCircleIcon className="w-6" />}
				{type === 'error' && <XCircleIcon className="w-6" />}
				{type === 'info' && <InformationCircleIcon className="w-6" />}
				{type === 'warning' && <ExclamationIcon className="w-6" />}
				<span className="text-sm">{message}</span>
			</div>
		</div>
	);
};

export default Alert;
