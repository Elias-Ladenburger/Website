<script>
  import TextSection from "./TextSection.svelte";
  import Button from "./Button.svelte";
</script>

<TextSection sectionID="services" bgColor="bg-navy">
  <h1 class="text-2xl font-bold">My Offer</h1>
  <p class="pb-3">
    I am a versatile problem solver first and foremost. When choosing projects I
    prefer those that are in danger of going above budget, running over time or
    falling short of expected scope. I like to make cumbersome processes lean
    and help overwhelmed teams find inner peace.
  </p>
  <p class="pb-2">
    This being said, my areas of expertise can roughly be described as follows:
  </p>
  <div class="lg:grid lg:grid-cols-3 gap-2 align-top">
    <div class="rounded-lg border-navy border-4 hover:bg-navy hover:text-white py-5 px-3">
      <h3 class="font-bold">Project Management</h3>
      <ul class="list-disc mx-4">
        <li>Interfacing between business stakeholders and implementation teams</li>
        <li>Project monitoring, reporting and quality control</li>
        <li>Implementing agile project management practices</li>
      </ul>
    </div>
    <div
      class="rounded-lg border-blueGrey border-4 hover:bg-blueGrey hover:text-white py-5 px-3 my-2 lg:my-0"
    >
      <h3 class="font-bold">Product Management</h3>
      <ul class="list-disc mx-4">
        <li>Requirements solicitation, gathering and definition</li>
        <li>Defining a clear roadmap and continuously tracking progress</li>
        <li>Testing and quality assurance</li>
      </ul>
    </div>
    <div class="rounded-lg border-teal border-4 hover:bg-teal hover:text-white py-5 px-3">
      <h3 class="font-bold">Tech Consulting</h3>
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
