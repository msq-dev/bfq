<script>
  import CardHead from "./CardHead.svelte"
  import CardLocation from "./CardLocation.svelte"
  import CardAddress from "./CardAddress.svelte"
  import CardImages from "./CardImages.svelte"
  import CardStat from "./CardStat.svelte"

  export let index = ""
  export let category = ""
  export let dish = ""
  export let location = ""
  export let website = ""
  export let instagram = ""
  export let streetAddress = ""
  export let district = ""
  export let stats = []
  export let images = ""
</script>

<div class="card | rounded">
  <CardHead {index} {category} />

  <div class="dish | fit-text" style="--text-length: {dish.length};">
    {dish}
  </div>

  <CardLocation {location} {website} {instagram} />
  <CardAddress {streetAddress} {district} />
  <CardImages {images} />

  {#if stats.length}
    {#each stats as stat}
      <CardStat {...stat} />
    {/each}
  {/if}
</div>

<style>
  .card {
    position: relative;
    font-size: 90%;
    color: var(--clr-dark);
    background-color: var(--clr-light);
    width: min(100vmin - 4.5rem, 30rem);
    aspect-ratio: 1 / 1.55;
    padding: 0.5em 1em;
    margin-bottom: 1em;
    scroll-snap-align: start;
  }

  .dish {
    --scale: 17;
    font-weight: 700;
  }
</style>
