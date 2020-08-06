import request from '../utils/request'

//用户登录
export const login = data => {
    return request({
        methods: 'POST',
        url: '/api/users/login',
        data: {
            data
        }
    })
}
//用户注册
export const reg = data => {
    return request({
        methods: 'POST',
        url: '/api/users',
        data: {
            data
        }
    })
}