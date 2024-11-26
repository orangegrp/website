<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";
    import logo_svg from "$lib/images/polygon-icon.svg";
    import type { NavbarProps } from "./navbar-props";

    const style_appearance =
        "w-full bg-background/80 backdrop-blur-lg border-b border-secondary/50 p-3";
    const style_sizing = "md:px-8 lg:px-32";

    export let navdata: NavbarProps | undefined = undefined;
</script>

<div class="{style_appearance} {style_sizing} flex">
    <a href="/" class="flex items-center gap-2">
        <img src={logo_svg} class="h-8" alt="332 Logo" />
    </a>
    <div class="px-8 flex w-full justify-between">
        {#if navdata}
            <div id="left">
                <ul class="flex items-center gap-6">
                    {#each navdata.links.filter((item) => item.align === "left") as item}
                        <li>
                            <Button
                                class="text-lg h-8"
                                href={item.url}
                                variant={item.isButton ? "default" : "link"}
                                >{item.text}</Button
                            >
                        </li>
                    {/each}
                </ul>
            </div>
            <div id="middle">
                <ul class="flex items-center gap-6">
                    {#each navdata.links.filter((item) => item.align === "middle") as item}
                        <li>
                            <Button
                                class="text-lg h-8"
                                href={item.url}
                                variant={item.isButton ? "default" : "link"}
                                >{item.text}</Button
                            >
                        </li>
                    {/each}
                </ul>
            </div>
            <div id="right">
                <ul class="flex items-center gap-6">
                    {#each navdata.links.filter((item) => item.align === "right") as item}
                        <li>
                            <Button
                                class="text-lg h-8"
                                href={item.url}
                                variant={item.isButton ? "default" : "link"}
                                >{item.text}</Button
                            >
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}
    </div>
</div>