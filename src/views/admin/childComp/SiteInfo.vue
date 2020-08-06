<template>
	<div class="siteinfo">
		<el-tabs tab-position="left">
			<el-tab-pane label="公告">
				<el-collapse v-model="activeNames">
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
	</div>
</template>

<script>
export default {
	name: 'SiteInfo',
	data() {
		return {
			input: '',
			swiperImg: [
				'http://qea871syu.bkt.clouddn.com/swiper_1.jpg',
				'http://qea871syu.bkt.clouddn.com/swiper_2.jpg',
				'http://qea871syu.bkt.clouddn.com/swiper_3.jpg',
				'http://qea871syu.bkt.clouddn.com/swiper_4.jpg',
			],
			value: true,
			textarea: '',
            activeNames:""
		}
	},
	methods: {},
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
</style>
