<template>
	<div class="userinfo">
		<el-row :gutter="20">
			<el-col :span="6">
				<div class="avatar">
					<el-upload
						class="upload"
						action="https://jsonplaceholder.typicode.com/posts/"
						:show-file-list="false"
						:on-success="handleAvatarSuccess"
						:before-upload="beforeAvatarUpload"
					>
						<img v-if="imageUrl" :src="imageUrl" class="avatar" />
						<i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					<el-avatar :size="80" :src="imageUrl"></el-avatar>
				</div>
			</el-col>
			<el-col :span="18">
				<div class="user-info">
					<el-form ref="form" :model="form" label-width="80px">
						<el-form-item label="昵称">
							<el-input v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="出生日期">
							<el-col :span="11">
								<el-date-picker
									type="date"
									placeholder="选择日期"
									v-model="form.date1"
									style="width: 100%;"
								></el-date-picker>
							</el-col>
						</el-form-item>
						<el-form-item label="爱好">
							<el-checkbox-group v-model="form.type">
								<el-checkbox
									label="羽毛球"
									name="type"
								></el-checkbox>
								<el-checkbox
									label="编程"
									name="type"
								></el-checkbox>
								<el-checkbox
									label="游戏/王者荣耀"
									name="type"
								></el-checkbox>
								<el-checkbox
									label="旅游"
									name="type"
								></el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="性别">
							<el-radio-group v-model="form.resource">
								<el-radio label="男"></el-radio>
								<el-radio label="女"></el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="个性签名">
							<el-input v-model="form.desc"></el-input>
						</el-form-item>
						<el-form-item label="个人描述">
							<el-input
								type="textarea"
								v-model="form.desc"
							></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary">保存</el-button>
							<el-button>取消</el-button>
						</el-form-item>
					</el-form>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: 'UserInfo',
	data() {
		return {
            
			
			imageUrl:
				'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
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
        }
	},
	methods: {
        handleAvatarSuccess(res, file) {
			this.imageUrl = URL.createObjectURL(file.raw)
        },
        beforeAvatarUpload(file) {
			const isJPG = file.type === 'image/jpeg'
			const isLt2M = file.size / 1024 / 1024 < 2

			if (!isJPG) {
				this.$message.error('上传头像图片只能是 JPG 格式!')
			}
			if (!isLt2M) {
				this.$message.error('上传头像图片大小不能超过 2MB!')
			}
			return isJPG && isLt2M
		},
    },
	mounted() {},
	components: {},
}
</script>

<style scoped lang='less'>
.avatar {
	position: relative;
	// background-color: red;
	text-align: center;
	.upload {
		width: 80px;
		position: absolute;
		// z-index: 0;
		// top: 50%;
		left: 50%;
		transform: translateX(-50%);
		img {
			width: 100%;
			border-radius: 50%;
		}
	}
}
.user-info {
	.info {
		display: flex;
		height: 40px;
		line-height: 40px;
		margin-bottom: 20px;
		h2 {
			width: 20%;
			text-align: center;
			font-weight: 700;
			margin-right: 10px;
			font-size: 18px;
			// border-bottom: 2px solid black;
		}
	}
}

</style>
