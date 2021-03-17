<template>
  <section v-if="gifDetail">
    <div class="gif">
      <img :src="gifDetail.images.original.url" :alt="gifDetail.title" />
      <span class="gif-text">{{ gifDetail.title }}</span>
    </div>

    <h2>
      <a :href="gifDetail.url" target="_blank">
        {{ gifDetail.title }}
      </a>
    </h2>
  </section>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    id: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      gifDetail: null,
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    async loadData() {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/${this.id}?api_key=4z4OuOSfN7HPOu4CJCNEYbBoOJCxrfYB`
      )
      const { data } = await response.json()
      this.gifDetail = data
    },
  },
}
</script>

<style lang="scss" scoped>
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
