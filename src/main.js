import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// Import vuex to be used on this application
import Vuex from 'vuex'

import routes from '@/routes'
// Then import store to be used
import stores from '@/stores'

Vue.use(VueRouter)
// Register Vuex to be used on global Vue instance
Vue.use(Vuex)
const router = new VueRouter({ routes })
const store = new Vuex.Store(stores)

Vue.config.productionTip = false

// Use router in the main vuejs app
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
