<template>
  <div class="gif-filters">
    <BaseInput
      v-model="searchText"
      type="text"
      name="searchText"
      @keyup-enter="search"
    />

    <BaseInput
      v-model="limit"
      @input="changeLimit"
      type="number"
      name="limit"
    />

    <BaseButton @click="search" :disabled="!searchText" theme="primary">
      Buscar
    </BaseButton>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'GifFilters',
  components: {
    BaseInput,
    BaseButton,
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
