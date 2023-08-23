import request from '@/utils/request'

// 获取我的投递 表单数据
export function GetDataPageData(data) {
    return request({
        url: 'member_management/recruit-form/pageData',
        method: 'post',
        data
    })
}