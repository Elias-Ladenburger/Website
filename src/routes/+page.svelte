<script>
  import Hero from "$lib/Hero.svelte";
  import Button from "$lib/Button.svelte";
  import ServiceOffer from "$lib/ServiceOffer.svelte";
</script>

<div class="bg-networkBG bg-cover">

  <div
    class="md:grid md:grid-cols-2 gap-2 text-lg bg-navy bg-opacity-80 text-white text-left spacing-y-5 md:spacing-0 items-center"
  >
    <Hero
      heroTitle="Hi! My name is Elias Ladenburger."
      heroSubtitle="I help businesses with <em class='bg-teal'>pragmatic</em> project management and tech consulting. "
    >
      <Button label="Lean more!" link="#services" />
    </Hero>
    <img
      src="./img/Profile transparent.webp"
      alt="Elias Ladenburger"
      class="pt-5"
    />
  </div>
</div>

<ServiceOffer/>
