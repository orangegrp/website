<script>
	import logo from '$lib/images/polygon-icon.png';
    import { onMount } from 'svelte';

	onMount(() => {
		const button = document.querySelector('#nav-menu-button');
		const menu = document.querySelector('#nav-menu');

		if (button !== null && menu !== null) {
			button.addEventListener('click', () => {
				menu.classList.toggle('hidden');
			});
		}
	});
</script>

<header>
	<nav class="lg:pl-32 lg:pr-32 2xl:pl-64 2xl:pr-64 flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-100 nav-bg">
		<div>
			<a href="/">
				<img src={logo} class="h-8 mr-3" alt="Flowbite Logo" />	
			</a>
		</div>
	
		<svg xmlns="http://www.w3.org/2000/svg" id="nav-menu-button" class="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
		</svg>
	
		<div class="hidden w-full md:flex md:items-center md:w-auto" id="nav-menu">
			<ul class="pt-4 text-base text-grau-100 md:flex md:justify-between md:pt-0 text-zinc-300">
				<!--
					
				-->
				<li>
					<a class="md:p-4 py-2 block text-lg" href="/news">
						News
					</a>
				</li>
				<li>
					<a class="md:p-4 py-2 block text-lg" href="https://twitter.com/order332">
						Join
					</a>
				</li>		
			</ul>
		</div>
	</nav>
</header>

<style>
.nav-bg {
	background-color: #000000aa;
	backdrop-filter: blur(16px) brightness(100%);
	-webkit-backdrop-filter: blur(16px) brightness(100%);
}
</style>