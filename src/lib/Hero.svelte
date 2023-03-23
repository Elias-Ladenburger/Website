<script>
    export let heroTitle = "";
    export let heroSubtitle = "";
    export let heroCTA = "";
  </script>
  
  <div class="p-28 pt-24">
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <!--Left Col-->
      <div class="flex flex-col w-full justify-center items-start text-center md:text-left">
        <h1 class="my-4 text-5xl font-bold leading-tight text-slate-300">
          {@html heroTitle}
        </h1>
        <p class="leading-normal text-2xl mb-8 text-white">
          {@html heroSubtitle}
        </p>
        {#if heroCTA}
        <button class="mx-auto lg:mx-0 bg-orangeDark hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          {heroCTA}
        </button>
        {/if}
      </div>
    </div>
  </div>