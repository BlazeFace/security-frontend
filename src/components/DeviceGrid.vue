<template>
  <div class="content-center grid gap-5 sm:grid-cols-2 lg:grid-cols-3 p-2">
    <item-box v-if="state.state === 'd'" @clicked="onClickChildDevices" v-for="content in retContentDevice" :content= content />
    <item-box v-if="state.state === 'c'" @clicked="onClickChildDevices" v-for="content in retContentConcern" :content= content />
  </div>
  <button v-on:click ="onClick()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Choose These Devices</button>
</template>

<script lang="ts">
declare global {
  interface BoxContent {
    title: string,
    url: string
  }
}

class State {
  devices: Map<string, boolean>;
  concerns: Map<string, boolean>;
  state: string
   constructor() {
     this.devices = new Map<string, boolean>();
     this.concerns = new Map<string, boolean>();
     this.state = "d"
   }

}

import { defineComponent } from 'vue';
import ItemBox from './ItemBox.vue'

export default defineComponent({
    components: {
      ItemBox
    },
    data() {
      return {
        retContentDevice:[{title:'', url:''}] as BoxContent[],
        retContentConcern:[{title:'', url:''}] as BoxContent[],
        state: new State()
      };
    },
    methods: {
      getContentsDevices(): void {
        let base: string = '';
        if(typeof import.meta.env.VITE_API_URL !== "undefined") {
          base = import.meta.env.VITE_API_URL.toString();
        }
        fetch(base+"devices").then((result) => result.json()).then((data) => this.retContentDevice = data.message.devices);
      },
      getContentsConcerns(): void {
        let base: string = '';
        if(typeof import.meta.env.VITE_API_URL !== "undefined") {
          base = import.meta.env.VITE_API_URL.toString();
        }
        fetch(base+"concerns").then((result) => result.json()).then((data) => this.retContentDevice = data.message.devices);
      },
      onClickChildDevices(value:string){
        if(this.state.devices.has(value)) {
          this.state.devices.delete(value)
        }
        else{
          this.state.devices.set(value, true);
        }
        console.log(this.state.devices)
      },
      onClick(){
        if(this.state.state === 'd'){
          this.state.state = 'c';
        }
        else {
          this.state.state = "r";
        }
      }
    },
    beforeMount() {
      this.getContentsDevices();
    }
})
</script>

<style scoped>

</style>
