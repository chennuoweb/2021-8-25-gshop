// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 组件
// import MSite from '../pages/MSite/MSite.vue';
// import Order from '../pages/Order/Order.vue';
// import Profile from '../pages/Profile/Profile.vue';
// import Search from '../pages/Search/Search.vue';

// 按条件加载路由
const MSite = () => import('../pages/MSite/MSite.vue');
const Order = () => import('../pages/Order/Order.vue');
const Profile = () => import('../pages/Profile/Profile.vue');
const Search = () => import('../pages/Search/Search.vue');

import Login from '../pages/Login/Login.vue';
import Shop from '../pages/Shop/Shop.vue';
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue';
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue';
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
  // 所有路由
  routes:[
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: MSite,
      // 此时的Msite等都是返回路由组件的函数，只有请求对应的路由路径时(第一次)才会执行此函数并加载路由组件
      // 标识此路由是否显示FooterGuide
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/Info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    }
  ]
})