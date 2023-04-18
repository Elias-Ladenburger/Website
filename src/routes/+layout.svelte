<script>
  import Header from "$lib/Header.svelte";
  // @ts-ignore
  import Footer from "$lib/Footer.svelte";
</script>


<div class="mb-0 md:mb-12">
<Header/>
<!--
	<hr class="hidden md:flex border-b border-primaryContrast my-0 py-0 md:opacity-25"/>
-->
</div>

<div class="md:my-12 my-10">


  <slot />
</div>
<!-- <hr class="hidden md:flex border-b border-primaryContrast my-0 py-0"/>-->
<Footer />
