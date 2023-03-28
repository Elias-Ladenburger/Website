<script>
    $: myMail = "click to show mail";
    export let textColor = "text-emphasis";
    function showMail() {
        myMail = "<a href='mailto:contact@eliasladenburger.com'>contact@eliasladenburger.com</a>"
    }
</script>

<em class="underline hover:no-underline hover:cursor-pointer {textColor}" 
    on:click="{()=>showMail()}" on:keydown="{()=>showMail()}">
    {@html myMail}
</em>