import React, { FC } from 'react';

type Map = {
	key: string;
	class: string[];
};

type Props = {
	type?: 'text' | 'email' | 'password';
	placeholder?: string;
	fullWidth?: boolean;
	border?: boolean;
	ghost?: boolean;
	color?: 'default' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
	size?: 'large' | 'medium' | 'small' | 'normal' | 'tiny';
	disabled?: boolean;
	classes?: string[];
	pattern?: string;
	id?: string;
	value?: string;
	onClick?: (event: any) => void;
	onChange?: (event: any) => void;
};

const SizeSetting: Map[] = [
	{ key: 'tiny', class: ['input-xs'] },
	{ key: 'small', class: ['input-sm'] },
	{ key: 'normal', class: [''] },
	{ key: 'medium', class: ['input-md'] },
	{ key: 'large', class: ['input-lg'] }
];

export const Input: FC<Props> = ({
	type = 'text',
	placeholder = '',
	fullWidth = true,
	border = false,
	ghost = false,
	color = 'default',
	size = 'normal',
	disabled = false,
	classes = [],
	pattern,
	id,
	value,
	onClick,
	onChange
}: Props) => {
	const _size = SizeSetting.filter((map: Map) => map.key === size).map((map: Map) => map.class);
	const className = [
		'input',
		'max-w-xs',
		fullWidth ? 'w-full' : '',
		border ? 'input-bordered' : '',
		ghost ? 'input-ghost' : '',
		color === 'default' ? '' : `input-${color}`,
		..._size,
		...classes
	].join(' ');

	const handleSubmit = (event: any) => {
		if (onClick && !disabled) {
			onClick(event);
		}
		if (onChange && !disabled) {
			onChange(event);
		}
	};

	return (
		<input
			type={type}
			placeholder={placeholder}
			className={`${className}`}
			disabled={disabled}
			onClick={handleSubmit}
			pattern={pattern}
			id={id}
			value={value}
			onChange={handleSubmit}
		/>
	);
};

export default Input;
