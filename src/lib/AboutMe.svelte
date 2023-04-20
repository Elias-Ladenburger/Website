<script>
  import Button from "./Button.svelte";
  import TextSection from "./TextSection.svelte";
</script>

<TextSection sectionID="about">
  <h2 class="text-2xl font-bold self-start">About Me</h2>
  <div class="md:flex md:col-auto justify-end">
    <!--<img
      src="./img/Selfie Transparent.png"
      alt="My face"
      class=" bg-blueGrey w-32  md:mr-3"
    />-->
    <div class="self-end">
      <p>
        I am a freelancer who walks the line between business and technology.
        This allows me to be your general practitioner for tech: The first
        person to call when you find that you processes are not working, your
        projects are stuck or your product does not perform as expected. <br
        /><br />
      </p>
      <p>
        I have lived and worked across Germany, Austria, Spain and China. I
        "grew up" in a corporate OEM, led a cross-functional team in an
        eCommerce startup and tried my hand in starting my own business. I was in consulting before going to university, while being in university and after leaving university.
        <br />
      </p>
      <p>
        I am 26 years old. I never did the same thing twice, but have always applied past learnings to present challenges. I want to help you.
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
