<script lang="ts">
    import * as AlertDialog from "$lib/components/ui/alert-dialog";
    import { page } from '$app/stores';

    const status_message = $page.status === 404 ? "Resource not found - HTTP 404"  : `Server Error - HTTP ${$page.status}`;
    const status_description = $page.status === 404 ? "The requested resource was not found on this server." : `An error has occured while processing the request. Please contact the webmaster to report this issue.`;
</script>

<AlertDialog.Root open>
    <AlertDialog.Content>
        <AlertDialog.Header>
            <AlertDialog.Title>{status_message}</AlertDialog.Title>
            <AlertDialog.Description>
                {@html status_description}
            </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
            <AlertDialog.Action on:click={() => window.location.href = '/'}>Go to Homepage</AlertDialog.Action>
        </AlertDialog.Footer>
    </AlertDialog.Content>
</AlertDialog.Root>
