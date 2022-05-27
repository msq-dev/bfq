<script>
  import { link } from "svelte-spa-router"
  export let href = "/"
</script>

<a {href} class="btn-nav | rounded" use:link>
  <slot />
</a>

<style>
  .btn-nav {
    text-decoration: none;
    color: var(--clr-dark);
    background-color: var(--clr-light);
    padding: 0.15em 0.75em 0.25em 0.5em;
  }
</style>
