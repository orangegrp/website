import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		author: z.string().default('332'),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

const legal = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
});

const appBugBounty = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/app-bug-bounty' }),
});

export const collections = { blog, legal, appBugBounty };
