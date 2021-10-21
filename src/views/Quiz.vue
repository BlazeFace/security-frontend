<script setup lang='ts'>
  import QuizQuestion from '../components/QuizQuestion.vue'
  import DeviceGrid from '../components/DeviceGrid.vue'

  const questions = [
    {'title': 'example question', 'desc': 'description 1'},
    {'title': 'another question', 'desc': 'description 2'},
    {'title': 'one more question', 'desc': 'description 3'},
  ]
</script>

<template>
  <div class="lg:px-8 h-auto">
    <br/>
    <DeviceGrid></DeviceGrid>
    <br/>
    <div class="py-2" v-for="question in questions">
        <QuizQuestion 
            v-bind:question="question.title"
            v-bind:description="question.desc"></QuizQuestion>
    </div>
  </div>
  
</template>

<style scoped>

</style>

<script lang="ts">
export default {
  name: "Quiz"
}
</script>
