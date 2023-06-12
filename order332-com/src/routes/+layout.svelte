<script>
	import Header from './Header.svelte';
	import './styles.css';
	import "../app.css";
	import logo from '$lib/images/polygon-icon.png';
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href={logo} />
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	
	<footer class="rounded-lg shadow m-4 mt-24">
		<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
			<div class="sm:flex sm:items-center sm:justify-between">
				<a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
					<img src={logo} class="h-8 mr-3" alt="Order 332 Logo" />
					<span class="self-center text-xl font-semibold whitespace-nowrap">Order 332</span>
				</a>
				<ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-zinc-500 sm:mb-0">
					<li>
						<a href="/about" class="mr-4 hover:underline md:mr-6 ">About</a>
					</li>
					<li>
						<a href="/privacy" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
					</li>
					<li>
						<a href="/terms" class="mr-4 hover:underline md:mr-6 ">Terms of Service</a>
					</li>
					<li>
						<a href="https://twitter.com/messages/compose?recipient_id=1477674069596192768" class="hover:underline">Contact</a>
					</li>
				</ul>
			</div>
			<hr class="my-6 border-zinc-800 sm:mx-auto lg:my-8" />
			<span class="block text-sm text-zinc-500 sm:text-center mb-1">© 2023 <a href="https://order332.com" class="hover:underline">Order 332</a>. All Rights Reserved.</span>
			<span class="block text-xs text-zinc-500 sm:text-center">
				Order 332 is not affiliated with any of the brands listed on this site including but not limited to Microsoft Corporation,
				Red Hat Inc, Verizon Communications Inc & T-Mobile US Inc. The respective brands are owned by their respective owners.
				Use of these images is legally permitted in the United States (falls under "Fair use" of the DMCA),
				United Kingdom (falls under "Fair dealing" of Section 30 CDPA) & the EU (falls under "Criticism", Article 57 of Directive (EU) 2019/790).
			</span>
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
