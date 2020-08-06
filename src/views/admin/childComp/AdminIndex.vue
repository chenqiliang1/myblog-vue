<template>
	<div class="adminindex">
		<h2 id="time" ref="time"></h2>

		<el-card class="box-card">
			<span class="title">博客总体情况</span>
			<el-row :gutter="20" class="content">
				<el-col :span="6">
					<div class="title">
						<i class="el-icon-tickets"></i>总文章数
					</div>

					<div class="num">
						<el-link class="m" type="primary">10</el-link>
					</div>
				</el-col>
				<el-col :span="6"
					><div class="title">
						<i class="el-icon-chat-round"></i>新消息
					</div>
					<div class="num">
						<el-link class="m" type="primary">10</el-link>
					</div></el-col
				>
				<el-col :span="6"
					><div class="title">
						<i class="el-icon-view"></i>总浏览数
					</div>
					<div class="num">
						<el-link class="m" type="primary">10</el-link>
					</div></el-col
				>
				<el-col :span="6"
					><div class="title">
						<i class="el-icon-user"></i>总用户数
					</div>
					<div class="num">
						<el-link class="m" type="primary">10</el-link>
					</div></el-col
				>
			</el-row>
		</el-card>

        <el-card class="box-card">
            <echarts/>
        </el-card>

		<el-card class="box-card">
			<span class="title"> <i class="el-icon-paperclip"></i> 最近编辑</span>
			<el-row :gutter="40" class="content">
				<el-col :span="5" class="one">
					<el-image
						class="img"
						src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
					></el-image>
				</el-col>
				<el-col :span="13" class="two">
					<el-link type="primary" class="title-a">主要链接</el-link>
				</el-col>
				<el-col :span="6" class="three">
					<div class="icon">
						<el-button
							type="warning"
							icon="el-icon-delete"
							circle
						></el-button>
						<el-button
							type="success"
							icon="el-icon-s-promotion"
							circle
						></el-button>
					</div>
				</el-col>
			</el-row>
			
            <el-row :gutter="40" class="content">
				<el-col :span="5" class="one">
					<el-image
						class="img"
						src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
					></el-image>
				</el-col>
				<el-col :span="13" class="two">
					<el-link type="primary" class="title-a">主要链接</el-link>
				</el-col>
				<el-col :span="6" class="three">
					<div class="icon">
						<el-button
							type="warning"
							icon="el-icon-delete"
							circle
						></el-button>
						<el-button
							type="success"
							icon="el-icon-s-promotion"
							circle
						></el-button>
					</div>
				</el-col>
			</el-row>

            <el-row :gutter="40" class="content">
				<el-col :span="5" class="one">
					<el-image
						class="img"
						src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
					></el-image>
				</el-col>
				<el-col :span="13" class="two">
					<el-link type="primary" class="title-a">主要链接</el-link>
				</el-col>
				<el-col :span="6" class="three">
					<div class="icon">
						<el-button
							type="warning"
							icon="el-icon-delete"
							circle
						></el-button>
						<el-button
							type="success"
							icon="el-icon-s-promotion"
							circle
						></el-button>
					</div>
				</el-col>
			</el-row>
		</el-card>
	</div>
</template>

<script>
import Echarts from './Echarts'
export default {
	name: 'AdminIndex',
	data() {
		return {}
	},
	methods: {
		TimeView() {
            const that = this
			let t = null
			t = setTimeout(time, 1000) //開始运行
            let dt
            // console.log(that.$refs.time)
			function time() {
				clearTimeout(t) //清除定时器
				dt = new Date()
				var y = dt.getFullYear()
				var mt = dt.getMonth() + 1
				var day = dt.getDate()
				var h = dt.getHours() //获取时
				var m = dt.getMinutes() //获取分
				var s = dt.getSeconds() //获取秒
				that.$refs.time.innerHTML =
					y +
					'年' +
					mt +
					'月' +
					day +
					'-' +
					h +
					'时' +
					m +
					'分' +
					s +
					'秒'
				t = setTimeout(time, 1000) //设定定时器，循环运行
			}
		},
	},
	mounted() {
		this.TimeView()
	},
	components: {
        Echarts
    },
}
</script>

<style scoped lang="less">
.adminindex {
	#time {
		text-align: center;
		line-height: 50px;
		height: 50px;
		color: #409eff;
		font-weight: 700;
		font-size: 18px;
	}
}
.box-card {
	margin-bottom: 50px;
	span.title {
		line-height: 30px;
	}
	.content {
		padding: 0 10px;
		padding-top: 10px;

		.one {
			.img {
				width: 100%;
			}
		}

		.two {
			padding: 10px;
			padding-left: 30px;
			.title-a {
				font-size: 20px;
			}
		}

		.three {
			.icon {
				padding-left: 20%;
				margin: 0 auto;
				margin-top: 25%;

				transform: translateY(-50%);
			}
		}

		.title {
			text-align: center;
			font-size: 15px;
			color: #606266;
			i {
				padding-right: 8px;
			}
		}
		.num {
			width: 100%;
			margin-top: 20px;
			padding-bottom: 30px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #303133;
			.m {
				font-size: 45px;
				color: #303133;
			}
		}
	}
}
</style>
