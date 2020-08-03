<template>
	<div class="time">
		<div class="block">
			<el-timeline>
				<el-timeline-item timestamp="2018/4/12" placement="top">
					<el-card>
						<router-link to="/essay/1"><el-link type="primary" href="https://element.eleme.io" target="_blank">主要链接</el-link></router-link>
					</el-card>
				</el-timeline-item>
				<el-timeline-item timestamp="2018/4/3" placement="top">
					<el-card>
						<router-link to="/essay/1"><el-link type="primary" href="https://element.eleme.io" target="_blank">主要链接</el-link></router-link>
					</el-card>
				</el-timeline-item>
				<el-timeline-item timestamp="2018/4/2" placement="top">
					<el-card>
						<router-link to="/essay/1"><el-link type="primary" href="https://element.eleme.io" target="_blank">主要链接</el-link></router-link>
					</el-card>
				</el-timeline-item>
			</el-timeline>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TArticle',
	data() {
		return {}
	},
	methods: {},
	mounted() {},
	components: {},
}
</script>

<style scoped lang="less">
.time {
	// padding: 0 15%;
}
</style>
