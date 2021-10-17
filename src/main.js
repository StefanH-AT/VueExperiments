import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import NavBar from './components/TheNavBar.vue'

const routes = [
    { path: "/", component: () => import("./Home.vue") },
    { path: "/DemoSteppedPages", component: () => import("./DemoSteppedPages.vue") }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

const app = createApp({
    components: {
        NavBar
    }
});

app.use(router);
app.mount('#app');
