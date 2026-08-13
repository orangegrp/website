import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';

export default defineConfig({
	site: 'https://www.order332.com',
	integrations: [mdx()],
	markdown: {
		shikiConfig: {
			theme: 'github-dark',
			transformers: [
				{
					pre(node) {
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
		resolve: {
			alias: { '$lib': '/src/lib' }
		},
		plugins: [tailwindcss()],
	}
});
