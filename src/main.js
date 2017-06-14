import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Mock from 'mockjs'
import Vuex from 'vuex'

import App from './App'
import router from './router/index'
import store from './store/index'

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(axios);
Vue.use(VueRouter);
Vue.use(axios);
Vue.prototype.axios=axios

new Vue({
    el: '#app',
    router,
    store,
    render:h=>h(App)
})
