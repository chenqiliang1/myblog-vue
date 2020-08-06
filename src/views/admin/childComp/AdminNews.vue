<template>
	<div class="adminNews">
		<el-tabs v-model="activeName" type="card">
			<el-tab-pane label="留言消息" name="first">
				<el-card class="box-card">
					<el-select
						class="select"
						v-model="value"
						placeholder="请选择排序"
					>
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value"
						>
						</el-option>
					</el-select>

					<el-select
						class="select"
						v-model="value"
						placeholder="请选择日期"
					>
						<el-option
							v-for="item in options2"
							:key="item.value"
							:label="item.label"
							:value="item.value"
							:disabled="item.disabled"
						>
						</el-option>
					</el-select>
					<el-switch
						v-model="value1"
						active-text="Redis"
						inactive-text="MySql"
					>
					</el-switch>
					<el-row :gutter="20">
						<el-col :span="24"
							><div class="title">
								留言消息 <span>(消息保存5天)</span>
							</div></el-col
						>

						<el-col :span="24">
							<el-table
								:data="tableData"
								style="width: 100%"
								max-height="300"
							>
								<el-table-column
									fixed
									prop="date"
									label="日期"
									width="150"
								>
								</el-table-column>
								<el-table-column
									prop="name"
									label="昵称"
									width="120"
								>
								</el-table-column>
								<el-table-column
									prop="province"
									label="地区"
									width="120"
								>
								</el-table-column>
								<el-table-column
									prop="address"
									label="IP地址"
									width="300"
								>
								</el-table-column>
								<el-table-column
									prop="address"
									label="留言"
									width="300"
								>
								</el-table-column>
								<el-table-column
									fixed="right"
									label="操作"
									width="120"
								>
									<template>
										<el-button type="text" size="small">
											移除
										</el-button>
										<el-button type="text" size="small">
											回复
										</el-button>
									</template>
								</el-table-column>
							</el-table>
						</el-col>
					</el-row>
				</el-card>
			</el-tab-pane>
			<el-tab-pane label="文章评论" name="second">
				<el-table
					:data="tableData"
					style="width: 100%"
					max-height="300"
				>
					<el-table-column fixed prop="date" label="日期" width="150">
					</el-table-column>
					<el-table-column prop="name" label="昵称" width="120">
					</el-table-column>
					<el-table-column prop="province" label="文章ID" width="120">
					</el-table-column>
					<el-table-column
						prop="address"
						label="文章标题"
						width="300"
					>
					</el-table-column>
					<el-table-column prop="address" label="留言" width="300">
					</el-table-column>
					<el-table-column fixed="right" label="操作" width="120">
						<template>
							<el-button type="text" size="small">
								移除
							</el-button>
							<el-button type="text" size="small">
								回复
							</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
export default {
	name: 'AdminNews',
	data() {
		return {
			activeName: 'first',
			options: [
				
			],
			value: '选项1',
			value1: true,
			options2: [
				
			],
			tableData: [
				
			],
		}
	},
	methods: {},
	mounted() {},
	components: {},
}
</script>

<style scoped lang="less">
.select {
	margin-right: 25px;
}
.title {
	font-size: 14px;
	height: 30px;
	line-height: 30px;
	padding-left: 10px;
	span {
		color: #909399;
	}
}
</style>
