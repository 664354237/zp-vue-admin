import request from '@/utils/request'

// 获取岗位投递 表单数据
export function GetDataTableList(data) {
    return request({
        url: 'member_management/recruit/pageData',
        method: 'post',
        data
    })
}

// 获取岗位投递 表单点击详情数据
export function GetDataTableInfoList(data) {
    return request({
        url: 'member_management/recruit/getById',
        method: 'post',
        data
    })
}
// 保存用户表单数据
export function InsertUserRecruitForm(data) {
    return request({
        url: 'member_management/user-recruit-form/insert',
        method: 'post',
        data
    })
}
//获取用户信息表单
export function GetUserForm(data) {
    return request({
        url: 'member_management/user-recruit-form/getUserForm',
        method: 'post',
        data
    })
}

