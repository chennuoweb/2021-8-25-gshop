// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 组件
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
  // 所有路由
  routes:[
    {
      path: '/msite',
      component: MSite,
      meta: {
        
      }
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile,
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/profile'
    }
  ]
})