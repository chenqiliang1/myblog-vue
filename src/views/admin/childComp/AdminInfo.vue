<template>
	<div class="admininfo">
		<el-tabs type="border-card">
			<el-tab-pane label="个人信息">
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
								<img
									v-if="imageUrl"
									:src="imageUrl"
									class="avatar"
								/>
								<i
									v-else
									class="el-icon-plus avatar-uploader-icon"
								></i>
							</el-upload>
							<el-avatar :size="80" :src="imageUrl"></el-avatar>
						</div>
					</el-col>
					<el-col :span="18">
						<div class="user-info">
							<el-form
								ref="form"
								:model="form"
								label-width="80px"
							>
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
										<el-radio
											label="男"
										></el-radio>
										<el-radio
											label="女"
										></el-radio>
									</el-radio-group>
								</el-form-item>
                                <el-form-item label="个性签名">
									<el-input
										v-model="form.desc"
									></el-input>
								</el-form-item>
								<el-form-item label="个人描述">
									<el-input
										type="textarea"
										v-model="form.desc"
									></el-input>
								</el-form-item>
								<el-form-item>
									<el-button type="primary" @click="onSubmit"
										>保存</el-button
									>
									<el-button>取消</el-button>
								</el-form-item>
							</el-form>
						</div>
					</el-col>
				</el-row>
			</el-tab-pane>
            <el-tab-pane label="网站信息">
				<el-tabs tab-position="left">
					<el-tab-pane label="公告">
						<el-collapse
							v-model="activeNames"
							@change="handleChange"
						>
							<el-collapse-item name="1">
								<template slot="title">
									<el-button
										class="btn-num"
										type="primary"
										size="mini"
										circle
										>1</el-button
									>
									公告一
								</template>
								<div>
									与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
								</div>
								<div>
									<el-input
										type="textarea"
										placeholder="请输入公告内容"
										v-model="input"
										clearable
									></el-input>
								</div>
							</el-collapse-item>

							<el-collapse-item name="2">
								<template slot="title">
									<el-button
										class="btn-num"
										type="success"
										size="mini"
										circle
										>2</el-button
									>
									公告二
								</template>
								<div>
									与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
								</div>
								<div>
									<el-input
										type="textarea"
										placeholder="请输入公告内容"
										v-model="input"
										clearable
									></el-input>
								</div>
							</el-collapse-item>

							<el-collapse-item name="3">
								<template slot="title">
									<el-button
										class="btn-num"
										type="info"
										size="mini"
										circle
										>3</el-button
									>
									公告三
								</template>
								<div>
									与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
								</div>
								<div>
									<el-input
										type="textarea"
										placeholder="请输入公告内容"
										v-model="input"
										clearable
									></el-input>
								</div>
							</el-collapse-item>
						</el-collapse>
					</el-tab-pane>
					<el-tab-pane label="轮播图">
						<el-row :gutter="20">
							<el-col :span="10">
								<div class="grid-content bg-purple">
									<el-carousel
										trigger="click"
										height="200px"
										:autoplay="false"
									>
										<el-carousel-item
											v-for="item in swiperImg"
											:key="item.index"
										>
											<el-image
												fit="contain"
												:src="item"
												class="swiperImg"
											></el-image>
										</el-carousel-item>
									</el-carousel>
								</div>
							</el-col>
							<el-col :span="14">
								<div
									class="swiper-num"
									v-for="item in swiperImg.length"
									:key="item"
								>
									<el-button class="btn-num" circle>{{
										item
									}}</el-button>
									<el-input
										placeholder="请输入内容"
										v-model="swiperImg[item - 1]"
										value="swiperImg[item-1]"
										:disabled="true"
										clearable
									>
									</el-input>
								</div>
							</el-col>
							<el-col :span="24">
								<div class="add">
									<i class="el-icon-circle-plus"></i
									><el-input
										placeholder="添加轮播图"
										v-model="input"
										clearable
									>
									</el-input>
									<el-button type="success" class="btn" round
										>确认</el-button
									>
								</div>
							</el-col>
						</el-row>
					</el-tab-pane>
					<el-tab-pane label="基础任务">
						<div class="tack">
							<h2>
								<span>关闭博客</span>
								<el-switch v-model="value"></el-switch>
							</h2>
						</div>

						<!-- 留言自动回复 -->
						<div class="tack">
							<h2>
								<span>留言自动回复</span>
								<el-switch v-model="value"></el-switch>
							</h2>
							<el-input
								type="textarea"
								placeholder="自动回复内容"
								v-model="textarea"
								v-if="value"
							>
							</el-input>
						</div>
					</el-tab-pane>
				</el-tabs>
			</el-tab-pane>
        </el-tabs>
	</div>
</template>

<script>
export default {
	name: 'AdminInfo',
	data() {
		return {
			activeNames: ['0'],
			input: '',
			swiperImg: [
				'http://qea871syu.bkt.clouddn.com/swiper_1.jpg',
				'http://qea871syu.bkt.clouddn.com/swiper_2.jpg',
				'http://qea871syu.bkt.clouddn.com/swiper_3.jpg',
				'http://qea871syu.bkt.clouddn.com/swiper_4.jpg',
			],
			value: true,
			textarea: '',
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
		handleChange(val) {
			console.log(val)
		},
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

<style scoped lang="less">
.btn-num {
	width: 14px;
	height: 14px;
	font-size: 8px;
	display: flex;
	justify-content: center;
	align-content: center;
	line-height: 1px;
	margin-right: 5px;
}
.swiper-num {
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	.btn-num {
		font-size: 12px;
	}
}
.add {
	display: flex;
	margin-top: 20px;
	i {
		margin-right: 15px;
		font-size: 40px;
		color: #67c23a;
	}
	.btn {
		margin-left: 15px;
	}
}
.tack {
	margin-bottom: 20px;
	h2 {
		height: 30px;
		line-height: 30px;
		span {
			color: #606266;
			padding-right: 35px;
		}
	}
}
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
