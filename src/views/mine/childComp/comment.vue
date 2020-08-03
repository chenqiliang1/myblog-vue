<template>
	<div class="comment">
		<el-row :gutter="10" class="content">
			<el-col :xs="2" :sm="2" :md="1" :lg="1" :xl="1">
				<div class="user">
					<el-button type="text" @click="dialogFormVisible = true"
						><i class="el-icon-s-custom"></i
					></el-button>
				</div>
			</el-col>
			<el-col :xs="22" :sm="22" :md="23" :lg="23" :xl="23">
				<div class="text" @click="open">
					<h2>
						测试账号1 <span class="who">@</span>
						<span class="user_2"
							>测试账号2<el-tag
								size="mini"
								class="flag"
								type="success"
								>博主</el-tag
							></span
						>
					</h2>
					<p>
						145515611563145515611563145515611563145515611563145515611563145515611563145515611563145515611563145515611563145515611563145515611563145515611563145515611563145515611563
					</p>
					<span><i class="el-icon-timer"></i>2020/8/1 23:39:40</span>
				</div>
			</el-col>
		</el-row>

		<!-- 点击回复 -->
		<el-dialog title="回复评论" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="@ 测试号码1" :label-width="formLabelWidth">
					<el-input
						v-model="form.name"
						type="textarea"
						autocomplete="off"
						placeholder="回复留言"
					></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false"
					>确定</el-button
				>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: 'Comment',
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
			},
			dialogFormVisible: false,
		}
	},
	methods: {
		open() {
			this.$alert('你好你好你好你好你好你哈', '测试账号1', {
				confirmButtonText: '关闭',
			})
		},
	},
	mounted() {},
	components: {},
}
</script>

<style scoped lang="less">
.form {
	margin: 20px;
}
.user {
	width: 100%;
	// background-color: red;
	text-align: center;
	i {
		font-size: 35px;
		line-height: 35px;
		color: #409eff;
		cursor: pointer;
	}
	i:hover {
		color: #f56c6c;
	}
}
.text {
	padding-left: 20px;
	cursor: pointer;
	h2 {
		font-size: 15px;
		font-weight: 700;
		line-height: 16px;
		color: #409eff;
	}
	p {
		font-size: 13px;
		line-height: 25px;
		color: #909399;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	span {
		font-size: 12px;
		color: #909399;
		width: 100%;
		i {
			padding-right: 5px;
			color: #909399;
		}
	}

	.who {
		color: #e6a23c;
		font-size: 15px;
		padding: 0 5px;
	}

	.user_2 {
        display: inline-block;
        width: 55%;
		color: #409eff;
		font-size: 15px;

		.flag {
			width: 30px !important;
            font-size: 10px !important;
            margin-left: 5px;
            background-color: #67C23A;
            color: white;
		}
	}
}
</style>
