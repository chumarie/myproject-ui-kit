import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		coverage: {
			reporter: ['text', 'json', 'html']
		}
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@atoms': path.resolve(__dirname, './src/components/atoms'),
			'@molecules': path.resolve(__dirname, './src/components/molecules'),
			'@organisms': path.resolve(__dirname, './src/components/organisms'),
			'@templates': path.resolve(__dirname, './src/components/templates'),
			'@pages': path.resolve(__dirname, './src/components/pages')
		}
	}
});
