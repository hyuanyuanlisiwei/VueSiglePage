/**
 * Created by hyylsw on 2017/6/14.
 */
import Login from '@/views/login/login'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/layout'
import Plan from '@/views/plan/plan'
import store from '@/store/index'
const initRoutes=[
    {
        path:'/',
        component:Login
    }
    // {
    //     path:'/plan',
    //     component:Layout,
    //     redirect:'/plan/index',
    //     children:[{
    //         path:"index",component:Plan
    //     }]
    // }
]


export default new VueRouter({
    mode:"history",
    routes:initRoutes
})

function getNewRoutes() {
    let menus=store.getters.getUserMenus;
    let routes=[];
    console.log("----menus----");
    console.log(menus);
    return routes;
}


