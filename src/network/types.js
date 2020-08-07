import  request  from './request'
export default {
	getAllType() {
		return request({
			url: '/admin/allType',
			method: 'get',
		})
    },
    addType(type) {
		return request({
			url: '/admin/addType',
            method: 'post',
            data:type
		})
    },
    deleteType(id) {
		return request({
			url: '/admin/deleteType/'+id,
            method: 'delete',
		})
    },
    updateType(type) {
		return request({
			url: '/admin/updateType/'+type.id,
            method: 'delete',
            data:type
		})
	},
}
