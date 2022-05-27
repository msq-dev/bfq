<script>
  export let index
  export let category

  const colors = [
    "darkgreen",
    "crimson",
    "darkmagenta",
    "darkorange",
    "deeppink",
    "blueviolet",
    "saddlebrown",
    "tomato",
    "navy",
  ]

  $: categoryColor = colors[parseInt(index[0]) - 1]
</script>

<div class="card-head" style:color={categoryColor}>
  <div>{category}</div>
  <div class="card-index">{index}</div>
</div>

<style>
  .card-head {
    display: flex;
    justify-content: space-between;
    font-size: 80%;
  }

  .card-index {
    text-transform: uppercase;
  }
</style>
