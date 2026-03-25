<script lang="ts">
	import { onMount } from 'svelte';

	let container = $state<HTMLDivElement | null>(null);
	let ShowcaseComponent = $state<any>(null);
	let loaded = $state(false);

	onMount(() => {
		if (!container) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !loaded) {
					loaded = true;
					observer.disconnect();
					import('./ComponentShowcase.svelte').then((mod) => {
						ShowcaseComponent = mod.default;
					});
				}
			},
			{ rootMargin: '200px' }
		);

		observer.observe(container);

		return () => observer.disconnect();
	});
</script>

<div bind:this={container}>
	{#if ShowcaseComponent}
		<ShowcaseComponent />
	{:else}
		<div class="min-h-screen" aria-hidden="true"></div>
	{/if}
</div>
