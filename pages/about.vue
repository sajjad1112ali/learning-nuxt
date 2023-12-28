<template>
  <div class="max-w-xl">
    <br>
    <br>
    <br>
    <VueDatePicker v-model="date" auto-apply placeholder="Select Date" :enable-time-picker="false"></VueDatePicker>
  <p>{{ date }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref();
</script>