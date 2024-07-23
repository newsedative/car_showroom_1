import Vue from "vue"
import VueRouter from "vue-router"
import MainPage from "@/pages/MainPage.vue";
import CarPage from "@/pages/CarPage.vue";


Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/cars',
        component: CarPage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;