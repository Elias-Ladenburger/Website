<script>
  import Hero from "$lib/Hero.svelte";
  import Content from "$lib/Content.svelte";

  let heroCTA = {title:"Find out more", link:"about"}
</script>

<Hero heroTitle="Step up your <em class='bg-emphasis'>eCommerce game</em>."
  heroSubtitle="Stop worrying over technology. Get an expert."
  {heroCTA}/>

  <Content content=""/>