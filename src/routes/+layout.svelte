<script>
	import Header from '$lib/Header.svelte';
	// @ts-ignore
	import Footer from '$lib/Footer.svelte';
</script>
<Header/>
<hr class="hidden md:flex border-b border-primaryContrast my-0 py-0"/>

<slot/>

<hr class="hidden md:flex border-b border-primaryContrast my-0 py-0"/>
<Footer/>