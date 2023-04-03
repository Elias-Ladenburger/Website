<script>
	import Header from '$lib/Header.svelte';
	// @ts-ignore
	import Footer from '$lib/Footer.svelte';
</script>
<Header/>

<!--
	<hr class="hidden md:flex border-b border-primaryContrast my-0 py-0 md:opacity-25"/>
-->

<div class="pt-7 md:pt-0">
<slot/>
</div>
<!-- <hr class="hidden md:flex border-b border-primaryContrast my-0 py-0"/>-->
<Footer/>