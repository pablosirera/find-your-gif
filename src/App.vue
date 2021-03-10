<template>
  <div id="app">
    <BaseHeader class="app-header" />

    <AuthLogin />

    <GifFilters
      @filter="searchGif"
      @change-limit="updateLimit"
      :limit-number="limitNumber"
    />

    <GifsList :gifs-list="searchedGifs">
      <h1>Gifs buscados</h1>
    </GifsList>

    <GifsList :gifs-list="trendingGifs">
      <h1>Trending Gifs</h1>
    </GifsList>
  </div>
</template>

<script>
import GifFilters from '@/components/GifFilters.vue'
import GifsList from '@/components/GifsList.vue'
import BaseHeader from '@/components/BaseHeader.vue'
import AuthLogin from '@/components/AuthLogin.vue'

export default {
  name: 'App',
  components: {
    GifFilters,
    GifsList,
    BaseHeader,
    AuthLogin,
  },
  data() {
    return {
      trendingGifs: [],
      searchedGifs: [],
      limitNumber: 10,
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    async loadData() {
      const params = `&limit=${this.limitNumber}`
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=4z4OuOSfN7HPOu4CJCNEYbBoOJCxrfYB${params}`
      )
      const { data } = await response.json()
      this.trendingGifs = data
    },
    async searchGif(searchText) {
      const params = `&limit=${this.limitNumber}&q=${searchText}`
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=4z4OuOSfN7HPOu4CJCNEYbBoOJCxrfYB${params}`
      )
      const { data } = await response.json()
      this.searchedGifs = data
    },
    updateLimit(limit) {
      this.limitNumber = limit
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

.app-header {
  margin-bottom: 30px;
}
</style>
