<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import logo_svg from "$lib/images/polygon-icon.svg";
	import "../app.css";
    import Navbar from "$lib/modules/navigation/navbar.svelte";
    import type { NavbarProps } from "$lib/modules/navigation/navbar-props";
	let { children } = $props();

	const navdata = {
		links: [
			{
				text: "About 332",
				url: "/about-us",
				align: "middle"
			},
			{
				text: "Discord",
				url: "https://discord.gg/technology",
				align: "middle"
			},
			{
				text: "Publications",
				url: "/publications",
				align: "middle"
			},
			{
				text: "Gallery",
				url: "/gallery",
				align: "middle"
			}
		],
	} satisfies NavbarProps;
</script>

<svelte:head>
	<title>332</title>
	<meta name="description" content="332" />
</svelte:head>

<ModeWatcher defaultMode="dark" />
<Navbar navdata={navdata}/>
<div>
	{@render children()}
</div>
<footer class="border-t border-primary/10 shadow mt-24">
	<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
		<div class="sm:flex sm:items-center sm:justify-between">
			<a href="https://order332.com" class="flex items-center mb-4 sm:mb-0">
				<img src={logo_svg} class="h-8 mr-3" alt="332 Logo" />
				<span class="self-center text-xl font-semibold whitespace-nowrap">332</span>
			</a>
			<ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-primary sm:mb-0">

			</ul>
		</div>
		<hr class="my-6 border-primary/10 sm:mx-auto lg:my-8" />
		<span class="block text-sm text-primary sm:text-center mb-1">© 2024 <a href="https://order332.com" class="hover:underline">332</a>. All Rights Reserved.</span>
	</div>
</footer>