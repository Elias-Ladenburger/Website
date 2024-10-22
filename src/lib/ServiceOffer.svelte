<script>
  import TextSection from "./TextSection.svelte";
  import Button from "./Button.svelte";
</script>

<TextSection sectionID="services">
  <h1 class="text-2xl font-bold"><em class="bg-teal text-white">My Offer</em></h1>
  <p class="pb-3">
    Every team experiences friction. I help take care of this friction for technology teams and small businesses.
        As someone who walks the intersection of business and technology, I have experience with many typical and not-so-typical challenges in tech.
        <br><br><b>Your processes are all over the place?</b><br> As an Agile Coach, I help your team become better, faster.
      <br><br><b>You have an idea for a new product but no idea how to get started?</b><br> As a Product Manager, I help you fulfill your customer's needs with your business' capabilities
              <br><br><b>Afraid of a cyber security incident but unsure where to start?</b><br> As a Tech Generalist, I am your first point of contact for all questions around information technology - whether it be cyber security, workflow automation or software quality. 

  </p>
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
