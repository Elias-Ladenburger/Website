<script>
    import {page} from '$app/stores';
    $: currentPathArr = $page.url.pathname.split("/");
    $: currentPath = currentPathArr.length > 1 ? currentPathArr[1] : "";

    let home = {name: "Start", slug: ""},
        about = {name: "Über mich", slug: "about"},
        references = {name: "Referenzen", slug: "references"};

    let navElements = [home, about, references];
</script>

<ul>
    {#each navElements as navElem}
    <li>
        <a href="/{navElem.slug}">
            {#if currentPath===navElem.slug}<strong class="current">{navElem.name}</strong>{:else}{navElem.name}{/if}</a>
    </li>
    {/each}
</ul>

<style>
    ul {
        list-style: none;
	    margin: 0;
	    padding: 0;
	    display: flex;
    }

    li {
        margin: 10px;
    }

    li a {
        color: #1f4198;
        margin-right: 20px;
        text-decoration: none;
    }

    li a:hover {
        text-decoration: underline;
    }


</style>