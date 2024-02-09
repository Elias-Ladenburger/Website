<script>
  import Hero from "$lib/Hero.svelte";
  import Button from "$lib/Button.svelte";
  let selfDescription = ["product manager", "software developer", "IT generalist"]
  let heroCTA = {title:"Help me?", link:"contact"}
</script>

<div class="bg-white">
  <div
    class="md:grid md:grid-cols-2 gap-2 text-lg text-white text-left spacing-y-5 md:spacing-0 items-center bg-navy bg-opacity-80"
  >
    <Hero
      heroTitle="Witalina ist super!"
      heroSubtitle="Sie ist meine <em class='bg-teal'>beste Freundin</em> und daran gibt es nichts zu rütteln."
    >
    </Hero>
    <img
      src="./img/Best Friends.jpg"
      alt="Best Friends"
      class=""
    />
  </div>
</div>
