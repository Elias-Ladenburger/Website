<script>
    export let label = "";
    export let link = "";
</script>

{#if label}
    <a href="/{link}"
    class="lg:mx-0 my-6 py-4 px-8
    bg-emphasis text-primary font-bold md:text-xl text-sm
    hover:underline hover:scale-105
    rounded-full shadow-lg 
    focus:outline-none focus:shadow-outline transform transition  duration-300 ease-in-out">
        {label}
    </a>

  {/if}