<template>
  <div>
    <img>
    <h1>{{data?.content.title}}</h1>
    <h2>{{}}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButtonVue from './BaseButton.vue';

export default defineComponent({
  name: 'topic-card',
  props: {
    data: Object,
  },
  data() {
    return {
      clicked: false
    }
    },
  methods: {
    onClick (event: string) {
      this.clicked = !this.clicked
      this.$emit("clicked", event)
    }
  }
})
</script>

<style scoped>
</style>