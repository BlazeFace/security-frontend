<template>
  <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 p-2">
    <item-box v-for="content in retContent" :content= content />
  </div>
</template>

<script lang="ts">

interface BoxContent {
  title: string,
  url: string
}

import { defineComponent } from 'vue';
import ItemBox from './ItemBox.vue'

export default defineComponent({
    components: {
      ItemBox
    },
    data() {
      return {
        retContent:[{title:'', url:''}] as BoxContent[]
      };
    },
    methods: {
      getContents(): void {
        let base: string = '';
        if(typeof import.meta.env.VITE_API_URL !== "undefined") {
          base = import.meta.env.VITE_API_URL.toString();
        }
        fetch(base+"devices").then((result) => result.json()).then((data) => this.retContent = data.message.devices);
      }
    },
    beforeMount() {
      this.getContents();
    }
})
</script>

<style scoped>

</style>
