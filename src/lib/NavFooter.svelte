<script>
    let imprint = {name: "Imprint", slug: "imprint"},
        contact = {name: "Contact", slug: "contact"};

    let navElements = [imprint, contact];
</script>



<footer class="bg-navyBlue">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1">
            <ul class="list-reset mb-6">
            {#each navElements as navElem}
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a href="/{navElem.slug}" class="no-underline hover:underline text-gray-800 hover:text-pink-500">{navElem.name}</a>
            </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
</footer>

