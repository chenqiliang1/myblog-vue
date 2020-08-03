<template>
	<div class="timeline">
		<!-- 面包屑导航 -->
		<div class="nav-mianbao">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/' }"
					>网站首页</el-breadcrumb-item
				>
				<el-breadcrumb-item :to="{ path: '/timeline' }"
					>点点滴滴</el-breadcrumb-item
				>
				<el-breadcrumb-item :to="{ path: '/timeline' }" id="po"
					>时光轴</el-breadcrumb-item
				>
			</el-breadcrumb>
		</div>

		<!-- 局部nav -->
		<div class="nav">
			<el-breadcrumb separator="|">
				<el-breadcrumb-item
					><a
						:class="{ active: currentIndex == 0 }"
						@click="itemClick(0)"
						href="javascript:;"
						>时光轴</a
					></el-breadcrumb-item
				>
				<el-breadcrumb-item
					><a
						:class="{ active: currentIndex == 1 }"
						@click="itemClick(1)"
						href="javascript:;"
						>文章归档</a
					></el-breadcrumb-item
				>
				<el-breadcrumb-item
					><a
						:class="{ active: currentIndex == 2 }"
						@click="itemClick(2)"
						href="javascript:;"
						>笔记</a
					></el-breadcrumb-item
				>
				<el-breadcrumb-item
					style="display:none;"
					:to="{ path: '/home' }"
					>活动列表</el-breadcrumb-item
				>
			</el-breadcrumb>
		</div>

		<div class="content">
			<transition name="el-zoom-in-center">
				<Time v-show="currentIndex == 0" class="icon"
			/></transition>
			<transition name="el-zoom-in-center">
				<TArticle v-show="currentIndex == 1" class="icon"
			/></transition>
			<transition name="el-zoom-in-center"
				><Note v-show="currentIndex == 2" class="icon"
			/></transition>
		</div>
	</div>
</template>

<script>
import Time from './childComp/time'
import TArticle from './childComp/T-article'
import Note from './childComp/Note'
export default {
	name: 'TimeLine',
	data() {
		return {
			currentIndex: 0,
		}
	},
	methods: {
		itemClick(index) {
			const dom = document.getElementById('po')
			switch (index) {
				case 0:
					dom.innerHTML = '时光轴'
					break
				case 1:
					dom.innerHTML = '文章归档'
					break
				case 2:
					dom.innerHTML = '笔记'
					break
			}
			this.currentIndex = index
		},
	},
	mounted() {},
	components: {
		Time,
		TArticle,
		Note,
	},
}
</script>

<style scoped lang="less">
.timeline {
	.nav-mianbao {
		background-color: rgb(255, 255, 255);
		padding: 10px 15px;
		border-left: 5px solid var(--color-theme);
		margin-bottom: 45px;
		// margin-top: 10px;
	}
	.nav {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgb(255, 255, 255);
		padding: 10px 15px;
		margin-bottom: 20px;
	}
}
.active {
	color: #409eff;
}
.icon {
	-webkit-animation-name: rotatein;
	-moz-animation-name: rotatein;
	-ms-animation-name: rotatein;
	animation-name: rotatein;
}
</style>
