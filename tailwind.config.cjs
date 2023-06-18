// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindPlugin = require('./tailwindPlugin.cjs');

module.exports = {
	purge: ['./src/components/**/**/*.svelte', './src/*.html'],
	content: ['./index.html', './src/components/**/**/*.{js,ts,jsx,tsx}'],
	plugins: [tailwindPlugin]
};
