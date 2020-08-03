<template>
	<div class="time">
		<div class="block">
			<el-timeline>
				<el-timeline-item timestamp="2018/4/12" placement="top">
					<el-card>
						<h4>更新 Github 模板</h4>
						<p>王小虎 提交于 2018/4/12 20:46</p>
					</el-card>
				</el-timeline-item>
				<el-timeline-item timestamp="2018/4/3" placement="top">
					<el-card>
						<h4>更新 Github 模板</h4>
						<p>王小虎 提交于 2018/4/3 20:46</p>
					</el-card>
				</el-timeline-item>
				<el-timeline-item timestamp="2018/4/2" placement="top">
					<el-card>
						<h4>更新 Github 模板</h4>
						<p>王小虎 提交于 2018/4/2 20:46</p>
					</el-card>
				</el-timeline-item>
			</el-timeline>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Time',
	data() {
		return {}
	},
	methods: {},
	mounted() {},
	components: {},
}
</script>

<style scoped lang="less">
.time{
    padding: 0 15%;
}
</style>
