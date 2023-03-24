<script>
    let home = {name: "Start", slug: ""},
        about = {name: "About", slug: "about"};
    // let references = {name: "References", slug: "references"};
    // let blog = {name: "Blog", slug: "blog"}

    let menu = [home, about];
    $: showOnMobile = "hidden";
    
    function showMenuOnMobile() {
        let showOnMobileClasses = ["hidden", "w-full h-screen"];
        showOnMobile = showOnMobile === showOnMobileClasses[0] ? showOnMobileClasses[1] : showOnMobileClasses[0];
    }
</script>

<nav>
    <ul id="menu" class="{showOnMobile} bg-primary fixed top-0 right-0 px-10 py-16 bg-gray-800 z-50
                    md:relative md:flex md:p-0 md:flex-row md:space-x-6">

        <li class="md:hidden z-90 fixed top-4 right-6">
            <button class="text-right text-primaryContrast text-4xl"
                on:click="{()=>showMenuOnMobile()}">&times;</button>
        </li>

        <ul class="list-reset md:flex justify-end flex-1 items-center">
        {#each menu as navElem}
        <li class="mr-5">
            <a class="inline-block py-2 px-4 font-bold no-underline hover:opacity-70" href="/{navElem.slug}" on:click={()=>showOnMobile="hidden"}>{navElem.name}</a>
        </li>
        {/each}
        </ul>
    </ul>

    <!-- This is used to open the menu on mobile devices -->
    <div class="flex items-center md:hidden">
        <button class="text-primaryContrast text-4xl font-bold duration-300 hover:opacity-70"
            on:click="{()=>showMenuOnMobile()}">
            &#9776;
        </button>
    </div>
    <hr class="hidden md:flex border-b border-primaryContrast my-0 py-0"/>
</nav>