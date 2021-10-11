<template>
  <router-link v-bind:to='href'>
    <button class="block max-w-md px-4 py-2 bg-burntorange hover:bg-darkorange rounded-lg disabled:opacity-50 disabled:cursor-not-allowed border-darkorange">{{title}}</button>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'base-button',
  props: {
    title: String,
    href: String
  },
  data() {
    return {
    }
  },
  methods: {
  
  }
})
</script>

<style scoped>

</style>