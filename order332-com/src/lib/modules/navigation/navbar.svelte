<script lang="ts">
    import NavbarDesktop from "$lib/modules/navigation/navbar-desktop.svelte";
    import NavbarMobile from "$lib/modules/navigation/navbar-mobile.svelte";
    import type { NavbarProps } from "./navbar-props";

    export let navdata: NavbarProps | undefined = undefined;
</script>

<div class="hidden lg:block top-0 sticky z-[900]">
	<NavbarDesktop navdata={navdata}/>
</div>
<div class="lg:hidden relative z-[900]">
	<NavbarMobile navdata={navdata}/>
</div>