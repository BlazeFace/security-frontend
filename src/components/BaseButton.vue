<template>
  <button class="block max-w-sm px-4 py-2 bg-burntorange hover:bg-darkorange rounded-lg disabled:opacity-50 disabled:cursor-not-allowed border-darkorange">{{title}}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'base-button',
  props: {
    title: String
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