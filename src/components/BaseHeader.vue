<template>
  <header class="base-header">
    <h1>Find Your Gif</h1>
    <h2>{{ userData.name }}</h2>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BaseHeader',
  computed: {
    ...mapState('auth', ['userData']),
  },
}
</script>

<style lang="scss" scoped>
.base-header {
  border-bottom: 1px solid lightgray;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;

  h1 {
    font-size: 18px;
  }

  h2 {
    font-size: 16px;
  }
}
</style>
