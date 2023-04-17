<script>
    export let label = "";
    export let link = "";
    export let bgColor = "bg-teal";
    export let textColor = "text-primary"


    let buttonClasses = ` lg:mx-0 my-6 py-4 px-8 
    font-bold md:text-xl text-sm
    rounded-full shadow-lg
     transition duration-300 ease-in-out
    hover:opacity-70 ` + bgColor + " " + textColor
</script>

{#if label}
    <a href="{link}" 
    class={buttonClasses}
    {...$$restProps}>
        {label}
    </a>
  {/if}