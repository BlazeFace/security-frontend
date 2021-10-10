<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from './BaseButton.vue';

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

<template>
  <div class="h-auto w-full p-1 m-1 rounded-md bg-darkblue text-white border-2 border-darkgrey">
    <img>
    <h1>{{data?.content.title}}</h1>
    <h2>{{data?.content.subtitle}}</h2>
    <h3>{{data?.diff}}</h3>
    <h3>{{data?.diff}}</h3>
    <BaseButton title="Learn More" href="/test"></BaseButton>
  </div>
</template>

<style scoped>
</style>