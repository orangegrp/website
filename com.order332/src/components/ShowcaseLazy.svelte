<script lang="ts">
	// This component lazy-loads (dynamically imports) the 'ComponentShowcase.svelte' component,
	// but only when this component becomes visible in the viewport (within 200px of entering).
	// It uses an IntersectionObserver to watch when the wrapper div (container) 
	// scrolls into view. When it does, it imports the actual showcase component and renders it.
	// While the actual component isn't loaded yet, it displays a placeholder div with minimum screen height.
	// This is useful to reduce initial bundle size and loading cost for components
	// that are below the fold or expensive to render at first.

	import { onMount } from 'svelte';

	let container = $state<HTMLDivElement | null>(null); // Will store the reference to the DOM node to observe
	let ShowcaseComponent = $state<any>(null); // Will eventually hold the dynamically loaded component
	let loaded = $state(false); // Tracks if the component has already been loaded

	onMount(() => {
		if (!container) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !loaded) {
					// When the component comes into view and it's not loaded yet:
					loaded = true;
					observer.disconnect(); // Stop observing further scroll/visibility changes
					import('./ComponentShowcase.svelte').then((mod) => {
						// Dynamically import and set the component
						ShowcaseComponent = mod.default;
					});
				}
			},
			{ rootMargin: '200px' } // Start the load when within 200px of viewport
		);

		observer.observe(container);

		// Cleanup: disconnect observer on component destroy
		return () => observer.disconnect();
	});
</script>

<div bind:this={container}>
	{#if ShowcaseComponent}
		<ShowcaseComponent />
	{:else}
		<!-- Placeholder shown while waiting for actual showcase component to load -->
		<div class="min-h-screen" aria-hidden="true"></div>
	{/if}
</div>
