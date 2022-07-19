/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,tsx,js,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#f97316',
				secondary: '#22c55e',
				accent: '#38bdf8',
				neutral: '#f3f4f6',
				'base-100': '#fde68a',
				info: '#3ABFF8',
				success: '#36D399',
				warning: '#fde047',
				error: '#F87272'
			}
		}
	},
	plugins: [require('daisyui'), 'tailwindcss'],
	extends: ['plugin:tailwindcss/recommended'],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#f97316',
					secondary: '#22c55e',
					accent: '#38bdf8',
					neutral: '#f3f4f6',
					'base-100': '#fde68a',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#fde047',
					error: '#F87272'
				}
			}
		]
	}
};
