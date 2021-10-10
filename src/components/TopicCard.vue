<script setup lang="ts">
import { defineComponent } from 'vue';
import BaseButton from './BaseButton.vue';
</script>

<template>
  <div class="h-auto w-full p-2 m-1 rounded-md bg-maroon hover:border-burntorange text-white border-2 border-darkgrey inline-flex">
    <div class="text-left w-1/3 p-1">
      <h2 class="font-bold">{{data?.content.title}}</h2>
      <h1>{{data?.goal}}</h1>
    </div>
    <div class="text-left w-1/3 p-1">
      <p>Difficulty: {{data?.content.diff}}</p>
      <p>Concern: {{data?.issue}}</p>
      <p>Device: {{data?.device}}</p>
    </div>
    <div class="w-1/3 px-3 self-center">
      <BaseButton class="m-auto" title="Learn More" :href=data?._id></BaseButton>
    </div>
  </div>
</template>

<script lang="ts">
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
.h1 {
  font: bold;
}
</style>