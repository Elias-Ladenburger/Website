<script>
    import Hero from "$lib/Hero.svelte";
    import Mail from "$lib/Mail.svelte";
    import Button from "$lib/Button.svelte";
	import { browser } from "$app/environment";
</script>

{#if browser}
<script async src="https://embed.typeform.com/next/embed.js"/>
{/if}

<Hero heroTitle="Contact">
    <Button label="get in touch!" link="contact" data-tf-popup="httoRs8q" 
        data-tf-opacity="100" 
        data-tf-size="100" 
        data-tf-iframe-props="title=Contact Elias" 
        data-tf-transitive-search-params data-tf-medium="snippet" />
<!--
        Or reach out via mail: <Mail/>-->
</Hero>

