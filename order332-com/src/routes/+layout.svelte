<script>
	import Header from './components/Header.svelte';
	import './styles.css';
	import "../app.css";
	import logo from '$lib/images/polygon-icon.png';
	import logo_svg from '$lib/images/polygon-icon.svg';
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href={logo} />
</svelte:head>


<div class="app">
	<Header />

	<video src="https://utfs.io/f/Hqd7taZdF7DENwS8NAcfoeU2FAv6MgpHSrC0zsQ1iRjn9Lhx" autoplay muted loop class="absolute top-0 left-0 w-full h-full object-cover z-index-[-10]"></video>
	
	<main class="relative z-index-[10]">
		<slot />
	</main>

	
	<footer class="rounded-lg shadow mt-24">
		<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
			<div class="sm:flex sm:items-center sm:justify-between">
				<a href="https://order332.com" class="flex items-center mb-4 sm:mb-0">
					<img src={logo_svg} class="h-8 mr-3" alt="332 Logo" />
					<span class="self-center text-xl font-semibold whitespace-nowrap">332</span>
				</a>
				<ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-zinc-500 sm:mb-0">

				</ul>
			</div>
			<hr class="my-6 border-zinc-800 sm:mx-auto lg:my-8" />
			<span class="block text-sm text-zinc-500 sm:text-center mb-1">© 2024 <a href="https://order332.com" class="hover:underline">332</a>. All Rights Reserved.</span>
		</div>
	</footer>

</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		flex-direction: column;
		padding: 1rem;
		margin: 0;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		background-color: #000000aa;
		backdrop-filter: blur(16px) brightness(100%);
		-webkit-backdrop-filter: blur(16px) brightness(100%);
	}
</style>
