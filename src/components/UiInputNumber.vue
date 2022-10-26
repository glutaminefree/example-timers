<template>
  <label :for="label">
    <span>{{ label }}</span>
    <div class="relative">
      <input
        ref="input"
        :id="label"
        class="input"
        type="text"
        :value="value"
        @keypress="onKeyPress"
        @input="updateValue"
      />
      <div class="absolute top-1 right-1 bottom-1">
        <div
          class="input__arrow rounded-t"
          @click.prevent="increment"
          @keydown.enter="increment"
        >
          +
        </div>
        <div
          class="input__arrow rounded-b"
          @click.prevent="decrement"
          @keydown.enter="decrement"
        >
          -
        </div>
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: 'UiInputNumber',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    increment() {
      const result = this.value + this.step;

      if (result <= this.max) {
        this.$emit('input', result);
      }
    },
    decrement() {
      const result = this.value - this.step;

      if (result >= this.max) {
        this.$emit('input', result);
      }
    },

    onKeyPress(event) {
      if (/\d/.test(event.key) === false) {
        event.preventDefault();
        return false;
      }

      return true;
    },

    updateValue(event) {
      let result = parseInt(event.target.value, 10);

      if (Number.isNaN(result)) {
        result = this.min;
      } else if (result < this.min) {
        result = this.min;
      } else if (result > this.max) {
        result = this.max;
      }

      this.$emit('input', result);
      this.$refs.input.value = result;
    },
  },
};
</script>

<style scoped>
.input {
  height: 42px;

  @apply
    border border-gray-400
    hover:border-blue-200
    focus:outline-none
    focus:border-blue-400
    rounded
    px-2 py-1
    transition-colors;
}
.input__arrow {
  width: 20px;
  max-height: 50%;
  user-select: none;

  @apply
    flex items-center justify-center
    border border-gray-400
    cursor-pointer;
}
.input__arrow + .input__arrow {
  border-top: none;
}
</style>
