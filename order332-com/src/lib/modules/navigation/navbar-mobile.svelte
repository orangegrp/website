<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import logo_svg from "$lib/images/polygon-icon.svg";
    import menu_svg from "$lib/images/burger-menu-right.svg";
    import { mode } from "mode-watcher";
    import type { NavbarProps } from "./navbar-props";
    import * as Sheet from "$lib/components/ui/sheet";

    const style_appearance =
        "w-full bg-background/80 backdrop-blur-lg border-b border-secondary/50 p-3";
    const style_sizing = "md:px-8 lg:px-32";

    export let navdata: NavbarProps | undefined = undefined;
</script>

<div class="{style_appearance} {style_sizing} flex justify-between">
    <a href="/" class="flex items-center gap-2">
        <img src={logo_svg} class="h-8" alt="332 Logo" />
    </a>
    <Sheet.Root>
        <Sheet.Trigger>
            <img
                src={menu_svg}
                class="h-6 {$mode === 'dark' ? 'invert' : ''}"
                alt="Menu"
            /></Sheet.Trigger
        >
        <Sheet.Content class="w-10/12 z-[901]">
            <div class="w-full flex flex-col gap-8">
                {#if navdata}
                    <ul class="flex flex-col items-start gap-4 w-full">
                        {#each navdata.links.filter((item) => item.align === "left") as item}
                            <li class="w-full">
                                <Sheet.Close>
                                    <Button
                                        class="text-lg h-8 w-full text-left justify-start"
                                        href={item.url}
                                        variant={item.isButton
                                            ? "default"
                                            : "link"}>{item.text}</Button
                                    >
                                </Sheet.Close>
                            </li>
                        {/each}
                    </ul>
                    {#if navdata.links.filter((item) => item.align === "left").length > 0 && navdata.links.filter((item) => item.align === "middle").length > 0}
                        <hr class="border-secondary/50" />
                    {/if}
                    <ul class="flex flex-col items-start gap-4 w-full">
                        {#each navdata.links.filter((item) => item.align === "middle") as item}
                            <li class="w-full">
                                <Sheet.Close>
                                    <Button
                                        class="text-lg h-8 w-full text-left justify-start"
                                        href={item.url}
                                        variant={item.isButton
                                            ? "default"
                                            : "link"}>{item.text}</Button
                                    >
                                </Sheet.Close>
                            </li>
                        {/each}
                    </ul>
                    {#if navdata.links.filter((item) => item.align === "middle").length > 0 && navdata.links.filter((item) => item.align === "right").length > 0}
                        <hr class="border-secondary/50" />
                    {/if}
                    <ul class="flex flex-col items-start gap-4 w-full">
                        {#each navdata.links.filter((item) => item.align === "right") as item}
                            <li class="w-full">
                                <Sheet.Close>
                                    <Button
                                        class="text-lg h-8 w-full text-left justify-start"
                                        href={item.url}
                                        variant={item.isButton
                                            ? "default"
                                            : "link"}>{item.text}</Button
                                    >
                                </Sheet.Close>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </div>
        </Sheet.Content>
    </Sheet.Root>
</div>
