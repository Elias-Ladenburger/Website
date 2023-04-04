<script>
    export let label = "";
    export let link = "";
    export let bgColor = "bg-teal";
    export let textColor = "text-primary"

    let buttonClasses = ` lg:mx-0 my-6 py-4 px-8 
    font-bold md:text-xl text-sm
    rounded-full shadow-lg 
    focus:outline-none focus:shadow-outline transition duration-300 ease-in-out
    hover:bg-yellow hover:text-navy ` + bgColor + " " + textColor 
</script>

{#if label}
    <a href="{link}" 
    class={buttonClasses}>
        {label}
    </a>
  {/if}