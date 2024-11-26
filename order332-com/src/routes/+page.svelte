<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";

    import {
        Root,
        Content,
        Item,
        Previous,
        Next,
    } from "$lib/components/ui/carousel";
    import Autoplay from "embla-carousel-autoplay";
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

    import globe_png from "$lib/images/globe.png";
    import gaming_png from "$lib/images/gaming.png";
    import tech_help_png from "$lib/images/tech-help.png";
</script>

<main
    class="my-2 md:my-6 lg:my-8 p-4 md:mx-8 lg:mx-24 flex flex-col gap-4 relative"
>
    <div class="flex flex-col justify-between lg:flex-row gap-x-24 gap-y-8">
        <div class="writer">
            <h1 class="mt-6 md:text-3xl 2xl:text-4xl text-2xl text-glow-white">
                We're a global community of
            </h1>
            <h1
                id="typer"
                class="writer-text text-foreground/80 md:text-3xl 2xl:text-4xl text-2xl text-glow-green-accent"
            >
                cybersec students <span class="text-white">&</span> experts.
            </h1>
            <h1 class="mb-4">
                Bound by our founding principles of community, knowledge &
                friendship.
            </h1>
            <Button href="/about-us" class="hidden md:inline h-8"
                >Learn More</Button
            >
        </div>
        <div>
            <!-- svelte-ignore a11y_media_has_caption -->
            <video
                src="https://utfs.io/f/Hqd7taZdF7DENwS8NAcfoeU2FAv6MgpHSrC0zsQ1iRjn9Lhx"
                controls
                loop
                autoplay
                muted
                class="w-auto max-h-[400px]"
            ></video>
        </div>
    </div>
</main>

<main
    class="my-2 md:my-6 lg:my-8 p-4 md:mx-8 lg:mx-24 flex flex-col gap-y-4 gap-2 md:gap-x-4 relative"
>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
            class="grayscale hover:grayscale-0 px-4 py-6 rounded-lg bg-gradient-to-br from-transparent via-primary/5 to-transparent border border-primary/5 md:row-span-2 overflow-hidden relative transition-transform duration-300 hover:scale-[1.02]" 
        >
            <h2
                class="text-sm text-foreground/50 uppercase text-glow-white tracking-widest"
            >
                Technology
            </h2>
            <h1 class="text-xl mb-1.5">
                Discord's #1 hub for all things tech.
            </h1>
            <p class="text-foreground/70 leading-none text-sm">
                Whether you're from the world of infosec, programming, or just
                have a tech issue you need help with, 332 is the place to go for
                all things tech. Access a wide range of free resources, learn
                from others, and connect with like-minded individuals who will be
                by your side for life.
            </p>
            <img
            src={tech_help_png}
            alt="Chat"
            class="absolute -bottom-28 -right-2 w-96 opacity-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 hover:opacity-100 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
        />
        </div>
        <div
            class="grayscale hover:grayscale-0 px-4 pr-36 py-6 rounded-lg bg-gradient-to-tr from-transparent via-primary/5 to-transparent border border-primary/5 overflow-hidden relative transition-transform duration-300 hover:scale-[1.02]"
        >
            <h2
                class="text-sm text-foreground/50 uppercase text-glow-white tracking-widest"
            >
                Gaming
            </h2>
            <h1 class="text-xl mb-1.5">We play games too.</h1>
            <p class="text-foreground/70 leading-none text-sm">
                Whether you play Minecraft, CoD or Battlefield 1 or something
                else, we've probably got you covered. Join our Discord server
                and connect with others in the community that probably also play
                the same games as you.
            </p>
            <img
            src={gaming_png}
            alt="Gaming"
            class="absolute -bottom-12 -right-12 w-48 h-48 opacity-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 hover:opacity-100 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
        />
        </div>
        <div
            class="grayscale hover:grayscale-0 px-4 pr-36 py-6 rounded-lg bg-gradient-to-bl from-transparent via-primary/5 to-transparent border border-primary/5 overflow-hidden relative transition-transform duration-300 hover:scale-[1.02]"
        >
            <h2
                class="text-sm text-foreground/50 uppercase text-glow-white tracking-widest"
            >
                Diverse Community
            </h2>
            <h1 class="text-xl mb-1.5">We're a truly global community.</h1>
            <p class="text-foreground/70 leading-none text-sm">
                332 is a global community with members from all over the world.
                We welcome anyone, no matter their background and beliefs. We
                value freedom of speech and the exchange of ideas without
                needless limitations.
            </p>
            <img
                src={globe_png}
                alt="Globe"
                class="absolute -bottom-16 -right-12 w-48 h-48 opacity-80 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 hover:opacity-100 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            />
        </div>
    </div>
</main>

<main
    class="my-2 md:my-6 lg:my-8 p-4 md:mx-8 lg:mx-24 flex flex-col gap-y-4 gap-2 md:gap-x-4 relative"
>
    <h1 class="text-xl">Explore 332 Art</h1>

    <div class="relative px-16 md:px-4">
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
</main>

<style>
    .writer {
        display: inline-block;
    }

    .writer-text {
        display: inline-block;
        overflow: hidden;
        animation:
            typing 1s steps(20, end),
            blink 0.75s step-end infinite;
        white-space: nowrap;
        border-right: 10px solid white;
        box-sizing: border-box;
    }

    @keyframes typing {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }

    @keyframes blink {
        from,
        to {
            border-color: transparent;
        }
        50% {
            border-color: white;
        }
    }
</style>
