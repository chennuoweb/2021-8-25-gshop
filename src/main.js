import Vue from 'vue';
import App from "./App.vue";
import router from './router/index';
import store from './store';
import {Button} from 'mint-ui';

import './mock/mockServer';

// 注册全局组件标签
Vue.component(Button.name, Button);

import '../static/css/reset.css'
// 关闭生产提示
Vue.config.productionTip = false
new Vue({
  el: '#app',
  render: h=> h(App),
  router,
  store
})