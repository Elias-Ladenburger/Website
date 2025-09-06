<script>
  import Button from "./Button.svelte";
  import TextSection from "./TextSection.svelte";
</script>

<TextSection sectionID="about">
  <h2 class="text-2xl font-bold self-start"><em class="bg-teal text-white">About Me</em></h2>
  <div class="md:flex md:col-auto justify-end">
    <!--<img
      src="./img/Selfie Transparent.png"
      alt="My face"
      class=" bg-blueGrey w-32  md:mr-3"
    />-->
    <div class="self-end">

      <p>Elias is a hands-on, outcome-driven consultant who combines <b>executive-level insight, technical fluency, and startup agility</b>, making him equally effective in corporates, high-growth startups, and <b>ambiguous problem spaces</b>.
</p>
      <br />

      <p>
        
      </p>
    </div>
  </div>
  <div class="text-center my-5" id="contact">
    <Button
      bgColor="bg-navy"
      label="Get in touch!"
      link="mailto:contact@eliasladenburger.com"
    />
  </div>
</TextSection>
