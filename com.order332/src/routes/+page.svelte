<svelte:head>
	<title>332 — Something big is coming</title>
	<meta name="description" content="We're building something new. Stay tuned." />

	<meta property="og:type" content="website" />
	<meta property="og:title" content="332 — Something big is coming" />
	<meta property="og:description" content="We're building something new. Stay tuned." />
	<meta property="og:image" content="https://order332.com/og-image.png" />
	<meta property="og:url" content="https://order332.com" />
	<meta property="og:site_name" content="332" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="332 — Something big is coming" />
	<meta name="twitter:description" content="We're building something new. Stay tuned." />
	<meta name="twitter:image" content="https://order332.com/og-image.png" />
</svelte:head>

<main class="page-root relative flex min-h-screen items-center justify-center overflow-hidden">
	<!-- Dot grid pattern -->
	<div class="dot-pattern pointer-events-none absolute inset-0" aria-hidden="true"></div>

	<!-- Ambient floating orbs (white/gray) -->
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

	<!-- Glass card -->
	<div
		class="glass-card relative z-10 mx-4 flex max-w-md flex-col items-center gap-6 px-8 py-12 text-center sm:px-14 sm:py-16"
	>
		<!-- Logo -->
		<img
			src="/polygon.svg"
			alt="332"
			class="h-20 w-20 sm:h-24 sm:w-24"
			style="filter: drop-shadow(0 0 16px oklch(1 0 0 / 15%));"
		/>

		<!-- Headline -->
		<h1 class="text-xl leading-snug tracking-wider text-foreground sm:text-2xl">
			Something big is coming<span class="blink-cursor">_</span>
		</h1>

		<!-- Subtext -->
		<p class="text-sm text-muted-foreground sm:text-base">
			We're building something new. Stay tuned.
		</p>

		<!-- Status indicator -->
		<div class="mt-2 flex items-center gap-2 text-xs tracking-widest text-muted-foreground uppercase">
			<span
				class="inline-block h-1.5 w-1.5 rounded-full"
				style="
					background: oklch(0.7 0 0);
					animation: pulse-glow 2.5s ease-in-out infinite;
					box-shadow: 0 0 6px oklch(0.7 0 0 / 40%);
				"
			></span>
			<span>In development</span>
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

	.glass-card {
		background: oklch(1 0 0 / 3%);
		border: 1px solid oklch(1 0 0 / 7%);
		border-radius: 1.5rem;
		backdrop-filter: blur(40px) saturate(1.2);
		-webkit-backdrop-filter: blur(40px) saturate(1.2);
		box-shadow:
			inset 0 1px 0 oklch(1 0 0 / 5%),
			inset 0 -1px 0 oklch(1 0 0 / 2%),
			0 0 60px oklch(1 0 0 / 3%),
			0 20px 40px oklch(0 0 0 / 35%);
		animation: fade-in-up 0.8s ease-out both;
	}

	.blink-cursor {
		animation: blink-cursor 1s step-end infinite;
	}
</style>
