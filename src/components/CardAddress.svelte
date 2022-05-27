<script>
  export let streetAddress
  export let district
</script>

<div class="address">
  <div class="street">{streetAddress}, {district}</div>
</div>

<style>
  .address {
    display: flex;
    justify-content: space-between;
    font-size: 80%;
    margin-bottom: 0.5em;
  }
</style>
