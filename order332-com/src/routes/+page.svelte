<script>
	import redhat_logo from '$lib/images/redhat-logo.png';
	import msft_logo from '$lib/images/msft-logo.png';
	import twitter_logo from '$lib/images/twitter-logo.png';
	import envelope_icon from '$lib/images/envelope-icon.png';
	import verizon_logo from '$lib/images/verizon-logo.png';
	import tmobile_logo from '$lib/images/tmobile-logo.png';
</script>

<svelte:head>
	<title>Order 332</title>
	<meta name="description" content="Community. Knowledge. Friendship" />
</svelte:head>

<section class="lg:pl-24 lg:pr-24 2xl:pl-48 2xl:pr-48" style="overflow-x:hidden">
	<div class="writer mt-20">
		<h1 class="md:text-3xl 2xl:text-4xl text-2xl text-glow-white">
			We're a global community of 
		</h1>
		<h1 id="typer" class="writer-text text-emerald-400 md:text-3xl 2xl:text-4xl text-2xl text-glow-green-accent">
			cybersec students <span class="text-white">&</span> experts.
		</h1>
		<h1>
			Bound by our founding principles of community, knowledge & friendship.
		</h1>
		<h5 class="text-zinc-400 text-xs mt-8 mb-2">
			Our members have worked at:
		</h5>
		<div>
			<img src={msft_logo} class="w-auto h-6 inline pr-2 mb-4" alt="Microsoft"/>
			<img src={redhat_logo} class="w-auto h-8 inline pr-2 mb-4" alt="IBM RedHat"/>
			<img src={verizon_logo} class="w-auto h-7 inline pr-2 pb-1 mb-4" alt="Verizon"/>
			<img src={tmobile_logo} class="w-auto h-5 inline pr-2 pl-1 mb-4" alt="T-Mobile"/>
		</div>
	</div>
</section>

<section class="lg:pl-24 lg:pr-24 2xl:pl-48 2xl:pr-48 mt-20">
	<div class="inline-block max-w-xl p-6 border border-zinc-800 rounded-lg card mb-4 mr-1">
		<img src={envelope_icon} class="w-auto h-6 inline pr-2" alt="Twitter"/>
		<h1 class="text-xl mt-4">Want to be part of the community?</h1>
		<p class="leading-none mt-2">
			As we're invite-only, you'll need to reach out to us through Twitter DMs in order to join. That keeps everyone safe.
		</p>	
	</div>
	<div class="inline-block md:max-w-xs sm:max-w-xl p-6 border border-zinc-800 rounded-lg card mb-4 mr-1">
		<img src={twitter_logo} class="w-auto h-6 inline pr-2" alt="Twitter"/>
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
