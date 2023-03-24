<script>
    export let menu=[
        {name: "Imprint", slug: "imprint"},
        {name: "Privacy Policy", slug: "privacy"},
        {name: "Contact", slug: "contact"},
]
</script>

<section class="bg-primary top-0 right-0 px-10 py-16 bg-gray-800 z-50
relative flex md:p-0 md:space-x-6">
    <ul class="md:px-8 list-reset md:flex justify-center text-center flex-1 items-center">
        {#each menu as navItem}
        <li class="mr-5">
            <a href="/{navItem.slug}"
            class="inline-block py-2 px-2 md:px-4 font-bold no-underline hover:opacity-70">
            {navItem.name}</a>
        </li>
        {/each}
        <li class="inline-block py-2 md:px-4">&#169; Elias Ladenburger 2023. All rights reserved.</li>
    </ul>
</section>