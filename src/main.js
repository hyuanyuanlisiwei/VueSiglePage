import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import axios from 'axios'
import routes from './config/routes'
import api from './config/api'

Vue.use(axios);
Vue.use(VueRouter);
Vue.prototype.$api=api


const router=new VueRouter({
    mode:'history',
    routes
});
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
