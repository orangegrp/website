<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";

	export const alertVariants = tv({
		base: "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
		variants: {
			variant: {
				default: "bg-card text-card-foreground border-border",
				destructive:
					"text-red-500 bg-[rgba(255,30,60,0.6)] *:data-[slot=alert-description]:text-red-500 [&>svg]:text-red-500 border-[rgba(255,70,110,0.80)]",
				warning:
					"text-yellow-500 bg-[rgba(253,224,71,0.68)] *:data-[slot=alert-description]:text-yellow-500 [&>svg]:text-yellow-500 border-[rgba(250,204,21,0.75)]",
				success:
					"text-lime-500 bg-[rgba(70,255,139,0.55)] *:data-[slot=alert-description]:text-lime-500 [&>svg]:text-lime-500 border-[rgba(36,192,0,0.75)]",
				info:
					"text-blue-500 bg-[rgba(56,189,248,0.69)] *:data-[slot=alert-description]:text-blue-500 [&>svg]:text-blue-500 border-[rgba(56,189,248,0.75)]",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	});

	export type AlertVariant = VariantProps<typeof alertVariants>["variant"];
</script>

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		variant = "default",
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		variant?: AlertVariant;
	} = $props();
</script>

<div
	bind:this={ref}
	data-slot="alert"
	role="alert"
	class={cn(alertVariants({ variant }), className)}
	{...restProps}
>
	{@render children?.()}
</div>
