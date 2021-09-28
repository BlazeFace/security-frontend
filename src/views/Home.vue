<template>
  <div class="lg:px-8 h-screen p-2">
    <div class="p-4 vertical-center">
      <div class="float-left w-1/2 p-4 bg-maroon rounded-2xl text-white">
        <h1 class="lg font-bold p-2 base text-left">Improve Your Digital Security</h1>
        <div class="text-left p-1">
          <p class="py-2">Prevent websites from collecting information on you and keep your accounts and devices safe from cyberattacks.</p>
          <p class="py-2">Don't know where to start? Take our quiz to receive personalized recommendations.</p>
        </div>
        <div class="inline-flex gap-4">
          <a href="/topics-list"> <BaseButton title="Browse Topics"></BaseButton> </a>
          <a href="/quiz"> <BaseButton title="Take Quiz"></BaseButton> </a>
        </div>
      </div>
      <div class="float-right w-1/2">
        <img src="../assets/lock.png" class="center max-h-80 min-h-40 p-10">
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../components/BaseButton.vue";
import { RouterLink } from 'vue-router';

const navigation = [
  { name: 'Home', href: '/'},
  { name: 'Topics', href: '/topics-list'},
  { name: 'Quiz', href: '/quiz'},
  { name: 'About Us', href: '/about'},
]
</script>

<style scoped>

.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 75%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

h1 {
  font-size: xx-large;
}

p {
  font-size: large;
}
</style>
