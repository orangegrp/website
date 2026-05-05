<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { cn } from "$lib/utils.js";
	import { MenuIcon, XIcon, ChevronRightIcon } from "@lucide/svelte/icons";

	let pathname = $state(typeof window !== "undefined" ? window.location.pathname : "/");

	let mobileOpen = $state(false);

	const navLinks = [
		{ label: "Home", href: "/" },
		{ label: "Blog", href: "/blog" },
		{ label: "About", href: "/about" },
	];

	function isActive(href: string) {
		if (href === "/") return pathname === "/";
		return pathname.startsWith(href);
	}
</script>

<nav
	class="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
>
	<div
		class={cn(
			"glass-card w-full max-w-3xl rounded-2xl px-4 py-2 transition-all duration-300",
			mobileOpen && "rounded-b-2xl",
		)}
	>
		<!-- Main row -->
		<div class="flex items-center justify-between gap-4">
			<!-- Logo -->
			<a
				href="/"
				class="glass-nav-link flex shrink-0 items-center gap-2.5 rounded-xl px-2 py-1.5 no-underline transition-all"
				aria-label="332 — Home"
			>
				<img
					src="/polygon.svg"
					alt="332 logo"
					class="h-6 w-6"
					fetchpriority="high"
					width="24"
					height="24"
					style="filter: drop-shadow(0 0 6px oklch(1 0 0 / 20%));"
				/>
				<span class="text-lg tracking-widest text-foreground">332</span>
			</a>

			<!-- Desktop nav links -->
			<div class="hidden items-center gap-1 md:flex">
				{#each navLinks as link (link.href)}
					<a
						href={link.href}
						class={cn(
							"glass-nav-link rounded-lg px-3 py-1.5 text-sm tracking-wider no-underline transition-all",
							isActive(link.href)
								? "text-foreground"
								: "text-muted-foreground hover:text-foreground",
						)}
					>
						{link.label}
					</a>
				{/each}
			</div>

		<!-- Desktop: Members Area button -->
		<a
			href="https://app.order332.com/login"
			class="hidden shrink-0 md:inline-flex"
			title="Members Area"
		>
			<Button
				variant="glass"
				size="sm"
				class="tracking-wider"
			>
				<span class="text-xs tracking-widest text-foreground">Members Area</span>
				<ChevronRightIcon class="h-4 w-4 text-foreground drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]" />
			</Button>
		</a>

		<!-- Mobile: hamburger -->
			<button
				class="glass-button glass-button-ghost rounded-lg p-2 transition-all md:hidden"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label={mobileOpen ? "Close menu" : "Open menu"}
				aria-expanded={mobileOpen}
			>
				{#if mobileOpen}
					<XIcon class="h-5 w-5 text-foreground" />
				{:else}
					<MenuIcon class="h-5 w-5 text-foreground" />
				{/if}
			</button>
		</div>

		<!-- Mobile drawer -->
		{#if mobileOpen}
			<div class="mt-2 flex flex-col gap-1 border-t border-white/5 pb-1 pt-2 md:hidden">
				{#each navLinks as link (link.href)}
					<a
						href={link.href}
						class={cn(
							"glass-nav-link rounded-lg px-3 py-2.5 text-sm tracking-wider no-underline transition-all",
							isActive(link.href)
								? "text-foreground"
								: "text-muted-foreground hover:text-foreground",
						)}
					>
						{link.label}
					</a>
				{/each}

				<div class="mt-2 border-t border-white/5 pt-2" title="Members Area">
				<a
					href="https://app.order332.com/login"
					target="_blank"
					rel="noopener noreferrer"
					class="w-full no-underline"
					style="display: block"
				>
					<Button
						variant="glass"
						size="sm"
						class="w-full tracking-wider"
						type="button"
					>
						<span class="text-xs tracking-widest text-foreground">Members Area</span>
					</Button>
				</a>
			</div>
			</div>
		{/if}
	</div>
</nav>
