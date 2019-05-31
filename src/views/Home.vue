<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <a-button type="primary">Primary</a-button>
    <a-icon type="step-backward" />
    <a-date-picker />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { DatePicker } from 'ant-design-vue';
Vue.use(DatePicker);

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
  },
});
</script>
