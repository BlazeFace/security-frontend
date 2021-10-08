<script lang="ts">
import { defineComponent } from 'vue';
import TheFooterLink from './TheFooterLink.vue';

declare global {
  interface LinkContent {
    title: string,
    url: string
  }
}

class State {
  devices: string[];
  concerns: string[];
  pages: [];
  state: string;
   constructor() {
     this.devices = [];
     this.concerns = [];
     this.pages = [];
     this.state = "d"
   }
}
export default defineComponent({
    components: {
      TheFooterLink
    },
    data() {
      return {
        retContentDevice:[{title:'', url:''}] as LinkContent[],
        retContentConcern:[{title:'', url:''}] as LinkContent[],
        retContentPages:[{_id:'', device:'', goal:'', issue:'', 
          content: {title:'', subtitle:'', diff:'', para:''}
        }]
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
        fetch(base+"concerns").then((result) => result.json()).then((data) => this.retContentConcern = data.message.devices);
      },
      // getTestContent(): void {
      //   let base: string = '';
      //   if(typeof import.meta.env.VITE_API_URL !== "undefined") {
      //     base = import.meta.env.VITE_API_URL.toString();
      //   }
      //   fetch(base+"content/test-content").then((result) => result.json()).then((data) => {
      //     // this.retContentConcern = data.message.devices;
      //     console.log(data);
      //   });
      // }
    },
    beforeMount() {
      this.getContentsDevices();
      this.getContentsConcerns();
      // this.getTestContent();
    }
})
</script>

<template>
  <footer class="footer bg-burntorange relative pt-1 text-gray-100">
    <div class="container mx-auto px-6">

        <div class="flex-wrap mt-8 container mx-auto">
            <div class="md:mt-8 mt-0 px-8 flex flex-col md:flex-row justify-between">
                <div class="flex flex-col my-1 w-1/2 mx-auto">
                    <span class="font-bold uppercase mb-2">Main Navigation</span>
                    <span class="my-1"><a href="/" class="text-md hover:text-darkblue">Home</a></span>
                    <span class="my-1"><a href="/topics" class="text-md hover:text-darkblue">Topics</a></span>
                    <span class="my-1"><a href="/quiz" class="text-md hover:text-darkblue">Quiz</a></span>
                    <span class="my-1"><a href="/about" class="text-md hover:text-darkblue">About</a></span>
                </div>
                <div class="container w-1/2 my-1 mx-auto justify-between">
                    <span class="font-bold uppercase md:mt-0 mb-2">Topic Categories</span>
                    <!-- Load in different categories for topics -->
                    <div class="p-1 w-full mx-auto md:w-1/2">
                      <div v-for="content in retContentDevice" class="">
                        <TheFooterLink class="" :content= content></TheFooterLink>
                      </div>
                      <div v-for="content in retContentConcern" class="">
                        <TheFooterLink class="" :content= content></TheFooterLink>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto px-6">
        <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
                <span class="text-sm mb-2">
                    <span>Icons made by <a class="font-bold" href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> and </span>
                    <a class="font-bold" href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>
                    <span> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></span>
                </span>
            </div>
        </div>
    </div>
  </footer>
</template>

<style>
  footer {
    max-height: 10%;
    vertical-align: bottom;
  }
</style>