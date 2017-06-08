/**
 * Created by hyylsw on 2017/6/8.
 */
import Vue from 'vue'
import axios from 'axios'
Vue.use(axios);

var instance=axios.create({
    baseURL:'https://cnodejs.org/api/v1'
})
export default {
    getTopics:function (url,success) {
        instance.get(url)
            .then((res)=>{
                success(res.data.data);
            }).catch((error)=>{
                console.log(error);
            })
    }
}