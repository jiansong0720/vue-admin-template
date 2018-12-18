import request from '@/utils/request'

// 获取用户分页列表
export function getUserPageList(params) {
  return request({
    url: '/user/pageList',
    method: 'get',
    params
  })
}

// 删除用户
export function deleteUser(id) {
  return request({
    url: '/user/delete/' + id,
    method: 'delete'
  })
}
