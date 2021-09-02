import ajax from './ajax';
// const BASE_URL = 'http://localhost:4000';
const BASE_URL = '/api';
// 1 根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`);

// 2 获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category');

// 3 根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL + '/shops', {longitude, latitude});

// 4 用户名密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST');

// 5 发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendCode', {phone});

// 6 手机号验证码登录
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST');

// 7 请求用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo');

// 8 请求用户信息
export const reqLogout = () => ajax(BASE_URL + '/logout');

// 9 根据经纬度和关键字获取商铺列表
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL + '/search_shops', {geohash, keyword});

// 10 获取商家信息
export const reqShopInfo = () => ajax('/info');

// 11 获取商家评价信息
export const reqShopRatings = () => ajax('/ratings');

// 12 获取商家商品列表信息
export const reqShopGoods = () => ajax('/goods');