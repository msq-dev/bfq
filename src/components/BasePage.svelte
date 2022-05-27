<script>
  import { onMount } from "svelte"
  import { fade } from "svelte/transition"
  import { location } from "svelte-spa-router"

  onMount(() => {
    if (
      $location === "/" ||
      $location === "/browse" ||
      $location === "/about"
    ) {
      console.log("RESET PLZ")
    }
  })
</script>

<main
  class="container"
  in:fade={{ duration: 100, delay: 200 }}
  out:fade={{ duration: 100, delay: 0 }}
>
  <slot />
</main>

<style>
  main {
    margin: 1vmin 0 20vmin;
  }
</style>
