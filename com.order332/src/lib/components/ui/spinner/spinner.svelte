<script lang="ts">
	let {
		size = "md",
		animate = true,
		clockwise = true,
		class: className = "",
	}: {
		size?: "xs" | "sm" | "md" | "lg" | "xl";
		animate?: boolean;
		clockwise?: boolean;
		class?: string;
	} = $props();

	const sizes: Record<string, number> = { xs: 12, sm: 16, md: 20, lg: 32, xl: 48 };

	function delay(i: number): number {
		return clockwise ? -(i * 0.125) : -(((8 - i) % 8) * 0.125);
	}
</script>

<!--
  viewBox="0 0 100 100" — all geometry is defined once in SVG units.
  The SVG engine scales everything perfectly to any pixel size.

  Blade geometry (in SVG units, center = 50,50):
    rect x=46 y=8 width=8 height=28 rx=4
    → inner radius = 50 - (8+28) = 14   (clear gap at center)
    → outer radius = 50 - 8       = 42   (fills ~84% of radius)
    → blade width check: 8 < 2π×14/8 ≈ 11  ✓  (no blade overlap)

  rotate(θ, 50, 50) spins each blade around the SVG center.
  Staggered animation-delay creates the trailing-opacity sweep.
-->
<svg
	role="status"
	aria-label="Loading"
	width={sizes[size]}
	height={sizes[size]}
	viewBox="0 0 100 100"
	class="{animate ? 'animating' : ''} {className}"
>
	{#each { length: 8 } as _, i}
		<rect
			x="46"
			y="8"
			width="8"
			height="28"
			rx="4"
			transform="rotate({i * 45}, 50, 50)"
			style="animation-delay: {delay(i)}s;"
			class="blade"
		/>
	{/each}
</svg>

<style>
	.blade {
		fill: oklch(1 0 0 / 80%);
		opacity: 0.15;
	}

	.animating .blade {
		animation: spinner-blade 1s linear infinite;
	}

	@keyframes spinner-blade {
		0%   { opacity: 1;    }
		100% { opacity: 0.15; }
	}
</style>
