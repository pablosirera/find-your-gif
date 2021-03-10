<template>
  <input
    v-model="inputText"
    v-bind="$props"
    class="base-input"
    @input="$emit('input', inputText)"
    @keyup.enter="$emit('keyup-enter')"
  />
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
    value: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      inputText: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.base-input {
  margin-bottom: 15px;
  padding: 5px 10px;
}
</style>
