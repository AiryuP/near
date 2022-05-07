import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isLogin: true
    },
    children:[
      {
        path: '/meter',
        name: 'Meter',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/Meter.vue')
      },
      // 系统管理
      //   菜单管理
      {
        path: '/system/menuControl',
        name: 'menuControl',
        component: () => import(/* webpackChunkName: "system" */ '../views/system/menus/index.vue')
      },
      {
        path: '/wares',
        name: 'Wares',
        component: () => import(/* webpackChunkName: "wares" */ '../views/wares/index.vue')
      }
    ],
    redirect: '/meter'
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      isLogin: false
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router
