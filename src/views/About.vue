<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>
<script>
  import Vue from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

  export default {
    name: 'about',
    components: {
      HelloWorld,
    },
    mounted() {
      console.log('mounted')
    }
  };
</script>
