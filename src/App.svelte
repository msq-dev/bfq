<script>
  import { onMount } from "svelte"
  import Router from "svelte-spa-router"
  import { deck } from "./stores/game"
  import Home from "./routes/Home.svelte"
  import Game from "./routes/Game.svelte"
  import Browse from "./routes/Browse.svelte"
  import About from "./routes/About.svelte"
  import NotFound from "./routes/NotFound.svelte"
  import { fetchData, makePlayingCards } from "./utils/utils"

  const routes = {
    "/": Home,
    "/game": Game,
    "/browse/:quat?": Browse,
    "/about": About,
    "*": NotFound,
  }

  onMount(() => {
    fetchData().then((data) => {
      $deck = makePlayingCards(data)
    })
  })
</script>

<div class="mainwrapper">
  <Router {routes} restoreScrollState={true} />
</div>
