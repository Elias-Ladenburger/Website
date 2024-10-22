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

      <p>Fresh out of high school, I did an internship at a small IT consulting firm. 
        After a few weeks, I was made a junior consultant and tasked with finding and implementing new software for customer relationship management (CRM). At 17, I negotiated with vendors and then prepared the roll-out, including database migration and training concept. After that, I decided to study business informatics.<br><br>

Not content with a purely theoretical approach to learning, I applied and joined a dual study program at Daimler - alternating between university and work placements every 3 months. I experienced first-hand how new software and hardware was brought into the sales branches throughout Germany, worked on a security concept for the German IT and developed software that is still used in a branch today.<br><br>

Even before graduation, I joined to the newly founded Mercedes-Benz Innovation Lab (MBition) in Berlin as the right-hand man of the managing director. During the rapid growth of MBition I was primary contact person for and involved in numerous internal issues, from the continuous improvement of the hiring process to the reporting of progress and the design of the product portfolio. I crammed my Bachelor's thesis into weekends and late nights.<br><br>

When said managing director left the company to start his own venture in 2019, I was one of two facilitators of the ensuing re-organization, while also mentoring the development team responsible for personalization as Scrum Master and Defect Manager.<br><br>

When MBition entered calmer waters, I decided to take a detour into "real" academia, pursuing a graduate degree in Vienna, the world's best place to live. During this time I picked up freelance consulting for smaller clients and NPOs. For the student consultancy "icons" I managed three projects and the internal IT department.<br><br>

After returning to Berlin, I led the 3-person tech team of a small eCommerce startup. There I was product manager, team coach and lead developer at the same time. After a strategic reorientation, the startup decided to focus on marketing over development and I on freelancing over employment - they became my first client.<br><br>

In my private life, I am a passionate martial artist, volunteer as a communication training for teenagers, and am interested in sustainability in everyday life.<br><br>

Having lived in Suzhou, China for five years and later completed internships in Shanghai, Madrid, Vienna and Berlin, I respect other cultures and enjoy working with diverse teams.
</p>
      <br />

      <p>
        I wear many hats and am comfortable in many domains. Let's see how I can help you!
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
