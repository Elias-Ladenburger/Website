<script>
  import Hero from "$lib/Hero.svelte";
</script>

<div class="bg-white">
  <div
    class="md:grid md:grid-cols-2 gap-2 text-lg text-white text-left spacing-y-5 md:spacing-0 items-center bg-navy bg-opacity-80"
  >
    <Hero
      heroTitle="Susanne ist super!"
      heroSubtitle="Sie ist meine <em class='bg-teal'>beste Freundin</em> und daran gibt es nichts zu rütteln."
    >
    </Hero>
    <img
      src="./img/Best Friends Susi.jpg"
      alt="Best Friends"
      class=""
    />
  </div>
</div>
