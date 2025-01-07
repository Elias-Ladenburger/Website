<script>
  let date = new Date().getFullYear() 

    export let menu=[
        {name: "Imprint", slug: "imprint"},
        {name: "Privacy Policy", slug: "privacy"},
        //{name: "Contact", slug: "contact"},
]
</script>

<hr class="h-px text-navy w-[80%]">

    <section class="top-0 right-0 px-10 py-5 md:py-16 bg-gray-800 z-50
relative flex md:p-0 md:space-x-6">
    <ul class="md:px-8 list-reset md:flex justify-center text-center flex-1 items-center">
        {#each menu as navItem}
        <li class="mr-5">
            <a href="/{navItem.slug}"
            class="inline-block py-2 px-2 md:px-4 font-bold no-underline hover:opacity-70">
            {navItem.name}</a>
        </li>
        {/each}
        <li class="inline-block py-2 md:px-4">&#169; Elias Ladenburger {date}. All rights reserved.</li>
        <li><a rel="nofollow" href="https://www.exali.de/siegel/Elias_Ladenburger" target="_blank" title="Mehr &uuml;ber die IT-Haftpflicht von Elias Ladenburger"><img src="https://www.exali.de/siegel/siegel_de-1_9652b4e2a2676507708d8ef68114599d.png" width="65" height="65" alt="Mehr &uuml;ber die IT-Haftpflicht von Elias Ladenburger" /></a></li>
    </ul>
    
</section>