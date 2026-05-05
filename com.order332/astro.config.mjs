import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://www.order332.com',
	integrations: [svelte(), mdx(), react()],
	markdown: {
		shikiConfig: {
			theme: 'github-dark',
			transformers: [
				{
					pre(node) {
						// Remove Shiki's inline background-color so CSS can control it
						if (node.properties.style) {
							node.properties.style = node.properties.style
								.replace(/background-color:[^;]+;?/, '')
								.trim();
						}
					},
				},
			],
		},
	},
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
