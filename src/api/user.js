import {request} from '../help/axios.js';

// 获取用户信息
export const userInfo = (data) => request('/user', data, 'get');

// 修改用户信息
export const changeInfo = (data) => request('/user', data, 'put');

// 登录
export const login = (data) => request('/login', data, 'post');

// 注册
export const register = (data) => request('/register', data, 'post');

// 获取门禁记录
export const getCameraRecords = (data) => request('/camera/records', data, 'get');

// 获取用户人脸模型
export const getFaceModel = (data) => request('/face', data, 'get');

// 用户激活人脸模型
export const activeFace = (data) => request('/face/active', data, 'put');
