<script>
	import Header from '$lib/Header.svelte';
	// @ts-ignore
	import Footer from '$lib/Footer.svelte';
</script>
<div class="mb-12">
<Header/>
</div>
<!--
	<hr class="hidden md:flex border-b border-primaryContrast my-0 py-0 md:opacity-25"/>
-->

<slot/>
<!-- <hr class="hidden md:flex border-b border-primaryContrast my-0 py-0"/>-->
<Footer/>