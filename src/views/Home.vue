<template>
  <div class="h-auto p-2 bg-white grid-rows-2 lg:px-10 md:grid-cols-2 md:grid-flow-col md:inline-grid md:grid-rows-1">
    <div class="p-4 row-start-2  md:row-start-1">
      <div class="p-4 bg-maroon rounded-2xl text-white">
        <h1 class="font-bold p-2 text-left">Improve Your Digital Security</h1>
        <div class="text-left p-1">
          <p class="py-2">Prevent websites from collecting information on you and keep your accounts and devices safe from cyberattacks.</p>
          <p class="py-2">Don't know where to start? Take our quiz to receive personalized recommendations.</p>
        </div>
        <div class="inline-flex gap-4">
          <BaseButton title="Browse Topics" href="/topics-list"></BaseButton>
          <BaseButton title="Take Quiz" href="/quiz"></BaseButton>
        </div>
      </div>
    </div>
  <div class="p-4 row-span-2 md:row-span-1">
    <img src="../assets/lock.png" class="md:min-h-40 max-h-30">
  </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../components/BaseButton.vue";

</script>

<style scoped>

h1 {
  font-size: xx-large;
}

p {
  font-size: large;
}
</style>
