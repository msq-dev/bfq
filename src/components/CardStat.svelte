<script>
  export let name = ""
  export let info = ""
  export let value = 0
  export let displayValue = ""
  export let unit = ""
  export let highestWins = null

  const dict = {
    price: "Preis",
    duration: "Genussdauer",
    yearOpening: "Eröffnungsjahr",
    noOfStores: "Anzahl Filialen",
    hipness: "Hipness-Faktor",
  }
</script>

{#if value}
  <div class="stat">
    <div class="name">
      {dict[name]}
    </div>
    <div class="value">
      {#if info}<span class="info">{info}</span>{/if}
      {@html displayValue || value}
      {#if value && unit}<span class="unit">{unit}</span>{/if}
    </div>
  </div>
{/if}

<style>
  .stat {
    display: grid;
    grid-template-columns: max-content 1fr;
    width: 100%;
    border-bottom: 1px dotted gray;
  }

  .stat:last-of-type {
    border: none;
  }

  .info {
    font-size: 70%;
  }

  .value {
    text-align: right;
  }
</style>
