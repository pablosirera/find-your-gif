<template>
  <div class="home">
    <BaseHeader class="app-header" />

    <section>
      <GifFilters
        @filter="searchGif"
        @change-limit="updateLimit"
        :limit-number="limitNumber"
      />

      <GifsList :gifs-list="searchedGifs">
        <h1>Gifs buscados</h1>
      </GifsList>

      <GifsList :gifs-list="trendingGifs" @select-gif="goToDetail">
        <h1>Trending Gifs</h1>
      </GifsList>
    </section>
  </div>
</template>

<script>
import GifFilters from '@/components/GifFilters.vue'
import GifsList from '@/components/GifsList.vue'
import BaseHeader from '@/components/BaseHeader.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    GifFilters,
    GifsList,
    BaseHeader,
  },
  data() {
    return {
      searchedGifs: [],
      limitNumber: 10,
    }
  },
  computed: {
    trendingGifs() {
      return this.$store.state.gifs.allGifs
    },
  },
  created() {
    this.loadData()
  },
  methods: {
    ...mapActions({
      listGifs: 'gifs/listGifs',
    }),
    loadData() {
      this.listGifs({ limit: this.limitNumber })
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
    goToDetail(gif) {
      this.$router.push({
        name: 'Detail',
        params: gif,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.app-header {
  margin-bottom: 30px;
}
</style>
