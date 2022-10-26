<template>
  <button
    class="button"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'UiButton',
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
.button {
  height: 42px;

  @apply
    flex items-center justify-center
    rounded
    bg-green-400
    hover:bg-green-300
    active:bg-green-600
    px-4
    py-1
    cursor-pointer
    transition-colors;
}
</style>
