<script>
    import Hero from "$lib/Hero.svelte";
	import { browser } from "$app/environment";
</script>

{#if browser}
<script async src="https://embed.typeform.com/next/embed.js"/>
{/if}

<Hero heroTitle="Contact">
    <div class="justify-center items-center flex columns-2">
        <div class="text-lg text-primaryContrast">
        </div>
        <button data-tf-popup="httoRs8q" 
        data-tf-opacity="100" 
        data-tf-size="100" 
        data-tf-iframe-props="title=Contact Elias" 
        data-tf-transitive-search-params data-tf-medium="snippet" 
        class="bg-emphasis text-primary hover:underline 
        font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none 
        focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
        Get in touch!
    </button>
    </div>
</Hero>

