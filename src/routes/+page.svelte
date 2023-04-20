<script>
  import Hero from "$lib/Hero.svelte";
  import Button from "$lib/Button.svelte";
  import AboutMe from "$lib/AboutMe.svelte";
  import ServiceOffer from "$lib/ServiceOffer.svelte";
</script>

<div class="bg-abstractBG">
  <div
    class="md:grid md:grid-cols-2 gap-2 text-lg text-white text-left spacing-y-5 md:spacing-0 items-center bg-navy bg-opacity-80"
  >
    <Hero
      heroTitle="The <span class='bg-teal text-primary hover:text-navy px-1'>general practitioner</span> for your tech projects."
      heroSubtitle="Solving problems. Saving projects. Building products."
    >
      <Button label="Lean more!" link="#about" />
    </Hero>
    <img
      src="./img/Profile transparent.webp"
      alt="Elias Ladenburger"
      class="pt-5"
    />
  </div>
</div>

<AboutMe/>

<ServiceOffer/>

