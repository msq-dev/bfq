<script>
  export let size = 1
  export let inline = false
  export let fill = "currentColor"
</script>

<svg width="{size}em" height="{size}em" viewBox="0 0 32 32" class:inline>
  <slot {fill} />
</svg>

<style>
  .inline {
    display: inline;
    vertical-align: middle;
  }
</style>
