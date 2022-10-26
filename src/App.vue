<template>
  <div id="app">
    <div class="container mx-auto">
      <form class="pt-5" @submit.prevent>
        <div class="text-lg font-semibold">Add new timer</div>
        <div class="flex space-x-4 mt-2">
          <ui-input-number
            v-model="newTimerMinutes"
            label="Minutes"
            :max="60"
          />
          <ui-input-number
            v-model="newTimerSeconds"
            label="Seconds"
            :step="10"
            :max="59"
          />
          <ui-button class="self-end" @click="addTimer">Add</ui-button>
        </div>
      </form>
      <div class="mt-4 pt-4 space-y-4 border-t-4 border-gray-200">
        <user-timer
          v-for="(timer, ti) in timers"
          :key="ti"
          :label="`Timer #${ti + 1}`"
          :minutes="timer.minutes"
          :seconds="timer.seconds"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserTimer from '@/components/UserTimer.vue';
import UiInputNumber from '@/components/UiInputNumber.vue';
import UiButton from '@/components/UiButton.vue';

export default {
  name: 'App',
  components: {
    UserTimer,
    UiInputNumber,
    UiButton,
  },
  data() {
    return {
      timers: [],

      newTimerMinutes: 0,
      newTimerSeconds: 0,
    };
  },
  methods: {
    addTimer() {
      if (this.newTimerMinutes || this.newTimerSeconds) {
        if (this.timers.length < 50) {
          this.timers.push({
            minutes: this.newTimerMinutes,
            seconds: this.newTimerSeconds,
          });
        } else {
          alert('You have too many timers at this moment. Delete some first.');
        }
      }
    },
  },
};
</script>

<style>
</style>
