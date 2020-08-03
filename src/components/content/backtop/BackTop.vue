<template>
	<div class="backtop">
		<transition name="el-fade-in-linear">
			<el-button
				type="info"
				@click="scrollToTop"
				v-show="toTopShow"
				size="medium"
				circle
				><i class="el-icon-upload2"></i
			></el-button>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'BackTop',
	data() {
		return {
			toTopShow: false,
		}
	},
	methods: {
		handleScroll() {
			//获取滚动时的高度
			try {
				let scrollTop =
					window.pageYOffset ||
					document.documentElement.scrollTop ||
					document.body.scrollTop

				if (scrollTop > 300) {
					this.toTopShow = true
				} else {
					this.toTopShow = false
				}
			} catch (error) {}
		},
		scrollToTop() {
			var timer = setInterval(function() {
				let osTop =
					document.documentElement.scrollTop ||
					document.body.scrollTop
				let ispeed = Math.floor(-osTop / 5)
				document.documentElement.scrollTop = document.body.scrollTop =
					osTop + ispeed
				this.isTop = true
				if (osTop === 0) {
					clearInterval(timer)
				}
			}, 10)
		},
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
	},
	destroyed() {},
	components: {},
}
</script>

<style scoped lang="less">
.backtop {
	position: fixed;
	bottom: 50px;
	right: 50px;
}
</style>
