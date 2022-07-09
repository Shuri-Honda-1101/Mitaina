import React, { FC } from 'react';

type Props = {
	children: React.ReactNode;
	titleText: string;
};

export const Hero: FC<Props> = ({ children, titleText }: Props) => {
	return (
		<div className="relative hero pb-32 min-h-screen bg-base-200">
			<div className="hero-content flex-col gap-8">
				<div className="text-center">
					<p className="text-shadow text-4xl text-primary font-black stroke-white stroke-1">
						{titleText}
					</p>
				</div>
				{children}
			</div>
		</div>
	);
};

export default Hero;
