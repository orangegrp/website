<svelte:head>
    <title
        >Official Statement: Response to Malicious Incident - 332 Community</title
    >
    <meta
        name="description"
        content="An official statement from the leadership of 332 addressing a recent malicious incident. Learn about our resilience, the incident, and steps forward."
    />

    <!-- Open Graph tags -->
    <meta
        property="og:title"
        content="Official Statement: Response to Malicious Incident - 332 Community"
    />
    <meta
        property="og:description"
        content="An official statement from 332's leadership addressing a recent incident involving malicious actions against the community. Learn about our resilience and ongoing recovery."
    />
    <meta property="og:type" content="website" />
    <meta
        property="og:image"
        content="/mfa-332.png"
    />
    <meta
        name="twitter:card" 
        content="summary_large_image"
    />
    <meta
        name="twitter:image"
        content="/mfa-332.png" 
    />
    <meta property="og:site_name" content="332" />
</svelte:head>

<script lang="ts">
    import mfa_img from "$lib/images/mfa-332.png";
</script>

<div class="w-full mb-8">
    <img 
        src={mfa_img} 
        alt="332 MFA Statement Background"
        class="w-full max-h-[900px] object-cover" 
    />
</div>
<style>
    @media (min-width: 768px) {
        main {
            margin-top: clamp(-20vw, -40vw, -800px);
            position: relative;
            z-index: 10;
        }
    }
</style>

<main
    class="bg-black/80 rounded-xl backdrop-blur-2xl shadow-xl my-2 md:my-6 lg:my-8 p-4 md:mx-8 lg:mx-24 flex flex-col gap-4 relative"
>
    <div class="p-8 md:p-12 rounded-lg shadow-lg">
        <h1 class="text-3xl font-bold mb-6">
            Official Statement: Response to Malicious Incident
        </h1>
        <p class="text-lg mb-4">
            The Ministry of Foreign Affairs of <span class="font-bold">332</span
            >
            wishes to address recent events that have impacted our community. An
            incident of malicious activity occurred, involving an unnamed individual
            who sought to undermine the integrity of our digital infrastructure
            by executing a deliberate and destructive act commonly known as
            <span class="italic">"nuking."</span>
        </p>

        <h2 class="text-2xl font-semibold mt-6 mb-4">
            Key Points of the Incident:
        </h2>
        <ul class="list-disc pl-6 mb-4">
            <li class="mb-2">
                <span class="font-bold">The Resilience of 332:</span> Despite this
                attack, the 332 community remains steadfast. Our strength has always
                been rooted in our people—the friends and collaborators who make
                this space meaningful. This bond is unshakeable and ensures that
                we endure such challenges with unity and resolve.
            </li>
            <li class="mb-2">
                <span class="font-bold">Nature of the Attack:</span> The perpetrator attempted
                to misattribute his actions to a third party, but the inaccuracies
                of his claims reveal his lack of substance. The attack stemmed
                from a failure to constructively engage with criticism, culminating
                in malicious actions against our community. Additionally, the attack
                extended to associated resources, including the bot development server
                and a GitHub repository linked to our projects.
            </li>
            <li>
                <span class="font-bold">Current Status of the Perpetrator:</span
                > Following the incident, the perpetrator has deleted his account and associated
                external profiles, effectively removing himself from public view.
            </li>
        </ul>

        <h2 class="text-2xl font-semibold mt-6 mb-4">Moving Forward:</h2>
        <ul class="list-disc pl-6 mb-4">
            <li class="mb-2">
                <span class="font-bold">Rebuilding:</span> Efforts are already in
                motion to recover from the damage. This includes the reconstruction
                of critical resources and systems.
            </li>
            <li class="mb-2">
                <span class="font-bold">Boosting Reminder:</span> For those members
                who were boosting the server, please ensure to re-enable your boosts
                to support the recovery process.
            </li>
            <li>
                <span class="font-bold">Acknowledgment:</span> The leadership recognizes
                this incident as a result of an oversight in access permissions.
                Measures are being implemented to prevent similar occurrences in
                the future.
            </li>
        </ul>

        <p class="text-lg mt-6">
            The Ministry encourages all members to continue engaging with one
            another and to view this incident as a testament to our resilience
            and shared purpose. While challenges may arise, the spirit of <span
                class="font-bold">332</span
            > will always prevail.
        </p>

        <p class="text-lg mt-6 italic">
            Thank you for your understanding and cooperation.
        </p>

        <div class="mt-8">
            <p class="font-bold text-lg">
                Issued by the Ministry of Foreign Affairs, 332
            </p>
            <p class="italic">"332: Community. Knowledge. Friendship"</p>
        </div>
    </div>
</main>
