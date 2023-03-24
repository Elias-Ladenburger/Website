<script>
  import Hero from "$lib/Hero.svelte";
  let selfDescription = ["product manager", "software developer", "IT generalist"]
  let heroCTA = {title:"Help me?", link:"contact"}
</script>

<Hero heroTitle="Hi! I am <em class='bg-emphasis'>Elias Ladenburger</em>."
  heroSubtitle="I can probably help you."
  {heroCTA}/>