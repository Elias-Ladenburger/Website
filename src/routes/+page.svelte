<script>
  import Hero from "$lib/Hero.svelte";
  import Button from "$lib/Button.svelte";
</script>

<div class="bg-abstractBG">
  <div
    class="md:grid md:grid-cols-2 gap-2 text-lg text-white text-left spacing-y-5 md:spacing-0 items-center bg-navy bg-opacity-80"
  >
    <Hero
      heroTitle="The <em class='bg-teal text-primary hover:text-navy'>general practitioner</em> for your tech projects."
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

<section id="about" class="py-12 px-5 md:py-32 md:px-24 bg-navy text-primary">
  <div class="p-3 bg-primary text-navy rounded-2xl">
    <h2 class="text-2xl self-start">
      <em class="mx-2">About Me</em>
    </h2>
    <div class="text-lg self-center">
      <p>
        I am a freelancer who walks the line between business and technology.
        This allows me to be your general practitioner for tech:The first person
        to call when you find that you processes are not working, your projects
        are stuck or your product does not perform as expected. <br /><br />
      </p>
      <p>
        I have lived and worked across Germany, Austria, Spain and China. I
        "grew up" in a corporate, led a team in a startup, tried my hand in
        founding my own and will certainly do so again in the future. I have
        worked in boutique IT consulting and student consulting and in freelance
        consulting.
        <br />
      </p>
      <p>
        I am now 26 years old. I do not like to stand still. What I do like is to take
        on interesting challenges.
      </p>
    </div>
    <div class="text-center my-5">
      <Button bgColor=bg-navy label="Get in touch!" link="mailto:contact@eliasladenburger.com" />
    </div>
  </div>
</section>
