<template>
  <input v-bind="$props" class="base-input" />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
}
</script>

<style lang="scss" scoped>
.base-input {
  margin-bottom: 15px;
  padding: 5px 10px;
}
</style>
