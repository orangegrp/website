<script>
    // @ts-nocheck
        import { page } from '$app/stores';
        import warning_icon from '$lib/images/warning-icon.png';
    
        const status_message = $page.status == "404" ? "Resource not found - HTTP 404"  : `Server Error - HTTP ${$page.status}`;
        const status_description = $page.status == "404" ? "The requested resource was not found on this server." : `An error has occured while processing the request. Please contact the webmaster to report this issue. The details of the error are: ${$page.error.message}<br><br>We apologise for the inconvenience.`;
    </script>
    
    <section class="text-column">
        <div class="inline-block max-w-5xl p-6 border border-yellow-800 rounded-lg card-warning mb-8">
            <img src={warning_icon} class="w-auto h-8 inline pr-2" alt="Warning"/>
            <h1 class="text-xl mt-4">{status_message}</h1>
            <p class="leading-none mt-2">
                {@html status_description}
            </p>	
        </div>
    </section>