<script lang="ts">
	import { page } from "$app/state";
	import { Button } from "$lib/components/ui/button/index.js";
	import { cn } from "$lib/utils.js";
	import { MenuIcon, XIcon, ChevronRightIcon, ChevronDownIcon } from "@lucide/svelte/icons";

	let mobileOpen = $state(false);
	let projectsOpen = $state(false);
	let mobileProjectsOpen = $state(false);

	// Trigger button ref — used to position the fixed dropdown
	let triggerEl: HTMLButtonElement | undefined = $state();
	let dropdownEl: HTMLDivElement | undefined = $state();
	let dropdownTop = $state(0);
	let dropdownLeft = $state(0);

	const navLinks = [
		{ label: "Home", href: "/" },
		{ label: "Blog", href: "#blog" },
		{ label: "About", href: "#about" },
	];

	const projects = [
		{ label: "All Projects", href: "#projects", description: "Browse everything we're building" },
		{ label: "Telos", href: "#telos", description: "Coming soon" },
		{ label: "CTF", href: "#ctf", description: "Coming soon" },
		{ label: "332 Labs", href: "#labs", description: "Coming soon" },
		{ label: "twanOS", href: "#twanos", description: "Coming soon" },
	];

	$effect(() => {
		page.url.pathname;
		mobileOpen = false;
		projectsOpen = false;
		mobileProjectsOpen = false;
	});

	// Recalculate dropdown anchor whenever it opens
	$effect(() => {
		if (!projectsOpen || !triggerEl) return;
		const rect = triggerEl.getBoundingClientRect();
		dropdownTop = rect.bottom + 8;
		dropdownLeft = rect.left + rect.width / 2;
	});

	// Close on outside click
	$effect(() => {
		if (!projectsOpen) return;
		function handleClick(e: MouseEvent) {
			const target = e.target as Node;
			const insideTrigger = triggerEl?.contains(target);
			const insideDropdown = dropdownEl?.contains(target);
			if (!insideTrigger && !insideDropdown) projectsOpen = false;
		}
		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
	});

	function isActive(href: string) {
		if (href === "/") return page.url.pathname === "/";
		return page.url.pathname.startsWith(href);
	}
</script>

<nav
	class="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
	role="banner"
>
	<!-- Projects dropdown rendered here — outside glass-card to escape its backdrop-filter stacking context -->
	{#if projectsOpen}
		<div
			bind:this={dropdownEl}
			class="glass-popover fixed z-[60] w-64 -translate-x-1/2 overflow-hidden p-1.5"
			style="top: {dropdownTop}px; left: {dropdownLeft}px;"
			role="menu"
		>
			{#each projects as project (project.href)}
				<a
					href={project.href}
					class={cn(
						"glass-link flex flex-col gap-0.5 rounded-lg px-3 py-2.5 no-underline transition-all",
						isActive(project.href) && project.href !== "/projects"
							? "text-foreground"
							: "text-muted-foreground hover:text-foreground",
					)}
					role="menuitem"
				>
					<span class="text-sm tracking-wider text-foreground">{project.label}</span>
					<span class="text-xs tracking-wide text-muted-foreground">{project.description}</span>
				</a>
			{/each}
		</div>
	{/if}

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

				<!-- Projects dropdown trigger -->
				<div class="relative">
					<button
						bind:this={triggerEl}
						class={cn(
							"glass-nav-trigger flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm tracking-wider transition-all",
							isActive("/projects") ? "text-foreground" : "text-muted-foreground hover:text-foreground",
						)}
						onclick={() => (projectsOpen = !projectsOpen)}
						aria-expanded={projectsOpen}
						aria-haspopup="true"
					>
						Projects
						<ChevronDownIcon
							class={cn("h-3.5 w-3.5 transition-transform duration-200", projectsOpen && "rotate-180")}
						/>
					</button>
				</div>
			</div>

			<!-- Desktop: Members Area button -->
			<Button
				href="#members"
				variant="glass"
				size="sm"
				class="hidden shrink-0 tracking-wider md:inline-flex"
			>
				Members Area <ChevronRightIcon class="h-4 w-4" />
			</Button>

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

				<!-- Mobile projects accordion -->
				<button
					class={cn(
						"glass-nav-link flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm tracking-wider transition-all",
						isActive("/projects") ? "text-foreground" : "text-muted-foreground",
					)}
					onclick={() => (mobileProjectsOpen = !mobileProjectsOpen)}
					aria-expanded={mobileProjectsOpen}
				>
					Projects
					<ChevronDownIcon
						class={cn("h-3.5 w-3.5 transition-transform duration-200", mobileProjectsOpen && "rotate-180")}
					/>
				</button>

				{#if mobileProjectsOpen}
					<div class="ml-3 flex flex-col gap-0.5 border-l border-white/5 pl-3">
						{#each projects as project (project.href)}
							<a
								href={project.href}
								class={cn(
									"glass-nav-link rounded-lg px-3 py-2 text-sm tracking-wider no-underline transition-all",
									isActive(project.href) && project.href !== "/projects"
										? "text-foreground"
										: "text-muted-foreground hover:text-foreground",
								)}
							>
								{project.label}
							</a>
						{/each}
					</div>
				{/if}

				<div class="mt-2 border-t border-white/5 pt-2">
					<Button
						href="#members"
						variant="glass"
						size="sm"
						class="w-full tracking-wider"
					>
						Members Area
					</Button>
				</div>
			</div>
		{/if}
	</div>
</nav>
