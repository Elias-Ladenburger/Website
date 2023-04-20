<script>
  export let sectionID = "newSection"
  export let bgColor = "bg-navy"

  let myClasses = `pt-7 px-5 md:pt-7 md:px-7 ${bgColor}`
</script>

<section id={sectionID} class={myClasses}>
  <div class="p-3 bg-white text-navy rounded-2xl text-lg"><slot /></div>
</section>
