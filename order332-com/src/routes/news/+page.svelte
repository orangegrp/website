<svelte:head>
	<title>News</title>
	<meta name="description" content="News from Order 332" />	
</svelte:head>

<script>
	import { browser } from '$app/environment';
</script>

<div class="text-column">
	<div class="inline-block max-w-screen-xl p-6 border border-zinc-800 rounded-lg card mb-4">
		<a class="twitter-timeline" href="https://twitter.com/order332?ref_src=twsrc%5Etfw" data-theme="dark" style="color: var(--faint-accent);">@Order332 on Twitter</a>
	</div>
</div>

{#if browser}
<script defer src="https://platform.twitter.com/widgets.js"/>
{/if}