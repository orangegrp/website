<script lang="ts">
	import { getContext } from "svelte";
	import { NavigationMenu as NavigationMenuPrimitive } from "bits-ui";
	import { Portal } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: NavigationMenuPrimitive.ContentProps = $props();

	const viewport = getContext<boolean>("navigation-menu-viewport") ?? true;

	let anchorEl = $state<HTMLElement | null>(null);
	// null means "not measured yet" — portal is hidden until we have a real position
	let position = $state<{ top: number; left: number } | null>(null);

	const contentClasses = $derived(
		cn(
			"data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-end-52 data-[motion=from-start]:slide-in-from-start-52 data-[motion=to-end]:slide-out-to-end-52 data-[motion=to-start]:slide-out-to-start-52 start-0 top-0 w-full p-2 pe-2.5 md:absolute md:w-auto",
			"group-data-[viewport=false]/navigation-menu:glass-nav-content group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:start-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-150 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
			className
		)
	);

	/** When portaled to body we're outside the Root so group-data won't match; apply glass and layout directly */
	const portaledContentClasses = $derived(
		cn(
			"glass-nav-content text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 overflow-hidden rounded-md border shadow data-[state=closed]:duration-100 data-[state=open]:duration-150 start-0 top-0 w-full p-2 pe-2.5 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
			className
		)
	);

	function updatePosition() {
		if (!anchorEl || typeof document === "undefined") return;
		// Use the trigger (anchor's previous sibling in the Item) for accurate coordinates
		const trigger = anchorEl.previousElementSibling as HTMLElement | null;
		const el = trigger ?? anchorEl;
		const rect = el.getBoundingClientRect();
		position = { top: rect.bottom + 6, left: rect.left };
	}

	$effect(() => {
		if (viewport || typeof document === "undefined" || !anchorEl) return;
		// Measure on next frame so the Item/trigger layout is complete
		const rafId = requestAnimationFrame(() => {
			updatePosition();
		});
		const onUpdate = () => updatePosition();
		window.addEventListener("scroll", onUpdate, true);
		window.addEventListener("resize", onUpdate);
		return () => {
			cancelAnimationFrame(rafId);
			window.removeEventListener("scroll", onUpdate, true);
			window.removeEventListener("resize", onUpdate);
		};
	});
</script>

{#if viewport}
	<NavigationMenuPrimitive.Content
		bind:ref
		data-slot="navigation-menu-content"
		class={contentClasses}
		{...restProps}
	/>
{:else}
	<!-- Anchor stays in the Item so we can measure trigger position -->
	<div
		bind:this={anchorEl}
		class="absolute start-0 top-full h-0 w-0"
		aria-hidden="true"
	></div>
	<!-- Only render the portal once position is known to prevent a flash at (0,0) -->
	{#if typeof document !== "undefined" && position !== null}
		<Portal to={document.body}>
			<div
				class="fixed z-50"
				style="top: {position.top}px; left: {position.left}px;"
			>
				<NavigationMenuPrimitive.Content
					bind:ref
					data-slot="navigation-menu-content"
					class={portaledContentClasses}
					{...restProps}
				/>
			</div>
		</Portal>
	{/if}
{/if}
