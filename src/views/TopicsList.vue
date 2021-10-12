<script setup lang="ts">
  import TopicCard from "../components/TopicCard.vue"
  import { defineComponent } from "@vue/runtime-core";
</script>

<template>
<div class="w-full h-screen inline-flex">
<!-- Filter -->
  <div class="w-1/3 p-2 h-1/2 m-1 mt-10 rounded bg-darkorange text-white">
    <h1 class="font-bold">Filters</h1>
    <h2 class="font-bold ml-2 overflow-y-auto text-left">Device</h2>
      <div v-for="c in retContentDevice">
        <label class="ml-2 text-left">
          <input type="checkbox" class="float-left form-checkbox checked: bg-darkblue">
          <p class="ml-2 float-left">{{c.title}}</p>
        </label> 
      </div>
    <h2 class="font-bold ml-2 text-left mt-4">Concern</h2>
      <div v-for="c in retContentConcern">
          <label class="ml-2 text-left">
            <input type="checkbox" class="float-left form-checkbox checked: bg-darkblue">
            <span class="ml-2 float-left">{{c.title}}</span>
          </label> 
      </div>
  </div>
  <!-- Content -->
  <div class="w-2/3 m-1 p-2 h-screen overflow-y-auto float-right bg-white rounded text-darkgrey">
    <h1 class="font-bold">Topics</h1>
    <div class="">
      <TopicCard v-for="topic in retContentPages" :data=topic></TopicCard>
    </div>
  </div>
</div>
</template>

<script lang='ts'>

  var topics = [
   {
     _id: "test",
     device: "iPhone",
     goal: "Setup 2-Factor Authentication",
     issue: "Privacy",
     content: {
       title: "Title",
       subtitle: "Subtitle",
       diff: "Easy",
       para: "Content"
     }
   },
   {
     _id: "test2",
     device: "Apple Computer",
     goal: "Disable Cookies",
     issue: "Privacy",
     content: {
       title: "Title",
       subtitle: "Subtitle",
       diff: "Easy",
       para: "Content"
     }
   },
   {
     _id: "test3",
     device: "Windows",
     goal: "Create Safer Passwords",
     issue: "Password Security",
     content: {
       title: "Title",
       subtitle: "Subtitle",
       diff: "Easy",
       para: "Content"
     }
   },
  ]

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
        getContentsPages(): void {
          let base: string = '';
          if(typeof import.meta.env.VITE_API_URL !== "undefined") {
            base = import.meta.env.VITE_API_URL.toString();
          }
          fetch(base+"content/test-content").then((result) => result.json()).then((data) => {
            this.retContentPages = data.message.pages;
            console.log(data);
          });
        },
        async getFilteredContent(){
          let base: string = '';
          if (typeof import.meta.env.VITE_API_URL !== "undefined") {
            base = import.meta.env.VITE_API_URL.toString();
          }
          let data = {"concern": "placeholder", "device": "placeholder"}
          const resp = await fetch(base + "content", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
          let out = ""
          resp.json().then((data) => out = data.message);
        }
      },
      beforeMount() {
        this.getContentsDevices();
        this.getContentsConcerns();
        // this.getContentsPages();
        // this.retContentPages = topics;
        this.getFilteredContent();
      }
  })
</script>

<style scoped>
</style>