import Vue from "vue"
import VueRouter from "vue-router"
//import MainPage from "@/pages/MainPage.vue";
//import CarPage from "@/pages/CarPage.vue";
//import CarPartPage from "@/pages/CarPartPage.vue";
import CountryPage from "@/pages/CountryPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import CarPageV from "@/pages/CarPageV.vue";
import CarPartPageV from "@/pages/CarPartPageV.vue";
import MainPagwV from "@/pages/MainPagwV.vue";
import store from "@/store"


Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        component: MainPagwV,
        meta: {requiresAuth: true}
    },
    {
        path: '/cars',
        component: CarPageV,
        meta: {requiresAuth: true}
    },
    {
        path: '/carpart',
        component: CarPartPageV,
        meta: {requiresAuth: true}
    },
    {
        path: '/country',
        component: CountryPage,
        meta: {requiresAuth: true}
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
router.beforeEach((to, from, next) => {
  const token = store.state.login.token;
  if (to.meta.requiresAuth && !token) {
      next('/login')
  } else {
      next()
  }
})

export default router;