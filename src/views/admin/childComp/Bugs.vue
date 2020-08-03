<template>
	<div class="bugs">
		<el-card class="box-card">
			<h2>Bug管理</h2>

			<el-tabs type="border-card">
				<el-tab-pane label="前端Bug">
                    <el-table :data="bugs" height="300" border style="width: 100%">
				<el-table-column label="描述" width="500">
					<div
						class="box box_1"
						slot-scope="scope"
						v-html="scope.row.msg"
					></div>
				</el-table-column>
				<el-table-column label="位置">
					<div
						class="box box_2"
						slot-scope="scope"
						v-html="scope.row.trace"
					></div>
				</el-table-column>
			</el-table>
                </el-tab-pane>
				<el-tab-pane label="网络Bug">网络Bug</el-tab-pane>
				<el-tab-pane label="后端Bug">后端Bug</el-tab-pane>
			</el-tabs>
			
		</el-card>
	</div>
</template>

<script>
export default {
	name: 'Bugs',
	data() {
		return {
			bugs: [],
		}
	},
	methods: {},
	mounted() {
		this.bugs = JSON.parse(localStorage.getItem('error') || '[]')
		console.log(this.bugs)
	},
	components: {},
}
</script>

<style scoped lang="less">
.box-card {
	h2 {
		font-weight: 700;
		font-size: 25px;
		margin-bottom: 20px;
	}

	.box {
		font-size: 12px;
	}
}
</style>
