<script lang="ts">
  import TopicCard from "../components/TopicCard.vue";
  import { defineComponent } from "@vue/runtime-core";
  
  export default defineComponent({
      components: {
        TopicCard
      },
      data() {
        return {
          retContentDevice:[{title:'', url:''}] as LinkContent[],
          retContentConcern:[{title:'', url:''}] as LinkContent[],
          retContentPages:[{_id:'', device:'', goal:'', issue:'', 
            content: {title:'', subtitle:'', diff:'', para:''}
          }],
          dataFilter: {device:[''], concern:['']}
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
        async getFilteredContent(device: string, concern: string){
          let base: string = '';
          if (typeof import.meta.env.VITE_API_URL !== "undefined") {
            base = import.meta.env.VITE_API_URL.toString();
          }
          let data = {"concern": concern, "device": device};
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
          resp.json().then((data) => {
            out = data.message;
            this.retContentPages.join(data.message);
            console.log(out);
          });
        },
        updateFilter(name: string, type: string) {
          if (type == "d") {
            if (this.dataFilter.device.includes(name)) {
              this.dataFilter.device = this.dataFilter.device.splice(this.dataFilter.device.indexOf(name), 1);
            } else {
              this.dataFilter.device.push(name);
            }
          } 
          if (type == "c") {
            if (this.dataFilter.concern.includes(name)) {
              this.dataFilter.concern = this.dataFilter.concern.splice(this.dataFilter.concern.indexOf(name), 1);
            } else {
              this.dataFilter.concern.push(name);
            }
          }
          this.retContentPages = [];  // reset the pages so you don't have infinite duplicate pages
          // Get all pages if the filters are empty
          if (this.dataFilter.device.length == 0 && this.dataFilter.concern.length == 0){
            for (var dev in this.retContentDevice) {
              for (var con in this.retContentConcern) {
                this.getFilteredContent(dev, con);
              }
            }
          } else {
            // Get pages if only concern filters have been applied
            if (this.dataFilter.device.length == 0) {
              for (var dev in this.retContentDevice) {
                for (var con in this.dataFilter.concern) {
                  this.getFilteredContent(dev, con);
                }
              }
            } else {
              // Get all device-filtered content
              for (var dev in this.dataFilter.device) {
                for (var con in this.retContentConcern) {
                  this.getFilteredContent(dev, con);
                }
              }
            }
            // Get pages if only device filters have been applied
            if (this.dataFilter.concern.length == 0 ) {
              for (var con in this.retContentConcern) {
                for (var dev in this.dataFilter.device) {
                  this.getFilteredContent(dev, con);
                }
              }
            } else {
              // Get all concern-filtered content
              for (var con in this.dataFilter.concern) {
                for (var dev in this.retContentDevice) {
                  this.getFilteredContent(dev, con);
                }
              }
            }
            
          }
        }
          
      },
      beforeMount() {
        this.getContentsDevices();
        this.getContentsConcerns();
        // Get all possible pages; this almost definitely results in duplicate items
        for (var dev in this.retContentDevice) {
          for (var con in this.retContentConcern) {
            this.getFilteredContent(dev, con);
          }
        }
        
      }
  })
</script>

<template>
<div class="w-full h-screen inline-flex">
<!-- Filters -->
  <div class="w-1/3 p-2 h-1/2 m-1 mt-10 rounded bg-darkorange text-white">
    <h1 class="font-bold">Filters</h1>
    <h2 class="font-bold ml-2 overflow-y-auto text-left">Device</h2>
      <div v-for="c in retContentDevice">
        <label class="ml-2 text-left">
          <input onclick="updateFilter(c.title, 'd')" type="checkbox" class="float-left form-checkbox checked: bg-darkblue">
          <p class="ml-2 float-left">{{c.title}}</p>
        </label> 
      </div>
    <h2 class="font-bold ml-2 text-left mt-4">Concern</h2>
      <div v-for="c in retContentConcern">
          <label class="ml-2 text-left">
            <input onclick="updateFilter(c.title, 'c')" type="checkbox" class="float-left form-checkbox checked: bg-darkblue">
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

<style scoped>
</style>