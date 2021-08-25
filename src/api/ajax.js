import axios from 'axios';

// ajax函数请求模块
export default function ajax(url, data={}, type='GET') {
  if(type === 'GET') {
    // 准备url query 参数数据
    let dataStr = ''; // 数据拼接字符串
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    });

    if(dataStr !== '') {
      dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }

    // 发送get 请求
    promise = axios.get(url);
  } else {
    promise = axios.post(url,data);
  }
}