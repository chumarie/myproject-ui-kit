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
			'@ui/atoms': path.resolve(__dirname, './src/components/atoms'),
			'@ui/molecules': path.resolve(__dirname, './src/components/molecules'),
			'@ui/organisms': path.resolve(__dirname, './src/components/organisms'),
			'@ui/templates': path.resolve(__dirname, './src/components/templates'),
			'@ui/pages': path.resolve(__dirname, './src/components/pages')
		}
	}
});
