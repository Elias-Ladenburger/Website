<script>
  import Hero from "$lib/Hero.svelte";
  import Button from "$lib/Button.svelte";
</script>

<div class="bg-abstractBG">
  <div
    class="md:grid md:grid-cols-2 gap-2 text-lg text-white text-left spacing-y-5 md:spacing-0 items-center  bg-navy bg-opacity-80"
  >
    <Hero
      heroTitle="The <em class='bg-teal text-primary hover:bg-yellow hover:text-navy'>general practitioner</em> for tech projects."
      heroSubtitle="Problem Solving. Process Improvement. Product Development."
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

<section id="about" class="p-5 bg-teal text-primary">
  <div class="p-3 bg-primary text-primaryContrast rounded-2xl mb-5">
    <h2 class="text-2xl self-start">
      <em class="mx-2">About Me</em>
    </h2>
    <p class="text-xl self-center">
      I am a freelancer who walks the line between business and technology. This
      allows me to be your general practitioner for tech: <b
        class="bg-navy text-white font-normal"
        >The first person to call when you find that you processes are not
        working, your projects are stuck or your product does not perform as
        expected
      </b>.
    </p>
  </div>

  <div class="p-3 bg-primary text-primaryContrast rounded-2xl">
    <h2 class="text-2xl">
      <em class="">Experience</em>
    </h2>
    <ul class="my-5 space-y-2">
      <li>
        <h3 class="text-xl font-bold">MERSOR</h3>
        <p class="text-xl">
          First guy on call for customizing the theme or apps. First guy to talk
          to for process improvements and writing requirements for other
          freelancers.
        </p>
      </li>
      <li>
        <h3 class="text-xl font-bold">Linetweet</h3>
        <p class="text-xl">
          Interm product management for a struggling project. When I left, the
          project was no longer struggling.
        </p>
      </li>
    </ul>
    <div class="my-4 text-center self-end justify-self-end end-">
      <Button label="Find out more!" bgColor="bg-navy" />
    </div>
  </div>
</section>
