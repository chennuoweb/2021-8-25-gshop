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
  CLEAR_CART,
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
      state.cartFoods.push(food);
    } else {
      food.count++;
    }
  },
  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if (food.count) { // 只有有值才去减
      food.count--
      if (food.count === 0) {
        // 将food从cartFoods中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART] (state) {
    // 清除food中的count
    state.cartFoods.forEach(food => {
      food.count = 0;
      delete food.count;
    });
    state.cartFoods = [];
  }
}