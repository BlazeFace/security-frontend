<template>
  <div class="lg:px-8 h-screen p-2">
    <div class="p-4 align-middle">
      <div class="float-left w-1/2 p-4 content-center bg-maroon rounded-2xl text-white">
        <h1 class="lg font-bold pt-1 pb-1 base">Improve Your Digital Security</h1>
        <div class="text-left p-1">
          <p class="py-2">Prevent websites from collecting information on you and keep your accounts and devices safe from cyberattacks.</p>
          <p class="py-2">Don't know where to start? Take our quiz to receive personalized recommendations.</p>
        </div>
        <div class="inline-flex gap-4">
          <BaseButton href="/topics-list" title="Browse Topics"></BaseButton>
          <BaseButton href="/quiz" title="Take Quiz"></BaseButton>
        </div>
      </div>
    </div>
    <div class="float-right w-1/2 p-4 align-middle">
      <img src="../assets/lock.png" class="p-10 inline-flex">
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../components/BaseButton.vue";
import { RouterLink } from 'vue-router';
</script>

<style scoped>

</style>
