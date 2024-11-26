<script lang="ts">
    import {
        Root,
        Content,
        Item,
        Previous,
        Next,
    } from "$lib/components/ui/carousel";
    import Autoplay from "embla-carousel-autoplay";
    import * as Tabs from "$lib/components/ui/tabs";
    import * as Drawer from "$lib/components/ui/drawer";

    import img1 from "$lib/images/gallery/1.png";
    import img2 from "$lib/images/gallery/2.png";
    import img3 from "$lib/images/gallery/3.png";
    import img4 from "$lib/images/gallery/4.png";
    import img5 from "$lib/images/gallery/5.png";
    import img6 from "$lib/images/gallery/6.png";
    import img7 from "$lib/images/gallery/7.png";
    import img8 from "$lib/images/gallery/8.png";
    import img9 from "$lib/images/gallery/9.png";
    import img10 from "$lib/images/gallery/10.png";
    import img11 from "$lib/images/gallery/11.png";

    const galleryImages = [
        { src: img1, alt: "Gallery image 1" },
        { src: img2, alt: "Gallery image 2" },
        { src: img3, alt: "Gallery image 3" },
        { src: img4, alt: "Gallery image 4" },
        { src: img5, alt: "Gallery image 5" },
        { src: img6, alt: "Gallery image 6" },
        { src: img7, alt: "Gallery image 7" },
        { src: img8, alt: "Gallery image 8" },
        { src: img9, alt: "Gallery image 9" },
        { src: img10, alt: "Gallery image 10" },
        { src: img11, alt: "Gallery image 11" },
    ];
</script>

<main>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-1">
        {#each galleryImages as image}
            <Drawer.Root>
                <Drawer.Trigger>
                    <div class="aspect-square group relative overflow-hidden border border-primary/5 rounded-sm hover:border-primary/5">
                        <img
                            src={image.src}
                            alt={image.alt}
                            class="w-full h-full object-cover select-none transition-transform duration-300 group-hover:scale-110"
                        />
                        <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </Drawer.Trigger>
                <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title class="text-center"
                            >{image.alt}</Drawer.Title
                        >
                        <Drawer.Description
                            class="w-full flex justify-center"
                        >
                            <div class="max-h-[80vh] p-4">
                                <div
                                    class="w-full flex flex-col items-center justify-center"
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        class="max-h-[70vh] max-w-full border border-primary/5 rounded-sm select-none object-contain"
                                    />
                                </div>
                            </div>
                        </Drawer.Description>
                    </Drawer.Header>
                </Drawer.Content>
            </Drawer.Root>
        {/each}
    </div>
    <!--
        <Tabs.Root value="gallery" class="flex flex-col">
        <Tabs.List class="hidden w-fit self-center">
            <Tabs.Trigger value="gallery">Gallery</Tabs.Trigger>
            <Tabs.Trigger value="carousel">Slideshow</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="gallery">

        </Tabs.Content>
        <Tabs.Content value="carousel">
            <div class="relative mx-16 md:mx-32 lg:mx-64">
                <Root
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                >
                    <Content class="w-64">
                        {#each galleryImages as image}
                            <Item>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    class="h-64 w-auto border border-primary/5 rounded-sm select-none"
                                />
                            </Item>
                        {/each}
                    </Content>
                    <Previous />
                    <Next />
                </Root>
            </div>
        </Tabs.Content>
    </Tabs.Root>
    -->
</main>
