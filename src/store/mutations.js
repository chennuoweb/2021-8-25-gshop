import Vue from 'vue';
/**
 * 直接更新state的多个方法的对象
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
} from './mutation-types';

export default {
  // ES6的计算属性名
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address;
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys;
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops;
  },
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo;
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {};
  },
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods;
  },
  [RECEIVE_RATINGS] (state, {ratings}) {
    state.ratings = ratings;
  },
  [RECEIVE_INFO] (state, {info}) {
    state.info = info;
  },
  [INCREMENT_FOOD_COUNT] (state, {food}) {
    if(!food.count) {
      // food.count = 1;
      Vue.set(food, 'count', 1);   // 让新增的属性也有数据绑定
    } else {
      food.count++;
    }
  },
  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if(food.count <= 0) return;
    food.count--;
  },
}