<template>
  <div class="gif-filters">
    <BaseInput type="text" name="searchText" />
    <input v-model="searchText" type="text" @keyup.enter="search" />
    <input v-model="limit" @input="changeLimit" type="number" />
    <button @click="search" :disabled="!searchText">Buscar</button>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'

export default {
  name: 'GifFilters',
  components: {
    BaseInput,
  },
  props: {
    limitNumber: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      searchText: '',
      limit: 0,
    }
  },
  mounted() {
    this.limit = this.limitNumber
  },
  methods: {
    search() {
      this.$emit('filter', this.searchText)
    },
    changeLimit() {
      this.$emit('change-limit', +this.limit)
    },
  },
}
</script>

<style lang="scss" scoped>
.gif-filters {
  display: flex;
  flex-direction: column;
  width: 30%;
}
</style>
