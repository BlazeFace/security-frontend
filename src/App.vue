<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { defineComponent } from 'vue';

declare global {
  interface Page {
    _id: string,
    device: string,
    goal: string,
    privacy: string,
    issue: string,
    content: {
      title: string,
      subtitle: string,
      diff: string,
      para: string
    }
  }
}
class State {
  pages: Page[];
  state: string;
   constructor() {
     this.pages = [];
     this.state = "d"
  }
}

export default defineComponent({
  data() {
    return {
      retContentPages:[{_id:'', device:'', goal:'', issue:'',
        content: {title:'', subtitle:'', diff:'', para:''}
      }] as Page[]
    };
  },
  methods: {
    getContentPages() {
      getTestContent(): void {
        let base: string = '';
        if(typeof import.meta.env.VITE_API_URL !== "undefined") {
          base = import.meta.env.VITE_API_URL.toString();
        }
        fetch(base+"content/test-content").then((result) => result.json()).then((data) => {
          this.retContentPages = {data.message};
          console.log(data);
        });
      }
    },
    beforeMount() {
      this.getTestContent();
    }
  }
});

// export default defineComponent({
//     components: {
//     },
//     data() {
//       return {
//         retContentDevice:[{title:'', url:''}] as LinkContent[],
//         retContentConcern:[{title:'', url:''}] as LinkContent[],
//         retContentPages:[{_id:'', device:'', goal:'', issue:'', 
//           content: {title:'', subtitle:'', diff:'', para:''}
//         }]
//       };
//     },
//     methods: {
//       getContentsDevices(): void {
//         let base: string = '';
//         if(typeof import.meta.env.VITE_API_URL !== "undefined") {
//           base = import.meta.env.VITE_API_URL.toString();
//         }
//         fetch(base+"devices").then((result) => result.json()).then((data) => this.retContentDevice = data.message.devices);
//       },
//       getContentsConcerns(): void {
//         let base: string = '';
//         if(typeof import.meta.env.VITE_API_URL !== "undefined") {
//           base = import.meta.env.VITE_API_URL.toString();
//         }
//         fetch(base+"concerns").then((result) => result.json()).then((data) => this.retContentConcern = data.message.devices);
//       },
//       getTestContent(): void {
//         let base: string = '';
//         if(typeof import.meta.env.VITE_API_URL !== "undefined") {
//           base = import.meta.env.VITE_API_URL.toString();
//         }
//         fetch(base+"content/test-content").then((result) => result.json()).then((data) => {
//           // this.retContentConcern = data.message.devices;
//           console.log(data);
//         });
//       }
//     },
//     beforeMount() {
//       this.getContentsDevices();
//       this.getContentsConcerns();
//       this.getTestContent();
//     }
// })
</script>

<template>
  <TheHeader></TheHeader>
  <RouterView></RouterView>
  <TheFooter></TheFooter>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
