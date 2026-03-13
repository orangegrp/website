<script lang="ts">
	import Navbar from "$lib/components/elements/navbar/navbar.svelte";
	import { Button } from "$lib/components/ui/button/index.js";


	import * as ContextMenu from "$lib/components/ui/context-menu/index.js";
 
	let showBookmarks = $state(false);
	let showFullURLs = $state(true);

	let value = $state("pedro");
</script>

<svelte:head>
	<title>332 — Order332</title>
	<meta name="description" content="332 — A new kind of platform. Explore our blog, projects, and more." />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="332 — Order332" />
	<meta property="og:description" content="A new kind of platform. Explore our blog, projects, and more." />
	<meta property="og:image" content="https://order332.com/og-image.png" />
	<meta property="og:url" content="https://order332.com" />
	<meta property="og:site_name" content="332" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="332 — Order332" />
	<meta name="twitter:description" content="A new kind of platform. Explore our blog, projects, and more." />
	<meta name="twitter:image" content="https://order332.com/og-image.png" />
</svelte:head>

<Navbar />

<main class="page-root relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24">
	<!-- Dot grid pattern -->
	<div class="dot-pattern pointer-events-none absolute inset-0" aria-hidden="true"></div>

	<!-- Ambient floating orbs -->
	<div class="pointer-events-none absolute inset-0" aria-hidden="true">
		<div
			class="absolute -left-[10%] -top-[10%] h-[700px] w-[700px] rounded-full"
			style="
				background: radial-gradient(circle, oklch(0.9 0 0 / 8%), transparent 65%);
				animation: float-orb-1 28s ease-in-out infinite;
				filter: blur(100px);
			"
		></div>
		<div
			class="absolute -right-[5%] top-[20%] h-[800px] w-[800px] rounded-full"
			style="
				background: radial-gradient(circle, oklch(0.8 0 0 / 6%), transparent 65%);
				animation: float-orb-2 34s ease-in-out infinite;
				filter: blur(120px);
			"
		></div>
		<div
			class="absolute bottom-[5%] left-[30%] h-[650px] w-[650px] rounded-full"
			style="
				background: radial-gradient(circle, oklch(0.85 0 0 / 7%), transparent 65%);
				animation: float-orb-3 24s ease-in-out infinite;
				filter: blur(110px);
			"
		></div>
	</div>

	<!-- Hero content -->
	<div
		class="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-8 text-center animate-[fade-in-up_0.8s_ease-out_both]"
	>
		<!-- Logo mark -->
		<div class="logo-glow">
			<img
				src="/polygon.svg"
				alt="332"
				class="h-16 w-16 sm:h-20 sm:w-20"
				style="filter: drop-shadow(0 0 24px oklch(1 0 0 / 20%));"
			/>
		</div>

		<!-- Headline -->
		<div class="flex flex-col gap-3">
			<h1 class="text-5xl leading-none tracking-widest text-foreground sm:text-7xl lg:text-8xl">
				332<span class="blink-cursor">_</span>
			</h1>
			<p class="text-lg tracking-widest text-muted-foreground sm:text-xl">
				A new kind of platform.
			</p>
		</div>

		<!-- Body copy -->
		<p class="max-w-md text-sm leading-relaxed tracking-wide text-muted-foreground sm:text-base">
			We're building tools, ideas, and experiences worth paying attention to.
			Explore our projects, read the blog, and join the community.
		</p>

		<!-- CTA buttons -->
		<div class="flex flex-wrap items-center justify-center gap-3">
			<Button href="/projects" variant="default" size="lg" class="tracking-wider">
				Explore Projects
			</Button>
			<Button href="/blog" variant="ghost" size="lg" class="tracking-wider">
				Read the Blog
			</Button>
		</div>

		<ContextMenu.Root>
			<ContextMenu.Trigger
			  class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm"
			>
			  Right click here
			</ContextMenu.Trigger>
			<ContextMenu.Content class="w-52">
			  <ContextMenu.Item inset>
				Back
				<ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
			  </ContextMenu.Item>
			  <ContextMenu.Item inset disabled>
				Forward
				<ContextMenu.Shortcut>⌘]</ContextMenu.Shortcut>
			  </ContextMenu.Item>
			  <ContextMenu.Item inset>
				Reload
				<ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
			  </ContextMenu.Item>
			  <ContextMenu.Sub>
				<ContextMenu.SubTrigger inset>More Tools</ContextMenu.SubTrigger>
				<ContextMenu.SubContent class="w-48">
				  <ContextMenu.Item>
					Save Page As...
					<ContextMenu.Shortcut>⇧⌘S</ContextMenu.Shortcut>
				  </ContextMenu.Item>
				  <ContextMenu.Item>Create Shortcut...</ContextMenu.Item>
				  <ContextMenu.Item>Name Window...</ContextMenu.Item>
				  <ContextMenu.Separator />
				  <ContextMenu.Item>Developer Tools</ContextMenu.Item>
				</ContextMenu.SubContent>
			  </ContextMenu.Sub>
			  <ContextMenu.Separator />
			  <ContextMenu.CheckboxItem bind:checked={showBookmarks}>
				Show Bookmarks
			  </ContextMenu.CheckboxItem>
			  <ContextMenu.CheckboxItem bind:checked={showFullURLs}>
				Show Full URLs
			  </ContextMenu.CheckboxItem>
			  <ContextMenu.Separator />
			  <ContextMenu.RadioGroup bind:value>
				<ContextMenu.Group>
				  <ContextMenu.GroupHeading inset>People</ContextMenu.GroupHeading>
				  <ContextMenu.RadioItem value="pedro">Pedro Duarte</ContextMenu.RadioItem
				  >
				  <ContextMenu.RadioItem value="colm">Colm Tuite</ContextMenu.RadioItem>
				</ContextMenu.Group>
			  </ContextMenu.RadioGroup>
			</ContextMenu.Content>
		  </ContextMenu.Root>
		  
		<!-- Status indicator -->
		<div class="flex items-center gap-2 text-xs tracking-widest text-muted-foreground uppercase">
			<span
				class="inline-block h-1.5 w-1.5 rounded-full"
				style="
					background: oklch(0.7 0 0);
					animation: pulse-glow 2.5s ease-in-out infinite;
					box-shadow: 0 0 6px oklch(0.7 0 0 / 40%);
				"
			></span>
			<span>Live</span>
		</div>
	</div>
</main>

<style>
	.page-root {
		background: var(--background);
	}

	.dot-pattern {
		background-image: radial-gradient(circle, oklch(1 0 0 / 4%) 1px, transparent 1px);
		background-size: 24px 24px;
	}

	.blink-cursor {
		animation: blink-cursor 1s step-end infinite;
	}

	.logo-glow {
		animation: float-orb-1 6s ease-in-out infinite;
	}
</style>
