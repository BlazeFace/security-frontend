<template>
  <Disclosure as="nav" class="bg-burntorange" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-darkorange focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="float-left items-center flex-shrink-0 flex text-white">
            <h1 class="font-bold">VT Digital Security Planner</h1>
            <!-- Logo Here -->
          </div>
          <div class="hidden sm:block sm:ml-6">
            <!-- <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-darkorange text-white' : 'text-gray-100 hover:bg-darkorange hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div> -->
            <div class="flex space-x-4">
              <a v-for="item in navigation" :title="item.name" :href="item.href" :class="[item.name == $route.name ? 'bg-darkorange text-white' : 'text-gray-100 hover:bg-darkorange hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.name == $route.name ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.name == $route.name ? 'bg-darkorange text-white' : 'text-gray-100 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.name == $route.name ? 'page' : undefined">{{ item.name }}</a>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import { Router, RouterLink, routerViewLocationKey } from 'vue-router'

console.log(routerViewLocationKey.toString);
const navigation = [
  { name: 'Home', href: '/'},
  { name: 'Topics', href: '/topics-list'},
  { name: 'Quiz', href: '/quiz'},
  { name: 'About Us', href: '/about'},
]
console.log(routerViewLocationKey.toString())

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      navigation,
    }
  },
  data () {
  return {
    current: false,
    }
  }
}
</script>

<style>

</style>