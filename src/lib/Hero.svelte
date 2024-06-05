<script>
    export let heroTitle = "";
    export let heroSubtitle = "";
  </script>
  
    <div class="container p-5 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <!--Left Col-->
      <div class="flex flex-col w-full justify-left items-center text-left">
        <h1 class="md:text-5xl sm:text-4xl text-3xl font-bold leading-tightw">
          {@html heroTitle}
        </h1>
        {#if heroSubtitle}
        <p class="leading-normal md:text-2xl text-xl md:mb-8">
          {@html heroSubtitle}
        </p>
        {/if}
        <slot />
      </div>
    </div>