<script>
  import Hero from "$lib/Hero.svelte";
  import Button from "$lib/Button.svelte";
  let selfDescription = ["product manager", "software developer", "IT generalist"]
  let heroCTA = {title:"Help me?", link:"contact"}
</script>

<Hero heroTitle="Hi! I am <em class='bg-emphasis text-primary'>Elias Ladenburger</em>."
  heroSubtitle="And I can certainly help you."
  >
  <Button label={heroCTA.title} link={heroCTA.link}/>
  </Hero>

  <section id="experience" class="justify-center">

    <div class="md:grid md:grid-cols-2 gap-2 text-lg text-left spacing-y-5 md:spacing-0 p-3 md:p-5">
      <div class="p-5 my-5 bg-primary text-primaryContrast rounded-2xl ">
        <h2 class="text-xl text-center">My <em class="bg-emphasis text-primary">Philosophy</em></h2>
        <p>I work with companies whose values align with my own. I stay with partners for the long term. I treat your company as though it were mine. Your success is my success.</p>
      </div>

      <div class="p-5 my-5 bg-primary text-primaryContrast rounded-2xl">
        <h2 class="text-center text-xl">My <em class="bg-emphasis text-primary">Methodology</em></h2>
        <p>There is no execution without clarity of vision. We will first discuss your expectations, align on your goals and intended outcomes. Only then will be proceed with implementation.</p>
        <br/><p>During implementation, I will regularly check-in with you to align on expectations and roadblocks.
          I will aim to understand your whole business, to bring value beyond the scope of a single project.</p>
      </div>
        
      <div class="p-5 my-5 bg-primary text-primaryContrast rounded-2xl">
        <h2 class="text-center text-xl">My <em class="bg-emphasis text-primary">Service Offer</em></h2>
        <p>For <b>small and medium companies</b>:</p>
        <ul class="list-disc mx-5 mb-5">
          <li>"first guy to call with questions",</li>
          <li>product discovery, and definition of requirements,</li>
          <li>searching, vetting and coordinating other freelancers and agencies.</li>
          </ul>
        <p >For <b>corporates and large companies</b>:</p>
        <ul class="list-disc mx-5">
          <li>Tech project management,</li>
          <li>interim management of tech products,</li>
          <li>process analysis, re-engineering and automation.</li>
        </ul>
      </div>

      <div class="p-5 my-5 bg-primary text-primaryContrast rounded-2xl">
        <h2 class="text-center text-xl">My <em class="bg-emphasis text-primary">Stack</em></h2>
        <p>I am proficient with:</p>
        <ul class="list-checkmark mx-5">
          <li>HTML, CSS and Javascript,</li>
          <li>the MERN Stack,</li>
          <li>Python, Flask and Jenja2,</li>
          <li>Shopify Admin, Liquid and Shopify Apps,</li>
          <li>Jira, Confluence, Notion and Slack,</li>
          <li>MS Office and VBA.</li>
        </ul>
      </div>
    </div>
      <div class="justify-center text-center p-5">
        <Button label="I want your help!" link={heroCTA.link}/>
      </div>
  
    </section>