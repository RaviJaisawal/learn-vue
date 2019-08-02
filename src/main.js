import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(Vuetify, {
  iconfont: 'mdi' 
})

const router = new VueRouter({
  routes: routes,
  mode : 'history'
})


new Vue({
  router  :router,
  render: h => h(App),
}).$mount('#app')
