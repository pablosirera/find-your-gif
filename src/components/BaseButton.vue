<template>
  <button
    @click="$emit('click')"
    :disabled="disabled"
    class="base-button"
    :class="theme"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: '',
      validate: value => ['primary', 'secondary'].includes(value),
    },
    type: {
      type: String,
      default: 'button',
    },
  },
}
</script>

<style lang="scss" scoped>
.base-button {
  padding: 5px 15px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;

  &.primary {
    background-color: #fabada;
    border: 0;
  }
}
</style>
