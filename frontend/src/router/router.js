import Vue from "vue"
import VueRouter from "vue-router"
import MainPage from "@/pages/MainPage.vue";
import CarPage from "@/pages/CarPage.vue";
import CarPartPage from "@/pages/CarPartPage.vue";
import CountryPage from "@/pages/CountryPage.vue";
import LoginPage from "@/pages/LoginPage.vue";


Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/cars',
        component: CarPage
    },
    {
        path: '/carpart',
        component: CarPartPage
    },
    {
        path: '/country',
        component: CountryPage
    },
    {
        path: '/login',
        component: LoginPage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;