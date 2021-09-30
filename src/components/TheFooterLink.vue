<template>
    <router-link v-bind:to='content?.url'>{{ content?.title }}</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'the-footer-link',
  props: {
    content: Object,
  },
  data() {
    return {
      clicked: false
    }
  },
})
</script>

<style scoped>

</style>