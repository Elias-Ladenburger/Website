<script>
  import TextSection from "./TextSection.svelte";
  import Button from "./Button.svelte";
</script>

<TextSection sectionID="services">
  <h1 class="text-2xl font-bold">My Offer</h1>
  <p class="pb-3">
    Your project is delayed and the status unclear? <br>
    You have strong technical experts, but still nothing seems to get done? <br>
    You feel like you need to be in ten places at once to keep the business going? <br>
    
    <br>
    Every project experiences friction. <br>
    Let's reduce this friction to get your business back on track. <br>
    
    <br>
    I do this by following my 4+1 principles:</p>
    <ul class="list-disc mx-4">
      <li><b>Pragmatism:</b> When something doesn't work, we change it. No dogma, no b*llsh*t. Agile principles are valuable, treating them as religion is not. </li>
      <li><b>Transparency:</b> Information is communicated frequently and asynchronously to project members and stakeholders. You do not need to attend meetings in order to stay up to date. Risks are communicated early and openly.</li>
      <li><b>Efficiency:</b> Meetings are kept short and on point. Short, asynchronous communication is preferred. Goals first, improvement second, gold plating never.</li>
      <li><b>Respect:</b> I believe everybody can bring value. I don't believe that everybody always does.</li>
      <li><b>(Bonus) Humor:</b> I have been known to use memes and Pizza to motivate people at on-site events. Isn't life just more fun when we can all have a laugh occasionally?</li>
    </ul>
    <br>
    

  <p class="pb-2">
    This being said, my areas of expertise can roughly be described as follows:
  </p>
  <div class="lg:grid lg:grid-cols-3 gap-2 align-top">
    <div class="rounded-lg py-5 px-3">
      <h3 class="font-bold"><em class="px-1 bg-teal text-white">Agile Project Management</em></h3>
      <ul class="list-disc mx-4 text-blueBlack">
        <li><b>Full service</b> along the <b>entire project management lifespan</b>: from inception to closing.</li>
        <li><b>Specialization</b>: implementing good practices for agile project management.</li>
        <li><b>Specialization</b>: leading cross-cultural and cross-functional project teams.</li>
        <li>See <a class="underline hover:no-underline" href="#">notable successes</a></li>
      </ul>
    </div>
    <div
      class="rounded-lg py-5 px-3 my-2 lg:my-0"
    >
      <h3 class="font-bold"><em class="px-1 bg-teal text-white">Agile Product Management</em></h3>
      <ul class="list-disc mx-4">
        <li><b>Build your software</b> with someone who ties together your users, UX designers, engineers and management.</li>
        <li><b>Specialization</b>: Agile product development in cross-functional teams.</li>
        <li><b>Specialization</b>: hardware-centric development, platforms, other highly technical products.</li>
        <li>See <a class="underline hover:no-underline" href="#">notable successes</a></li>
      </ul>
    </div>
    <div class="rounded-lg  py-5 px-3">
      <h3 class="font-bold"><em class="px-1 bg-teal text-white">Premium Tech Consulting</em></h3>
      <ul class="list-disc mx-4">
        <li><b>Analyze your business</b> with someone who speaks business and understands tech.</li>
        <li><b>Specialization</b>: Business Process Re-engineering and automation.</li>
        <li><b>Specialization</b>: Digital Business Models and eCommerce.</li>
        <li>See <a class="underline hover:no-underline" href="#">notable successes</a></li>
      </ul>
    </div>
  </div>
  <div class="text-center my-8" id="contact">
    <Button
      bgColor="bg-navy"
      label="Get a quote!"
      link="mailto:contact@eliasladenburger.com"
    />
  </div>
</TextSection>
