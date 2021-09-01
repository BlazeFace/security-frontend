<template>
  <div class="bg-red-500 rounded-xl p-5">
    <p class="mt-8 text-white text-sm">{{ content }}</p>
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
