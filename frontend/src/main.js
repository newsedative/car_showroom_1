import Vue from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import router from '@/router/router'
import axios from "@/plugins/axios"
import store from '@/store'
import vuetify from './plugins/vuetify'
import directives from '@/directives'

Vue.config.productionTip = false

Vue.use(axios)

components.forEach(component => {
    Vue.component(component.name, component)
})

directives.forEach(directive => {
  Vue.directive(directive.name, directive)
})

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')

