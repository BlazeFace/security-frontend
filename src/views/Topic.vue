<script lang="ts">
import { defineComponent } from 'vue';
  export default defineComponent({
  name: 'topic-card',
  props: {
    data: Object,
  },
  data() {
    return {
      page:{_id:'', device:'', goal:'', issue:'', 
            content: {title:'', subtitle:'', diff:'', para:''}
      }
    }
  },
  methods: {
    getPage(title: any) {
      let base: string = '';
      if(typeof import.meta.env.VITE_API_URL !== "undefined") {
        base = import.meta.env.VITE_API_URL.toString();
      }
      fetch(base+"content/"+title).then((result) => result.json()).then((data) => this.page = data.message);
    },
    beforeMount() {
      let pageID = this.$route.params._id; // I don't think this works, and I don't know why
      console.log(pageID);
      this.getPage(pageID);
    }
  }
})
</script>

<template>
  <div class="lg:px-8 h-auto">
    <div class="text-left p-2">
      <h1 class="font-bold">{{data?.content.title}}</h1>
      <h2>{{data?.content.subtitle}}</h2>
    </div>
    <div class="text-left w-1/3 p-1">
      <p>Difficulty: {{data?.content.diff}}</p>
      <p>Concern: {{data?.issue}}</p>
      <p>Device: {{data?.device}}</p>
    </div>
    <div class="text-left p-1">
      <p>{{data?.content.para}}</p>
    </div>
  </div>
</template>

<style>
</style>