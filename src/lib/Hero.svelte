<script>
    export let heroTitle = "";
    export let heroSubtitle = "";
  </script>
  
  <div class="md:p-28 pt-24 text-Contrast text-center">
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <!--Left Col-->
      <div class="flex flex-col w-full justify-center items-center text-center">
        <h1 class="md:text-5xl sm:text-4xl text-3xl font-bold leading-tight ">
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
  </div>