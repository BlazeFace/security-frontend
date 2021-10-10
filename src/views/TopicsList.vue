<script setup lang='ts'>
  import TopicCard from "../components/TopicCard.vue"
</script>

<template>
<div class="w-full h-screen inline-flex">
<!-- Filter -->
  <div class="w-1/3 p-2 h-1/2 m-1 rounded bg-maroon text-white">
    <h1 class="font-bold">Filters</h1>
    <h2 class="font-bold">Device</h2>
      <div class="">

      </div>
    <h2 class="font-bold">Concern</h2>
      <div class="">

      </div>
  </div>
  <!-- Content -->
  <div class="w-2/3 m-1 p-2 h-screen overscroll-y-auto float-right bg-white rounded text-darkgrey">
    <h1 class="font-bold">Topics</h1>
    <div class="">
      <TopicCard v-for="topic in topics" :data=topic></TopicCard>
    </div>
  </div>
</div>
</template>

<script lang="ts">

var topics = [
  {
    _id: "test",
    device: "iPhone",
    goal: "Setup 2-Factor Authentication",
    issue: "Privacy",
    content: {
      title: "Title",
      subtitle: "Subtitle",
      diff: "Easy",
      para: "Content"
    }
  },
  {
    _id: "test",
    device: "iPhone",
    goal: "Setup 2-Factor Authentication",
    issue: "Privacy",
    content: {
      title: "Title",
      subtitle: "Subtitle",
      diff: "Easy",
      para: "Content"
    }
  },
]
</script>

<style scoped>
</style>