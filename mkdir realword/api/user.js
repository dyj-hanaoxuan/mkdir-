import request from '../utils/request'

//用户登录
export const login = (data) => request.post('/api/users/login', data);
//用户注册
export const reg = (data) => request.post('/api/users', data);
