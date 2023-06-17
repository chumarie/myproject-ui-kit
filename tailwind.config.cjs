// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */

const tailwindPlugin = plugin(
	({ addUtilities }) => {
		addUtilities({
			'.overlay': {
				backgroundColor: 'rgba(0, 0, 0, 0.6)',
				position: 'absolute',
				bottom: '0',
				width: '100%',
				height: '100%',
				padding: '15px 15px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				zIndex: 1
			}
		});
	},
	{
		theme: {
			extend: {
				fontFamily: {
					// manrope 500: medium, manrope 600: semi-bold
					manrope: ['Manrope', 'sans-serif'],
					fugaz: ['Fugaz One', 'sans-serif']
				},
				colors: {
					primary: { DEFAULT: '#8883D6' },
					secondary: { DEFAULT: '#111821' },
					success: { DEFAULT: '#0BAA60' }
				},
				borderWidth: {
					DEFAULT: '2px'
				},
				borderColor: {
					DEFAULT: '#1c1c20'
				},
				width: {
					sidebar: '180px'
				},
				spacing: {
					grid: '20px'
				},
				backgroundColor: {}
			}
		}
	}
);

module.exports = {
	purge: ['./src/components/**/**/*.svelte', './src/*.html'],
	content: ['./index.html', './src/components/**/**/*.{js,ts,jsx,tsx}'],
	plugins: [tailwindPlugin]
};
