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
    As a good project manager, I methodically reduce this friction. I do this by following four principles:</p>
    <ul class="list-disc mx-4">
      <li><b>Pragmatism:</b> When something doesn't work, we change it. No dogma, no b*llsh*t. Agile principles are valuable, treating them as religion is not. </li>
      <li><b>Transparency:</b> Information is communicated frequently and asynchronously to project members and stakeholders. You do not need to attend meetings in order to stay up to date.</li>
      <li><b>Efficiency:</b> Meetings are kept short and on point. Short, asynchronous communication is preferred. Goals first, improvement second, gold plating never.</li>
      <li><b>Respect:</b> I believe everybody can bring value. I don't believe that everybody always does.</li>
      <li><b>(Bonus) Humor:</b> I have been known to use memes and Pizza to motivate people at on-site events. Isn't life just more fun when we can all have a laugh occasionally?</li>
    </ul>
    <br>
    

  <p class="pb-2">
    This being said, my areas of expertise can roughly be described as follows:
  </p>
  <div class="lg:grid lg:grid-cols-3 gap-2 align-top">
    <div class="rounded-lg border-blueGrey border-4 hover:bg-blueGrey hover:text-white  py-5 px-3">
      <h3 class="font-bold">Agile Project Management</h3>
      <ul class="list-disc mx-4">
        <li>Interfacing between business stakeholders and implementation teams</li>
        <li>Project monitoring, reporting and quality control</li>
        <li>Implementing agile project management practices</li>
      </ul>
    </div>
    <div
      class="rounded-lg border-blueGrey border-4 hover:bg-blueGrey hover:text-white py-5 px-3 my-2 lg:my-0"
    >
      <h3 class="font-bold">Agile Product Management</h3>
      <ul class="list-disc mx-4">
        <li>Requirements solicitation, gathering and definition</li>
        <li>Defining a clear roadmap and continuously tracking progress</li>
        <li>Testing and quality assurance</li>
      </ul>
    </div>
    <div class="rounded-lg border-blueGrey border-4 hover:bg-blueGrey hover:text-white  py-5 px-3">
      <h3 class="font-bold">Agile Tech Consulting</h3>
      <ul class="list-disc mx-4">
        <li>Analyzing, automating and re-engineering cumbersome processes</li>
        <li>Taking care of your system landscape</li>
        <li>Bringing an outside perspective to your insider smarts</li>
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
