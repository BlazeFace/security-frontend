import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Topics from './views/Topics.vue'
import Quiz from './views/Quiz.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/topics-list', component: Topics },
    { path: '/quiz', component: Quiz }

]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

createApp(App).use(router).mount('#app')
