import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://next.order332.com',
	integrations: [svelte(), mdx()],
	compressHTML: true,
	prefetch: {
		prefetchAll: false,
		defaultStrategy: 'hover',
	},
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			noExternal: ['bits-ui', 'runed', 'svelte-toolbelt', '@lucide/svelte'],
			alias: { '$lib': '/src/lib' }
		},
		build: {
			cssMinify: 'lightningcss',
			rollupOptions: {
				output: {
					manualChunks(id) {
						if (id.includes('ComponentShowcase')) {
							return 'showcase';
						}
					},
				},
			},
		},
	}
});
