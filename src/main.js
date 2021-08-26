import Vue from 'vue';
import App from "./App.vue";
import router from './router/index';
import store from './store';

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import '../static/css/reset.css'
// 关闭生产提示
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
new Vue({
  el: '#app',
  render: h=> h(App),
  router,
  store
})