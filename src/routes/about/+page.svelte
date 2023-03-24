<script>
  import Hero from "$lib/Hero.svelte";
  import Button from "$lib/Button.svelte";
  let selfDescription = ["product manager", "software developer", "IT generalist"]
  let heroCTA = {title:"Help me?", link:"contact"}
</script>

<Hero heroTitle="Hi! I am <em class='bg-emphasis text-primary'>Elias Ladenburger</em>."
  heroSubtitle="I can probably help you."
  >
  <Button label={heroCTA.title} link={heroCTA.link}/>
  </Hero>

  <!--
  <section id="experience">
    <div class="md:grid md:grid-cols-2 md:gap-4 justify-center items-center space-x-5 text-center">

      <div class="border border-solid border-primaryContrast rounded">
        <h3 class="text-lg">eCommerce</h3>
        <p class="mx-5">I have extensive experience working on online stores.</p>
      </div>

      <div class="border border-solid border-primaryContrast rounded">
        <h3 class="text-lg">eCommerce</h3>
        <p class="mx-5">I have extensive experience working on online stores</p>
      </div>
      <div class="border border-solid border-primaryContrast rounded">
        <h3 class="text-lg">eCommerce</h3>
        <p class="mx-5">I have extensive experience working on online stores</p>
      </div>
      <div class="border border-solid border-primaryContrast rounded">
        <h3 class="text-lg">eCommerce</h3>
        <p class="mx-5">I have extensive experience working on online stores</p>
      </div>
    </div>
  </section>

  <section id="bio">
    </section>
    -->