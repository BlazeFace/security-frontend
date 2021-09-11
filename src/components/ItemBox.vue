<template>
  <button  v-on:click ="onClick(content?.title)" v-bind:class="clicked ? 'bg-hokiestone rounded-xl p-5' : 'bg-maroon rounded-xl p-5'">
    <img class="mx-auto" height="150" width="100" :src=content?.url alt="phone icon">
    <p class="mt-8 text-white text-sm">{{ content?.title }}</p>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'item-box',
  props: {
    content: Object,
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
