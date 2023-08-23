import request from '@/utils/request'
// Login页登录
export function GetUserLogin(data) {
    return request({
        url: 'operation_management/admin/system/login',
        method: 'post',
        data
    })
}



// 获取验证码接口
export function GetsendSmsCode(data) {
    return request({
        url: 'operation_management/sysUser/sendSmsCode',
        method: 'post',
        data
    })
}


// 人才招聘用户注册
export function GetsysUserRegister(data) {
    return request({
        url: 'operation_management/sysUser/register',
        method: 'post',
        data
    })
}

// 个人中心页信息保存接口
export function GetSaveChanges(data) {
    return request({
        url: 'operation_management/sysUser/saveChanges',
        method: 'post',
        data
    })
}

// 获取当前用户个人信息
export function GetUserProfile(data) {
    return request({
        url: 'operation_management/sysUser/getCurrentUser',
        method: 'post',
        data
    })
}