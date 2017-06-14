/**
 * Created by hyylsw on 2017/6/14.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router/index'
import Plan from '@/views/plan/plan'
import Layout from '@/views/layout/layout'

Vue.use(Vuex);
const store=new Vuex.Store({
    state:{
        userInfo:{},
        allMenus:[
            {
                path:'/plan',
                component:Layout,
                redirect:"/plan/index",
                children:[
                    {path:"index",component:Plan}
                ]
            }

        ]
    },
    mutations:{
        saveUserInfo(state,userInfo){
            state.userInfo=userInfo;
            let permissions=userInfo.permissions;
            let routes=[];
            for(let permission of permissions){
                for(let menu of state.allMenus){
                    if(menu['path']==permission['url']){
                        routes.push(menu);
                    }
                }
            }
            router.addRoutes(routes);
        }
    },
    getters:{
        getUserInfo:state=>{
            return state.userInfo;
        },
        getUserMenus:state=>{
            return state.userInfo.permissions;
        }
    }
});
export default store;

