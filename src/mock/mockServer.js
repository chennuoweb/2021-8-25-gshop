/**
 * 使用mockjs提供的mock接口
 */
import Mock from 'mockjs';
import data from './data.json';

// 返回商铺列表的接口 goods
Mock.mock('/goods', {code: 0, data: data.goods});
// 返回评价的接口     ratings
Mock.mock('/ratings', {code: 0, data: data.ratings});
// 返回商家的接口     info
Mock.mock('/info', {code: 0, data: data.info});
