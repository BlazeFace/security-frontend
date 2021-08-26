import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter,createWebHashHistory} from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

createApp(App).use(router).mount('#app')
