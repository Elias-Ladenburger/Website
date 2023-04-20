<script>
  export let sectionID = "newSection"
  export let bgColor = "bg-navy"

  let myClasses = `py-12 px-5 md:py-12 md:px-24 ${bgColor}`
</script>

<section id={sectionID} class={myClasses}>
  <div class="p-3 bg-white text-navy rounded-2xl text-lg"><slot /></div>
</section>
