<script>
    import {page} from '$app/stores';
    $: currentPathArr = $page.url.pathname.split("/");
    $: currentPath = currentPathArr.length > 1 ? currentPathArr[1] : "";

    let home = {name: "Start", slug: ""},
        about = {name: "About", slug: "about"};
        // references = {name: "References", slug: "references"};

    let navElements = [home, about];
</script>

<nav id="header" class="fixed w-full z-30 top-0 text-white">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-inherit lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
            {#each navElements as navElem}
          <li class="mr-3">
            <a class="inline-block py-2 px-4 text-white font-bold no-underline" href="/{navElem.slug}">{navElem.name}</a>
          </li>
          {/each}
        </ul>
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>