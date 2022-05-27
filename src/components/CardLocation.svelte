<script>
  import IconExternal from "./IconExternal.svelte"
  import IconInsta from "./IconInsta.svelte"

  export let location
  export let website
  export let instagram

  let iconColor = "#3045d9"
</script>

<div class="location">
  <div class="name">
    {location}
  </div>
  <div class="links">
    {#if instagram}<a href={instagram} target="_blank"
        ><IconInsta inline size={1.5} fill={iconColor} /></a
      >{/if}
    {#if website}<a href={website} target="_blank"
        ><IconExternal inline size={1.5} fill={iconColor} /></a
      >{/if}
  </div>
</div>

<style>
  .location {
    display: flex;
  }

  .links {
    margin-left: 0.5em;
  }
</style>
