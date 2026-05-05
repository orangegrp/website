<!--
	Additional “Quick links”-style menus (desktop popover + mobile accordion):

	1. Pick a unique prefix, e.g. `projects` (used below as {name}).

	2. In <script>: duplicate state —
	   {name}Open, mobile{name}Open, {name}TriggerEl, {name}DropdownEl, {name}Top, {name}Left.

	3. Define `{name}Items: NavMenuLink[]` in ./nav-types.ts shape (label, href, optional external, description).

	4. Copy the two $effect blocks that drive this menu (RAF position when open; document click-outside to close)
	   and rename every quickLinks* / quickLinksOpen identifier to your {name}* names.

	5. Copy the hoisted {#if {name}Open} … glass-popover … #each {name}Items block so it sits directly under
	   <nav>, BEFORE the .glass-card wrapper (required so backdrop-filter does not trap the dropdown).

	6. Copy the desktop trigger: div.relative > button.glass-nav-trigger with bind:this={{name}TriggerEl},
	   toggling {name}Open, aria-expanded, and the chevron.

	7. Copy the mobile drawer accordion (button + {#if mobile{name}Open} + nested #each {name}Items).

	8. Add `$derived(menuTriggerActive({name}Items, isActive))` for the trigger’s active text color.

	If two or more of these menus exist, close the others when one opens (e.g. small $effect toggling
	the sibling *Open flags) so only one popover is open at a time.
-->
<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import type { NavMenuLink } from "./nav-types.js";
	import { menuTriggerActive } from "./nav-utils.js";
	import { cn } from "$lib/utils.js";
	import {
		MenuIcon,
		XIcon,
		ChevronDownIcon,
		ChevronRightIcon,
		ExternalLinkIcon,
	} from "@lucide/svelte/icons";

	let pathname = $state(typeof window !== "undefined" ? window.location.pathname : "/");

	let mobileOpen = $state(false);
	let quickLinksOpen = $state(false);
	let mobileQuickLinksOpen = $state(false);

	// Quick links menu — full copy-paste recipe is in the HTML comment at the top of this file.
	let quickLinksTriggerEl: HTMLButtonElement | undefined = $state();
	let quickLinksDropdownEl: HTMLDivElement | undefined = $state();
	let quickLinksTop = $state(0);
	let quickLinksLeft = $state(0);

	const navLinks = [
		{ label: "Home", href: "/" },
		{ label: "Blog", href: "/blog" },
		{ label: "About", href: "/about" },
	];

	const quickLinks: NavMenuLink[] = [
		{ label: "CTF Platform", href: "https://ctf.order332.com", external: true },
		{ label: "Members area registration", href: "https://app.order332.com/register", external: true },
		{ label: "Apply to join", href: "https://discord.gg/WuGrkMZeNG", external: true },
		{ label: "Dev team GitHub", href: "https://github.com/orangegrp", external: true },
		{ label: "Privacy Policy", href: "/app-legal/privacy" },
		{ label: "Terms of Service", href: "/app-legal/terms" },
	];

	$effect(() => {
		if (!quickLinksOpen || !quickLinksTriggerEl) return;
		requestAnimationFrame(() => {
			const rect = quickLinksTriggerEl!.getBoundingClientRect();
			quickLinksTop = rect.bottom + 8;
			quickLinksLeft = rect.left + rect.width / 2;
		});
	});

	$effect(() => {
		if (!quickLinksOpen) return;
		function handleClick(e: MouseEvent) {
			const target = e.target as Node;
			const insideTrigger = quickLinksTriggerEl?.contains(target);
			const insideDropdown = quickLinksDropdownEl?.contains(target);
			if (!insideTrigger && !insideDropdown) quickLinksOpen = false;
		}
		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
	});

	function isActive(href: string) {
		if (href === "/") return pathname === "/";
		return pathname.startsWith(href);
	}

	const quickTriggerActive = $derived(menuTriggerActive(quickLinks, isActive));
</script>

<nav
	class="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
>
	<!-- Quick links dropdown — outside glass-card to escape its backdrop-filter stacking context -->
	{#if quickLinksOpen}
		<div
			bind:this={quickLinksDropdownEl}
			class="glass-popover fixed z-[60] w-64 -translate-x-1/2 overflow-hidden p-1.5"
			style="top: {quickLinksTop}px; left: {quickLinksLeft}px;"
			role="menu"
		>
			{#each quickLinks as link (link.href)}
				<a
					href={link.href}
					target={link.external ? "_blank" : undefined}
					rel={link.external ? "noopener noreferrer" : undefined}
					class={cn(
						"glass-link flex flex-col gap-0.5 rounded-lg px-3 py-2.5 no-underline transition-all",
						!link.external && isActive(link.href)
							? "text-foreground"
							: "text-muted-foreground hover:text-foreground",
					)}
					role="menuitem"
				>
					<span class="flex w-full min-w-0 items-start justify-between gap-2">
						<span class="text-sm tracking-wider text-foreground">{link.label}</span>
						{#if link.external}
							<ExternalLinkIcon
								class="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-80 text-muted-foreground"
								aria-hidden="true"
							/>
						{/if}
					</span>
					{#if link.description}
						<span class="text-xs tracking-wide text-muted-foreground">{link.description}</span>
					{/if}
				</a>
			{/each}
		</div>
	{/if}

	<div
		class={cn(
			"glass-card glass-card--navbar w-full max-w-3xl rounded-2xl px-4 py-2 transition-all duration-300",
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

				<!-- Quick links dropdown trigger -->
				<div class="relative">
					<button
						bind:this={quickLinksTriggerEl}
						type="button"
						class={cn(
							"glass-nav-trigger flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm tracking-wider transition-all",
							quickTriggerActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
						)}
						onclick={() => (quickLinksOpen = !quickLinksOpen)}
						aria-expanded={quickLinksOpen}
						aria-haspopup="true"
					>
						More
						<ChevronDownIcon
							class={cn("h-3.5 w-3.5 transition-transform duration-200", quickLinksOpen && "rotate-180")}
						/>
					</button>
				</div>
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
				<span class="flex items-center gap-2">
					<span class="text-xs tracking-widest text-foreground">Members Area</span>
					<ChevronRightIcon class="h-4 w-4 text-foreground drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]" />
				</span>
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

				<!-- Mobile quick links accordion -->
				<button
					type="button"
					class={cn(
						"glass-nav-link flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm tracking-wider transition-all",
						quickTriggerActive ? "text-foreground" : "text-muted-foreground",
					)}
					onclick={() => (mobileQuickLinksOpen = !mobileQuickLinksOpen)}
					aria-expanded={mobileQuickLinksOpen}
				>
					More
					<ChevronDownIcon
						class={cn("h-3.5 w-3.5 transition-transform duration-200", mobileQuickLinksOpen && "rotate-180")}
					/>
				</button>

				{#if mobileQuickLinksOpen}
					<div class="ml-3 flex flex-col gap-0.5 border-l border-white/5 pl-3">
						{#each quickLinks as link (link.href)}
							<a
								href={link.href}
								target={link.external ? "_blank" : undefined}
								rel={link.external ? "noopener noreferrer" : undefined}
								class={cn(
									"glass-nav-link flex flex-col gap-0.5 rounded-lg px-3 py-2 text-sm tracking-wider no-underline transition-all",
									!link.external && isActive(link.href)
										? "text-foreground"
										: "text-muted-foreground hover:text-foreground",
								)}
							>
								<span class="flex w-full min-w-0 items-center justify-between gap-2">
									<span>{link.label}</span>
									{#if link.external}
										<ExternalLinkIcon
											class="h-3.5 w-3.5 shrink-0 opacity-80 text-muted-foreground"
											aria-hidden="true"
										/>
									{/if}
								</span>
								{#if link.description}
									<span class="text-xs font-normal tracking-wide text-muted-foreground">{link.description}</span>
								{/if}
							</a>
						{/each}
					</div>
				{/if}

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
						<span class="flex items-center justify-center gap-2">
							<span class="text-xs tracking-widest text-foreground">Members Area</span>
						</span>
					</Button>
				</a>
			</div>
			</div>
		{/if}
	</div>
</nav>
