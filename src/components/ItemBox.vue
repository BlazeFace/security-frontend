<template>
  <div class="bg-blue-800 rounded-xl p-5">
    <img class="mx-auto" height="150" width="100" :src=content.url alt="phone icon">
    <p class="mt-8 text-white text-sm">{{ content.title }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'item-box',
  props: {
    content: Object
  }
})
</script>

<style scoped>

</style>
