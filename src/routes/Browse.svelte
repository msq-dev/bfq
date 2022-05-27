<script>
  import { onMount } from "svelte"
  import { deck } from "../stores/game"
  import BasePage from "../components/BasePage.svelte"
  import PageQuartet from "../components/PageQuartet.svelte"
  import ButtonNav from "../components/ButtonNav.svelte"
  import { fetchData, makePlayingCards } from "../utils/utils"

  const quatSymbols = {
    Breakfast: "🥐",
    "Im Stehen": "🧍",
    Sattmacher: "🤰",
    "Snacks in P'Berg": "🥪",
    Coffee: "☕",
    Törtchen: "🍰",
    Eisiges: "🍦",
    Mobil: "🚶",
  }

  export let params = {}

  let quartets = []

  function getQuartets(cardDeck) {
    let quats = []

    cardDeck.forEach((card) => {
      quats.push({ quatIndex: card.index[0], quatName: card.category })
    })

    // courtesy of https://stackoverflow.com/a/58429784
    return [...new Map(quats.map((item) => [item["quatIndex"], item])).values()]
  }

  onMount(() => {
    if (!$deck.length) {
      fetchData()
        .then((data) => {
          $deck = makePlayingCards(data)
        })
        .then(() => {
          quartets = getQuartets($deck)
        })
    } else {
      quartets = getQuartets($deck)
    }
  })
</script>

<BasePage>
  {#if !params.quat}
    <h1>Quartette</h1>
    <div class="quartets-grid">
      {#each quartets as quat}
        <ButtonNav href={`/browse/${quat.quatIndex}`}>
          <div class="flex-col center">
            <div>{quat.quatName}</div>
            <div class="quat-symbol">{quatSymbols[quat.quatName]}</div>
          </div>
        </ButtonNav>
      {/each}
    </div>
  {:else}
    <PageQuartet quat={params.quat} />
  {/if}
</BasePage>

<style>
  .quartets-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75em;
  }

  .quat-symbol {
    filter: drop-shadow(0 0 0.1em rgb(0 0 0 / 0.5));
  }
</style>
