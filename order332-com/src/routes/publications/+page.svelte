<script lang="ts">
    import * as AlertDialog from "$lib/components/ui/alert-dialog";
    import { Skeleton } from "$lib/components/ui/skeleton";
</script>

<main class="p-8 md:mx-32 lg:mx-64 flex flex-col gap-4">
    <Skeleton class="h-[40px] w-full" />
    <div class="flex gap-2 mt-4">
        <Skeleton class="h-[24px] w-[80px]" />
        <Skeleton class="h-[24px] w-[80px]" />
        <Skeleton class="h-[24px] w-[80px]" />
    </div>
    <Skeleton class="h-[16px] w-full mt-8" />
    <Skeleton class="h-[16px] w-full" />
    <Skeleton class="h-[16px] w-3/4" />
    <div class="my-8">
        <Skeleton class="h-[300px] w-full rounded-md" />
        <Skeleton class="h-[16px] w-1/2 mt-2" />
    </div>
    <Skeleton class="h-[16px] w-full mt-4" />
    <Skeleton class="h-[16px] w-full" />
    <Skeleton class="h-[16px] w-1/2" />
    <Skeleton class="h-[16px] w-full mt-8" />
    <Skeleton class="h-[16px] w-full" />
    <Skeleton class="h-[16px] w-2/3" />
    <Skeleton class="h-[16px] w-full mt-4" />
    <Skeleton class="h-[16px] w-full" />
    <Skeleton class="h-[16px] w-3/4" />
    <div class="flex gap-2 mt-8">
        <Skeleton class="h-[24px] w-[100px]" />
        <Skeleton class="h-[24px] w-[120px]" />
    </div>
    <Skeleton class="h-[16px] w-full mt-4" />
    <Skeleton class="h-[16px] w-full" />
    <Skeleton class="h-[16px] w-1/3" />
</main>
<AlertDialog.Root open>
    <AlertDialog.Content>
        <AlertDialog.Header>
            <AlertDialog.Title>Coming Soon</AlertDialog.Title>
            <AlertDialog.Description>
                This page is currently under construction, please check back soon!
            </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
            <AlertDialog.Action on:click={() => window.location.href = '/'}>Go to Homepage</AlertDialog.Action>
        </AlertDialog.Footer>
    </AlertDialog.Content>
</AlertDialog.Root>
