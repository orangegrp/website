<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { onMount } from 'svelte';
    import { root } from 'postcss';

	import redhat_ibm_logo from '$lib/images/redhat-ibm-logo.png';
	import msft_logo from '$lib/images/msft-logo.png';
	import twitter_logo from '$lib/images/twitter-logo.png';
	import envelope_icon from '$lib/images/envelope-icon.png';
</script>

<svelte:head>
	<title>Order 332</title>
	<meta name="description" content="" />
</svelte:head>

<section class="lg:pl-24 lg:pr-24 2xl:pl-48 2xl:pr-48">
	<div class="writer mt-20">
		<h1 class="text-3xl 2xl:text-4xl">
			We're a global community of
		</h1>
		<h1 id="typer" class="writer-text text-emerald-400 text-3xl 2xl:text-4xl">
			cybersecurity students <span class="text-white">&</span> experts.
		</h1>
		<h1>
			Bound by our founding principles of community, knowledge & friendship.
		</h1>
		<h5 class="text-zinc-400 text-xs mt-8 mb-2">
			Our members have worked at:
		</h5>
		<div>
			<img src={redhat_ibm_logo} class="w-auto h-6 inline pr-2" alt="IBM RedHat"/>
			<img src={msft_logo} class="w-auto h-6 inline pr-2 pl-2" alt="Microsoft"/>
		</div>
	</div>
</section>

<section class="lg:pl-24 lg:pr-24 2xl:pl-48 2xl:pr-48 mt-20">
	<div class="inline-block max-w-xl p-6 border ml-2 border-zinc-800 rounded-lg card mb-4">
		<img src={envelope_icon} class="w-auto h-6 inline pr-2" alt="Twitter"/>
		<h1 class="text-xl mt-4">Want to be part of the community?</h1>
		<p class="leading-none mt-2">
			As we're invite-only, you'll need to reach out to us through Twitter DMs in order to join. That keeps everyone safe.
		</p>	
	</div>
	<div class="inline-block md:max-w-xs sm:max-w-xl p-6 border border-zinc-800 rounded-lg card mb-4">
		<img src={twitter_logo} class="w-auto h-5 inline pr-2" alt="Twitter"/>
		<h1 class="text-xl mt-4">Follow us on Twitter</h1>
		<p class="leading-none mt-2">
			Keep up to date with the latest news & service updates
			<a href="https://twitter.com/@order332" class="underline">@order332</a>.
		</p>	
	</div>
</section>


<style>	
.writer {
	display: inline-block;
}

.writer-text {
    display: inline-block;
  	overflow: hidden;
 	animation: typing 1s steps(20, end), blink .75s step-end infinite;
    white-space: nowrap;
    border-right: 10px solid white;
    box-sizing: border-box;
}

@keyframes typing {
    from { 
        width: 0% 
    }
    to { 
        width: 100% 
    }
}

@keyframes blink {
    from, to { 
        border-color: transparent 
    }
    50% { 
        border-color: white; 
    }
}
</style>
