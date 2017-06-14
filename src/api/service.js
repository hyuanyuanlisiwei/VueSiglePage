/**
 * Created by hyylsw on 2017/6/14.
 */
import Vue from 'vue'
import axios from 'axios';
Vue.use(axios);
Vue.prototype.axios=axios;
const service=axios.create({
    baseURL:'http://localhost:9000'
});
export default  service;
