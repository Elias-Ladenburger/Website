<script>
  import Button from "$lib/Button.svelte";
  import Hero from "$lib/Hero.svelte";
  import Reference from "$lib/Reference.svelte";
</script>

<div class="bg-abstractBG">
  <div class="bg-navy bg-opacity-80 text-primary py-24">
    <Hero
      heroTitle="Hi! I am <em class='bg-teal'>Elias Ladenburger</em>."
      heroSubtitle="And here is a selection of things I have done so far."
    />
  </div>
</div>

<section id="experience" class="justify-center">
  <Reference
    title="Projects"
    body="I work with companies whose values align with my own. I stay with
 partners for the long term. I treat your company as though it were
 mine. Your success is my success."
  />

  <Reference title="Service Offer" body="">
    <p>For <b>small and medium companies</b>:</p>
    <ul class="list-disc mx-5 mb-5">
      <li>"first guy to call with questions",</li>
      <li>product discovery, and definition of requirements,</li>
      <li>
        searching, vetting and coordinating other freelancers and agencies.
      </li>
    </ul>
    <p>For <b>corporates and large companies</b>:</p>
    <ul class="list-disc mx-5">
      <li>Tech project management,</li>
      <li>interim management of tech products,</li>
      <li>process analysis, re-engineering and automation.</li>
    </ul>
  </Reference>
  <Reference
    title="Linetweet"
    body="I took over a project that had no clear roadmap, was behind schedule and above budget. When I left, the project had a clear path forward, clear requirements and a clear roadmap. "
  >
    <img src="./img/Linetweet-Logo.svg" alt="linetweet logo" />
  </Reference>
  <div class="justify-center text-center py-10 mb-5">
    <Button label="I want your help!" link="/contact" />
  </div>
</section>
