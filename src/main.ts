import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Topic from './views/Topic.vue'
import Quiz from './views/Quiz.vue'
import NotFound from './views/NotFound.vue'
import TopicsList from './views/TopicsList.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: "About Us", component: About },
    { path: '/topics-list', name: "Topics", component: TopicsList },
    { path: '/quiz', name: "Quiz", component: Quiz },
    { path: '/topic', name: "Example Topic", component: Topic},
    { path: '/:catchAll(.*)', component: NotFound }

]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

createApp(App).use(router).mount('#app')
