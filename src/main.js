import Vue from 'vue';
import App from "./App.vue";
import router from './router/index';
import store from './store';
import {Button} from 'mint-ui';
import VueLazyload from 'vue-lazyload';
import './mock/mockServer';
import loading from './common/imgs/loading.gif';
import './filters/index.js';
// 注册全局组件标签
Vue.component(Button.name, Button);
Vue.use(VueLazyload, {
  loading
})

import '../static/css/reset.css'
// 关闭生产提示
Vue.config.productionTip = false
new Vue({
  el: '#app',
  render: h=> h(App),
  router,
  store
})