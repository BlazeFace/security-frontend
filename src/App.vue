<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { defineComponent } from 'vue';

declare global {
  interface Page {
    _id: string,
    device: string,
    goal: string,
    privacy: string,
    issue: string,
    content: {
      title: string,
      subtitle: string,
      diff: string,
      para: string
    }
  }
}
class State {
  pages: Page[];
  state: string;
   constructor() {
     this.pages = [];
     this.state = "d"
  }
}

</script>

<template>
  <TheHeader></TheHeader>
  <RouterView></RouterView>
  <TheFooter></TheFooter>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
