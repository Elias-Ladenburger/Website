<script>
    export let menu =[
         {name: "Home", slug: ""},
         {name: "About", slug: "about"},
         //let community = {name: "Community", slug: "community"}
         {name: "Contact", slug: "contact"}
     ];
 
     $: showOnMobile = "hidden";
     $: buttonSymbol = "&#9776;"
 
     function showMenuOnMobile() {
         let showOnMobileClasses = ["hidden", "w-full"];
         showOnMobile = showOnMobile === showOnMobileClasses[0] ? showOnMobileClasses[1] : showOnMobileClasses[0];
         buttonSymbol = buttonSymbol === "&times;" ? "&#9776;" : "&times;";
     }
 
 </script>
 
 <nav class="text-primary">
     <div class="">
         <!-- This is used to open the menu on mobile devices -->
 <div class="md:hidden">
     <button class="text-4xl font-bold duration-300 hover:opacity-70 mx-2"
         on:click="{()=>showMenuOnMobile()}">
             {@html buttonSymbol}
     </button>
 </div>
     </div>
     <ul class=" {showOnMobile} list-reset md:flex justify-end flex-1 items-center font-header">
         
         {#each menu as navElem}
         <li class="mr-5">
             <a class="inline-block py-2 px-4 font-bold no-underline hover:opacity-70" href="/{navElem.slug}" on:click="{showMenuOnMobile}">{navElem.name}</a>
         </li>
         {/each}
     </ul>
 </nav>