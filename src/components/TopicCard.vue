<script setup lang="ts">
import { defineComponent } from 'vue';
import BaseButton from './BaseButton.vue';
</script>

<template>
  <div class="h-auto w-full p-1 m-1 rounded-md bg-maroon hover:border-burntorange text-white border-2 border-darkgrey">
    <img>
    <h1>{{data?.goal}}</h1>
    <h2>{{data?.content.title}}</h2>
    <p>{{data?.content.diff}}</p>
    <p>{{data?.issue}}</p>
    <p>{{data?.device}}</p>
    <div>
      <BaseButton title="Learn More" :href=data?._id></BaseButton>
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