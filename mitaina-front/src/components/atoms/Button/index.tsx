import React, { FC } from 'react';

type Map = {
	key: string;
	class: string[];
};

type Props = {
	children: React.ReactNode;
	color?:
		| 'default'
		| 'primary'
		| 'secondary'
		| 'accent'
		| 'ghost'
		| 'link'
		| 'success'
		| 'warning'
		| 'error';
	outline?: boolean;
	size?: 'large' | 'medium' | 'small' | 'normal';
	block?: boolean;
	loading?: boolean;
	shape?: 'default' | 'circle' | 'square';
	disabled?: boolean;
	classes?: string[];
	type?: 'button' | 'submit' | 'reset';
	onClick?: (event: any) => void;
};

const SizeSetting: Map[] = [
	{ key: 'small', class: ['btn-sm'] },
	{ key: 'normal', class: [''] },
	{ key: 'large', class: ['btn-lg'] },
	{ key: 'tiny', class: ['btn-xs'] }
];

export const Button: FC<Props> = ({
	children,
	color = 'default',
	outline = false,
	size = 'normal',
	block = false,
	loading = false,
	shape = 'default',
	disabled = false,
	classes = [],
	type = 'button',
	onClick
}: Props) => {
	const _size = SizeSetting.filter((map: Map) => map.key === size).map((map: Map) => map.class);
	const className = [
		'btn',
		color === 'default' ? '' : `btn-${color}`,
		outline ? 'btn-outline' : '',
		block ? 'btn-block' : '',
		loading ? 'loading' : '',
		shape === 'default' ? '' : `btn-${shape}`,
		..._size,
		...classes
	].join(' ');

	const handleSubmit = (event: any) => {
		if (onClick && !disabled) {
			onClick(event);
		}
	};

	return (
		<button className={`${className}`} disabled={disabled} onClick={handleSubmit} type={type}>
			{children}
		</button>
	);
};

export default Button;
