import Vue from 'vue'
import App from './App.vue'

// Import vue-router to be used on this application
import VueRouter from 'vue-router'

// then, import routes to be used with vue-router
import routes from '@/routes'

// Register vue-router to global vue so it is accessible
// on all vue components
Vue.use(VueRouter)

// Create router object
const router = new VueRouter({ routes })

Vue.config.productionTip = false

// Use router in the main vuejs app
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
