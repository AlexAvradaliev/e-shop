import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '.'),
		},
	},

	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./tests/setup.js'],

		coverage: {
			provider: 'v8',
			reporter: ['text', 'html'],
			thresholds: {
				statements: 100,
				branches: 100,
				functions: 100,
				lines: 100,
			},
		},
	},
});
