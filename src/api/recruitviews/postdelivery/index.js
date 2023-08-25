import request from '@/utils/request'

// 获取岗位数据
export function GetDataTableList(data) {
    return request({
        url: '/member_management/recruit/pageData',
        method: 'post',
        data
    })
}

// 获取岗位详情
export function GetDataTableInfoList(data) {
    return request({
        url: '/member_management/recruit/getById',
        method: 'post',
        data
    })
}
// 保存用户表单数据
export function InsertUserRecruitForm(data) {
    return request({
        url: '/member_management/user-recruit-form/insert',
        method: 'post',
        data
    })
}
//获取用户信息表单
export function GetUserForm(data) {
    return request({
        url: '/member_management/user-recruit-form/getUserForm',
        method: 'post',
        data
    })
}
//上传简历
export function UploadFile(data) {
    return request({
        url: '/operation_management/file-info/upload',
        method: 'post',
        data
    })
}

// 投递岗位
export function ApplyRecruit(data) {
    return request({
        url: '/member_management/recruit-form/insert',
        method: 'post',
        data
    })
}
/**
 * 下载文件
 */
export function DownFile(data) {
    return request({
        url: '/operation_management/file-info/down',
        method: 'post',
        responseType: 'blob',
        data
    })
}