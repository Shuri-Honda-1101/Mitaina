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

const sizeSetting: Map[] = [
	{ key: 'small', class: ['btn-sm'] },
	{ key: 'normal', class: [''] },
	{ key: 'large', class: ['btn-lg'] },
	{ key: 'tiny', class: ['btn-xs'] }
];
const colorSetting: Map[] = [
	{ key: 'default', class: [''] },
	{ key: 'primary', class: ['btn-primary'] },
	{ key: 'secondary', class: ['btn-secondary'] },
	{ key: 'accent', class: ['btn-accent'] },
	{ key: 'ghost', class: ['btn-ghost'] },
	{ key: 'link', class: ['btn-link'] },
	{ key: 'success', class: ['btn-success'] },
	{ key: 'warning', class: ['btn-warning'] },
	{ key: 'error', class: ['btn-error'] }
];
const shapeSetting: Map[] = [
	{ key: 'default', class: [''] },
	{ key: 'circle', class: ['btn-circle'] },
	{ key: 'square', class: ['btn-square'] }
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
	const _size = sizeSetting.filter((map: Map) => map.key === size).map((map: Map) => map.class);
	const _color = colorSetting.filter((map: Map) => map.key === color).map((map: Map) => map.class);
	const _shape = shapeSetting.filter((map: Map) => map.key === shape).map((map: Map) => map.class);
	const className = [
		'btn',
		block ? 'btn-block' : '	',
		outline ? 'btn-outline' : '',
		loading ? 'loading' : '',
		..._color,
		..._shape,
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
