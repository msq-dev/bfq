<script>
  import BasePage from "../components/BasePage.svelte"
  import ButtonNav from "../components/ButtonNav.svelte"
</script>

<BasePage>
  <h1>Berlin Food Quartett</h1>
  <p>
    Du möchtest Berlins kulinarische Vielfalt spielerisch kennenlernen? Dann
    bitte hier entlang <ButtonNav href={"/game"}>&rarr;&nbsp;Spielen</ButtonNav>
  </p>
  <p>
    Du nimmst deine Erkundungen lieber auf eigene Faust vor und suchst gezielt
    nach Tipps? Das kannst du hier: <ButtonNav href={"/browse"}
      >&rarr;&nbsp;Stöbern</ButtonNav
    >
  </p>
</BasePage>
