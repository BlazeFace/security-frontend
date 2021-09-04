<template>
  <div class="bg-red-500 rounded-xl p-5">
    <img src={{content.url}} alt="phone icon">
    <p class="mt-8 text-white text-sm">{{ content.title }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'item-box',
  props: {
    content: String
  }
}
</script>

<style scoped>

</style>
