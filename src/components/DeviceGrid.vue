<template>
  <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 p-2 ">
    <item-box :content= retContent />
    <item-box :content= retContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemBox from './ItemBox.vue'

export default defineComponent({
    components: {
      ItemBox
    },
    data() {
      return {
        retContent: ''
      };
    },
    methods: {
      getContents(): void {
        fetch("/api/content/test-content").then((result) => result.json()).then((data) => this.retContent = data.message.content);
      }
    },
    beforeMount() {
      this.getContents();
    }
})
</script>

<style scoped>

</style>
