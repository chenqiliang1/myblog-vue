<template>
	<div class="mine">
		<el-card class="box-card">
			<el-divider content-position="left">给我留言</el-divider>
			<h2>本页面可留言、吐槽、提问。欢迎灌水，杜绝广告！</h2>
			<div class="form">
				<el-form ref="form" :model="form" label-width="80px">
					<el-form-item label="昵称">
						<el-input
							v-model="form.name"
							placeholder="请输入你的昵称"
						></el-input>
					</el-form-item>

					<el-form-item label="留言">
						<el-input
							type="textarea"
							v-model="form.desc"
							autosize="true"
							placeholder="请输入你的留言语"
						></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit"
							>发送</el-button
						>
					</el-form-item>
				</el-form>
			</div>
		</el-card>
		<el-card>
			<el-divider>我的留言(点击头像即可回复)</el-divider>
			<div class="comment-wrapper">
                <comment-parent/>
                <comment-parent/>
                <comment-parent/>
			</div>
		</el-card>
	</div>
</template>

<script>

import CommentParent from './childComp/commentparent'
import CommentChild from './childComp/commentchild'
export default {
	name: 'Mine',
	data() {
		return {
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: '',
			}
		}
	},
	methods: {
		
	},
	mounted() {},
	components: {
        CommentParent
        
    },
}
</script>

<style scoped lang="less">
.box-card {
	margin-bottom: 20px;
	h2 {
		text-align: center;
	}
}
.form {
	margin: 20px;
}
</style>
