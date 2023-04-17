<script>
  export let title = "";
  export let body = "";
</script>

<div class="px-12 pt-3">
  <div
    class="md:grid md:grid-cols-2 spacing-y-5 md:spacing-0 p-3 md:p-5 text-lg text-left text-navy bg-white rounded-lg"
  >
    <div class="p-5 my-5">
      <h2 class="text-xl text-center">{title}</h2>
      <p>{body}</p>
      <slot/>
    </div>
  </div>
</div>
