<template>
	<div class="tabbar">
		<el-menu
			class="el-menu-demo"
			mode="horizontal"
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b"
			:router="true"
			v-if="!flag"
		>
			<el-menu-item index="/admin">
				<i class="el-icon-male"></i> 陈琪亮</el-menu-item
			>
			<el-menu-item index="/home">网站首页</el-menu-item>
			<el-menu-item index="/article">文章专栏</el-menu-item>
			<el-menu-item index="/resources">资源分享</el-menu-item>
			<el-menu-item index="/timeline">点点滴滴</el-menu-item>
			<el-menu-item index="/about">关于本站</el-menu-item>
			<el-menu-item index="/mine">给我留言</el-menu-item>
		</el-menu>

		<el-menu
			class="el-menu-demo"
			mode="vertical"
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b"
			:router="true"
			v-if="flag"
		>
			<el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
				<div class="blog">
					<span>陈琪亮的博客</span>
					<i
						@click="openMeun = !openMeun"
						class="el-icon-s-operation"
					></i>
				</div>
				<hr
			/></el-col>
			<el-collapse-transition>
				<div v-show="openMeun" @click="openMeun = !openMeun">
					<el-col :xs="24" :sm="12" :md="24" :lg="24" :xl="24"
						><el-menu-item index="/home"
							>网站首页</el-menu-item
						></el-col
					>
					<el-col :xs="24" :sm="12" :md="24" :lg="24" :xl="24"
						><el-menu-item index="/article"
							>文章专栏</el-menu-item
						></el-col
					>
					<el-col :xs="24" :sm="12" :md="24" :lg="24" :xl="24"
						><el-menu-item index="/resources"
							>资源分享</el-menu-item
						></el-col
					>
					<el-col :xs="24" :sm="12" :md="24" :lg="24" :xl="24"
						><el-menu-item index="/timeline"
							>点点滴滴</el-menu-item
						></el-col
					>
					<el-col :xs="24" :sm="12" :md="24" :lg="24" :xl="24"
						><el-menu-item index="/about"
							>关于本站</el-menu-item
						></el-col
					>
					<el-col :xs="24" :sm="12" :md="24" :lg="24" :xl="24"
						><el-menu-item index="/mine"
							>给我留言</el-menu-item
						></el-col
					>
				</div>
			</el-collapse-transition>
		</el-menu>
	</div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
import LeftBar from 'components/content/leftbar/LeftBar'

export default {
	name: 'MainTabBar',
	data() {
		return {
			drawer: false,
			dialogFormVisible: false,
			flag: false,
			fullWidth: document.documentElement.clientWidth,
			openMeun: false,
		}
	},
	methods: {},
	mounted() {
		//
		const that = this
		if (that.fullWidth < 450) {
			that.flag = true
		} else {
			that.flag = false
		}
		window.onresize = () => {
			return (() => {
				window.fullWidth = document.documentElement.clientWidth
				that.fullWidth = window.fullWidth
			})()
		}
	},
	watch: {
		/* 监听*/
		fullWidth(val) {
			const obj = this

			this.fullWidth = val
			this.timer = true
			let that = this

			if (val < 450) {
				obj.flag = true
			} else {
				obj.flag = false
			}
		},
	},
	components: {
		TabBar,
		TabBarItem,
		LeftBar,
	},
}
</script>

<style scoped lang="less">
.blog {
	display: flex;
	width: 100%;
	height: 55px;
	line-height: 55px;
	// color: rgb(255,208,75);
	color: white;
	padding: 0 10px;
	font-size: 20px;
	// justify-content: center;
	align-items: center;
	padding-right: 10%;
	justify-content: space-between;

	span {
		cursor: pointer;
		font-weight: 700;
	}
	i {
		font-size: 25px;
		cursor: pointer;
	}
}
</style>
