<template>
	<div class="resources">
		<h1>open source</h1>
		<p>目前共计 0 个开源作品</p>

		<el-row :gutter="50">
			<el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
				<el-card
					shadow="always"
					:body-style="{ padding: '10px' }"
					class="card"
				>
					<img
						src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
						class="image"
					/>
					<div class="content">
						<el-link type="info" class="link">主 要 链 接</el-link>
						<div class="text">
							vue + Element
							后台管理系统框架，可用于快速生成后台管理系统
						</div>
					</div>
				</el-card>
			</el-col>

			<el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
				<el-card
					shadow="always"
					:body-style="{ padding: '10px' }"
					class="card"
				>
					<img
						src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
						class="image"
					/>
					<div class="content">
						<el-link type="info" class="link">主 要 链 接</el-link>
						<div class="text">
							vue + Element
							后台管理系统框架，可用于快速生成后台管理系统
						</div>
					</div>
				</el-card>
			</el-col>

			<el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
				<el-card
					shadow="always"
					:body-style="{ padding: '10px' }"
					class="card"
				>
					<img
						src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
						class="image"
					/>
					<div class="content">
						<el-link type="info" class="link">主 要 链 接</el-link>
						<div class="text">
							vue + Element
							后台管理系统框架，可用于快速生成后台管理系统
						</div>
					</div>
				</el-card>
			</el-col>

			<el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
				<el-card
					shadow="always"
					:body-style="{ padding: '10px' }"
					class="card"
				>
					<img
						src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
						class="image"
					/>
					<div class="content">
						<el-link type="info" class="link">主 要 链 接</el-link>
						<div class="text">
							vue + Element
							后台管理系统框架，可用于快速生成后台管理系统
						</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: 'Resources',
	data() {
		return {}
	},
	methods: {},
	mounted() {},
	components: {},
}
</script>

<style scoped lang="less">
.resources {
	h1 {
		text-align: center;
		font-weight: 700;
		font-size: 30px;
		margin-bottom: 20px;
	}
	p {
		font-size: 13px;
		text-align: center;
		margin-bottom: 50px;
	}

	.card {
		margin-bottom: 30px;
		img {
			display: block;
			margin: 0 auto;
			width: 97%;
		}
		.content {
			padding: 10px 0;
			text-align: center;
			.link {
				// display: block;
				// width: 100%;
				font-weight: 500;
				font-size: 20px !important;
			}
			.text {
				padding-top: 10px;
				font-size: 14px;
				line-height: 20px;
				color: #606266;
			}
		}
	}
}
</style>
