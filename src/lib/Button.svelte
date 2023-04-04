<script>
    export let label = "";
    export let link = "";
</script>

{#if label}
    <a href="/{link}" {...$$props}
    class="lg:mx-0 my-6 py-4 px-8
    bg-teal text-primary font-bold md:text-xl text-sm
    rounded-full shadow-lg 
    focus:outline-none focus:shadow-outline transition duration-300 ease-in-out
    hover:bg-yellow hover:text-navy">
        {label}
    </a>

  {/if}