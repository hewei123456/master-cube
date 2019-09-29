import axios from 'axios'
import store from '../store'

const instance = axios.create();

//添加请求拦截器
instance.interceptors.request.use(config => {
  if (store.state.user.userInfo.authorization)
    config.headers['Authorization'] = store.state.user.userInfo['authorization'];

  return config;
}, error => {
  return Promise.reject(error);
});

//添加响应拦截器
instance.interceptors.response.use(response => response.data,
  error => {
    switch (error.response.status) {
      case 401:
        console.log(error);
        break;
      case 403:
        break;
      case 500:
        break;
    }
    return Promise.reject(error.response.data);
  });

const base = 'http://192.168.63.139:8080';
/**
 * 封装后的ajax post方法
 *
 * @param {string} url 请求路径
 * @param {object} data 请求参数
 * @param {object} config 用户自定义设置
 * @returns
 */
export const post = (url, data, config = {}) => {
  return instance.post(base + url, data, config);
};

/**
 * 封装后的ajax get方法
 *
 * @param {string} url 请求路径
 * @param {object} params 请求参数
 * @param {object} config 用户自定义设置
 * @returns
 */
export const get = (url, params, config = {
  headers: {
    'Content-Type': 'application/json'
  }
}) => {
  return instance.get(base + url, {params}, config);
};

