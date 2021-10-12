<template>
  <div class="flex justify-center items-center mt-52">
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="identity-input mb-4">
          <label
              for="identity"
              class="block text-gray-700 text-sm font-bold mb-2"
          >
            Length</label
          >
          <input
              id="identity"
              class="shadow appearance-none borderrounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              aria-describedby="emailHelp"
              v-model.number="length"
          />
        </div>

        <div class=" mb-6">
          <label for="jack">A-Z </label>
          <input type="checkbox" id="cap" value="upper" v-model="passOptions">
        </div>
        <div class=" mb-6">
          <label for="john">a-z </label>
          <input type="checkbox" id="lower" value="lower" v-model="passOptions">
        </div>
        <div class=" mb-6">
          <label for="mike">0-9 </label>
          <input type="checkbox" id="nums" value="num" v-model="passOptions">
        </div>
        <div class=" mb-6">
          <label for="mike">!@#$%^&* </label>
          <input type="checkbox" id="spec-chars" value="spec" v-model="passOptions">
        </div>
      </form>
      <h1> {{ password }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  data() {
    return {
      length: 0,
      passOptions: [] as string[],
      password: ""
    }
  },
  computed: {
    compPassword: {
      async get (){
        let pass = ''
        let base: string = '';
        if(typeof import.meta.env.VITE_API_URL !== "undefined") {
          base = import.meta.env.VITE_API_URL.toString();
        }
        const data = {
          length: this.length,
          numbers: this.passOptions.indexOf("num") > -1,
          lowerCase: this.passOptions.indexOf("lower") > -1,
          upperCase: this.passOptions.indexOf("upper") > -1,
          specChar: this.passOptions.indexOf("spec") > -1,
        };

        const resp = await fetch(base+"password", {
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
        resp.json().then((data) => pass = data.message);
        console.log(pass)
        return pass;
      },
      set(pass){
        this.password = pass
      }
    }
  }
})
</script>

<style scoped>

</style>