<template>
  <section>
    <slot>
      <h1>{{ title }}</h1>
    </slot>
    <div class="gifs-wrapper">
      <div class="gif" v-for="(gif, index) in gifsList" :key="index">
        <img v-if="gif.images.original" :src="gif.images.original.url" />
        <span class="gif-text">{{ gif.title }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GifsList',
  props: {
    title: {
      type: String,
      default: 'Gifs',
    },
    gifsList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.gifs-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 6px;
  align-items: center;
}

.gif {
  position: relative;
  display: flex;
  max-width: 250px;

  img {
    width: 100%;
  }

  &-text {
    position: absolute;
    bottom: 0;
    left: 0;
    background: lightgray;
    padding: 5px 15px;
  }
}
</style>
