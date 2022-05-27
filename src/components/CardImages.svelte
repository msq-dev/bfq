<script>
  import { onMount } from "svelte"
  import { tweened } from "svelte/motion"
  import { checkIfImageExists } from "../utils/utils"

  const IMG_BASE_URL = "https://apps.maxspuling.de/assets/bfq/img/"

  const thumbnailSize = tweened(2.5, { duration: 100 })
  const borderWidth = tweened(undefined, { duration: 0 })

  export let images

  let imgExistsMain = false
  let imgExistsSecondary = false
  let imagesSwitched = false
  let isSwitching = false

  $: imagesArray = images.split(",")

  $: imgMain = imagesArray[0].trim()
  $: srcMain = imgExistsMain
    ? `url(${IMG_BASE_URL}${imgMain})`
    : `url(${IMG_BASE_URL}placeholder.jpg)`

  $: imgSecondary = imagesArray[1].trim()
  $: srcSecondary = imgExistsSecondary
    ? `url(${IMG_BASE_URL}${imgSecondary})`
    : `url(${IMG_BASE_URL}placeholder.jpg)`

  $: $borderWidth = isSwitching ? 0 : 0.15

  function switchImages() {
    isSwitching = true
    setTimeout(() => {
      if (!imagesSwitched) {
        srcMain = `url(${IMG_BASE_URL}${imgSecondary})`
        srcSecondary = `url(${IMG_BASE_URL}${imgMain})`
        imagesSwitched = true
      } else {
        srcMain = `url(${IMG_BASE_URL}${imgMain})`
        srcSecondary = `url(${IMG_BASE_URL}${imgSecondary})`
        imagesSwitched = false
      }
      isSwitching = false
    }, 200)
  }

  function switchAnimation() {
    thumbnailSize
      .set(0)
      .then(() => {
        switchImages()
      })
      .then(() => {
        thumbnailSize.set(2.5, {
          delay: 200,
        })
      })
  }

  onMount(() => {
    checkIfImageExists(`${IMG_BASE_URL}${imgMain}`, (exists) => {
      if (exists) {
        imgExistsMain = true
      } else {
        imgExistsMain = false
      }
    })

    checkIfImageExists(`${IMG_BASE_URL}${imgSecondary}`, (exists) => {
      if (exists) {
        imgExistsSecondary = true
      } else {
        imgExistsSecondary = false
      }
    })
  })
</script>

<div class="images">
  <div
    class="img-block img-main"
    class:img-temp={!isSwitching}
    style:background-image={srcSecondary}
  />
  <div
    class="img-block img-main"
    class:img-temp={isSwitching}
    style:background-image={srcMain}
  />
  <div
    class="img-block img-secondary | shadow"
    style:background-image={srcSecondary}
    style:width="{$thumbnailSize}rem"
    style:border-width="{$borderWidth}rem"
    on:click={() => switchAnimation()}
  />
</div>

<style>
  .images {
    position: relative;
    width: 100%;
    height: 12rem;
    margin-bottom: 0.5em;
  }

  .img-block {
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .img-main {
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
  }

  .img-temp {
    transform: scale(0);
    transform-origin: bottom right;
    transition: transform 400ms;
  }

  .img-secondary {
    z-index: 100;
    aspect-ratio: 1;
    bottom: 0.5rem;
    right: 0.5rem;
    border-radius: 0.5rem;
    border-style: solid;
    border-color: #fff;
  }
</style>
