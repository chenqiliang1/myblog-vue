<template>
	<div class="Make">
		<div class="icons">
			<el-card class="icon-card">
				<div class="user-info">
					<el-avatar
						size="small"
						src="http://wx.qlogo.cn/mmopen/SCQMO9mIC5dLnZib7icfAc3LhPLODGLEQdyicEHpNHhjTwrAM5hXsOHY4KymwrQ5hBZcbkegicmcguib7KjvAAvkRhF6XkNCI2dUB/64"
					></el-avatar>
					<span>悲伤的狗子</span>
				</div>
				<div class="upload">
					<input type="file" id="file" />
					<img src="" id="img" />
					<h2 class="title">
						{{ title }}
					</h2>
				</div>
				<el-input v-model="title" placeholder="请输入标题"></el-input>
			</el-card>
		</div>

		<el-tabs v-model="activeName" class="tab">
			<el-tab-pane label="编辑文章" name="first">
				<el-row>
					<el-col :span="24">
						<el-card class="box-card">
							<div class="card">
								<MarkDown style="width:100%" />
							</div>
						</el-card>
						<el-col :span="24">
							<el-card>
								<el-col :span="24" style="margin-bottom:10px">
									<el-select
										class="select"
										v-model="type"
										placeholder="请选择分类"
									>
										<el-option
											v-for="item in types"
											:key="item.id"
											:label="item.name"
											:value="item.name"
										>
										</el-option>
									</el-select>
									<el-input
										class="input-new-tag"
										style="margin-right:20px"
										v-if="isAddType"
										v-model="type_value"
										ref="addTage"
										size="small"
										@keyup.enter.native="handleInputConfirm"
									>
									</el-input>
									<el-button
										v-else
										class="button-new-tag"
										style="margin-right:20px"
										size="small"
										@click="showInput"
										>添加分类</el-button
									>
									<el-switch
										v-model="flag"
										active-text="公开"
										inactive-text="匿名"
									>
									</el-switch>
								</el-col>
								<div>
									<el-col
										:span="10"
										style="margin-bottom:20px"
									>
										<el-input
											type="textarea"
											:rows="2"
											placeholder="选填，摘要会在订阅号消息、转发链接等文章外的场景显露，帮助读者快速了解内容，如不填写则默认抓取正文前54字"
											v-model="description"
										>
										</el-input>
									</el-col>

									<el-col :span="13" class="btns">
										<el-button type="primary"
											>保存</el-button
										>
										<el-button type="success"
											>发表</el-button
										>
									</el-col>
								</div>
							</el-card>
						</el-col>
					</el-col>
				</el-row>
			</el-tab-pane>
			<el-tab-pane label="发表说说" name="second">
				<el-card class="shuoshuo" style="height:100vh;">
					<div style="margin-bottom:10px">
						<el-select
							v-model="value"
							placeholder="心情"
							class="select"
						>
							<el-option
								v-for="(item, index) in feel"
								:key="index"
								:label="item"
								:value="item"
							>
							</el-option>
						</el-select>

						<el-switch
							v-model="flag"
							active-text="匿名"
							inactive-text="公开"
						>
						</el-switch>
					</div>
					<el-input
						type="textarea"
						:rows="2"
						placeholder="请输入内容"
						v-model="content"
					>
					</el-input>
					<el-col :span="24" class="btns">
						<el-button type="primary">保存</el-button>
						<el-button type="success">发表</el-button>
					</el-col>
				</el-card>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
import MarkDown from './Markdown'
import types from '@/network/types'
export default {
	name: 'Make',
	data() {
		return {
			// 分类
			types: [],
			type: '',
			type_value: '',
			type0bj: {},
			// 标题
			title: '',
			// 是否匿名
			flag: true,
			// 描述
			description: '',
			feel: ['开心', '懵逼', '郁闷', '无奈', '害怕'],
			// 说说内容
			content: '',
			// 是否添加类型
			isAddType: false,
			activeName: 'first',
			imageUrl: '',
		}
	},
	methods: {
		addType() {
			let inputValue = this.type_value
			if (inputValue) {
				this.isAddType = false
				this.type_value = ''
				let id = this.types[this.types.length - 1].id
				let type = {
					name: inputValue,
				}
				types.addType(type)
				type.id = id + 1
				this.types.push(type)
			}
		},

		showInput() {
			this.isAddType = true
			this.$nextTick(() => {
				this.$refs.addTage.$refs.input.focus()
			})
		},

		handleInputConfirm() {
			this.$confirm('是否添加新类型', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					this.addTage()
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除',
					})
				})
		},
	},
	mounted() {
		types.getAllType().then((res) => {
			// 获取所有分类
			this.types = res.data.types
		})
	},
	components: {
		MarkDown,
	},
}
</script>

<style lang="less">
.Make {
	// margin-top: 0;

	margin: 0;
	margin-left: 19%;

	.icons {
		position: fixed;
		width: 18%;
		left: 10px;
		top: 100px;

		.upload {
			position: relative;
			height: 210px;
			background-color: rgb(225, 225, 225);
			margin-top: 10px;
			margin-bottom: 10px;
			cursor: pointer;
			input {
				width: 100%;
				height: 210px;
				// background-color: red;
				position: absolute;
				opacity: 0;
				z-index: 2;
				// background-color: red;
			}
			h2 {
				width: 100%;
				font-size: 14px;
				padding-left: 10px;
				padding-bottom: 5px;
				position: absolute;
				z-index: 1;
				bottom: 0;

				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				-o-text-overflow: ellipsis;
			}
			img {
				width: 100%;
				position: absolute;
				z-index: 3;
			}
		}

		.icon-card {
			margin: 0;
			padding: 0;

			.user-info {
				display: flex;
				width: 100%;
				align-items: center;
				cursor: pointer;
				span {
					font-size: 14px;
					margin-left: 10px;
				}
			}
		}
	}
}

.el-tag + .el-tag {
	margin-left: 10px;
}
.button-new-tag {
	margin-left: 10px;
	height: 32px;
	line-height: 30px;
	padding-top: 0;
	padding-bottom: 0;
	margin-right: 10px;
}
.input-new-tag {
	width: 90px;
	margin-left: 10px;
	vertical-align: bottom;
}
.select {
	margin-right: 10px;
}
.btns {
	display: flex;
	justify-content: center;
	height: 70px;
	align-items: center;
}
.shuoshuo {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
