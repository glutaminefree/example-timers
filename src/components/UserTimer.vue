<template>
  <div class="text-lg">
    <div class="font-bold">
      <span>{{ label }}</span>
      <span v-if="finishedAt.length" class="text-gray-400">
        <span> | Finished at &dash;</span>
        <span>{{ finishedAt }}</span>
      </span>
    </div>
    <div>{{ min < 10 ? `0${min}` : min }}:{{ sec < 10 ? `0${sec}` : sec }}</div>
  </div>
</template>

<script>
export default {
  name: 'UserTimer',
  props: {
    label: {
      type: String,
      required: true,
    },
    minutes: {
      type: Number,
      required: true,
    },
    seconds: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      min: this.minutes,
      sec: this.seconds,
      finishedAt: '',
      interval: null,
    };
  },
  created() {
    this.initTimer();
  },
  methods: {
    initTimer() {
      this.interval = setInterval(this.timerTick, 1000);
    },

    timerTick() {
      // упрощённый вариант - вычитаем каждый раз по секунде
      // хотя setInterval и setTimeout не гарантируют выполнение
      // в точности через указанное время

      if (this.sec > 0) {
        this.sec -= 1;
      } else if (this.min > 0) {
        this.min -= 1;
        this.sec = 59;
      } else {
        const now = new Date();
        this.finishedAt = now.toLocaleTimeString('ru');

        clearInterval(this.interval);
        this.interval = null;
      }
    },
  },
};
</script>

<style scoped>
</style>
