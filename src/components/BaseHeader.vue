<template>
  <header class="base-header">
    <h1>Find Your Gif</h1>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
}
</script>

<style lang="scss" scoped>
.base-header {
  border-bottom: 1px solid lightgray;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;

  h1 {
    font-size: 18px;
  }
}
</style>
