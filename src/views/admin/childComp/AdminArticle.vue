<template>
	<div class="adminArticle">
		<el-tabs v-model="activeName">
			<el-tab-pane label="文章" name="first">
				<el-card class="box-card">
					<div class="icons">
						<el-select v-model="value" placeholder="请选择">
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							>
							</el-option>
						</el-select>

						<el-input
							placeholder="模糊搜索"
							prefix-icon="el-icon-search"
							v-model="input2"
							class="search"
						>
						</el-input>
						<el-date-picker
							v-model="value1"
							type="date"
							placeholder="选择起始日期"
						>
						</el-date-picker>

						<el-date-picker
							v-model="value1"
							type="date"
							placeholder="选择结束日期"
						>
						</el-date-picker>

						<el-button class="btn" type="success">搜索</el-button>

						<el-button class="btn" type="success"
							>新建文章</el-button
						>
					</div>

					<el-table
						:data="tableData"
						height="300"
						border
						style="width: 100%"
					>
						<el-table-column
							fixed
							prop="date"
							label="日期"
							width="150"
						>
						</el-table-column>
						<el-table-column prop="name" label="ID" width="120">
						</el-table-column>
						<el-table-column
							prop="province"
							label="标题"
							width="120"
						>
						</el-table-column>
						<el-table-column
							prop="address"
							label="类型/标签"
							width="200"
						>
						</el-table-column>
						<el-table-column prop="city" label="留言数" width="100">
						</el-table-column>
						<el-table-column prop="zip" label="评论数" width="100">
						</el-table-column>
						<el-table-column label="描述" width="400">
							<div class="desc" slot-scope="scope">
								{{ scope.row.zip }}
								sjkabcjkkcbhhhjbbzbbzbbbbbbbbbbbbbbbbbbbbb
								nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
							</div>
						</el-table-column>
						<el-table-column
							prop="zip"
							label="是否匿名"
							width="120"
						>
							<template>
								<el-switch
									v-model="value"
									active-text="是"
									inactive-text="否"
								>
								</el-switch>
							</template>
						</el-table-column>
						<el-table-column fixed="right" label="操作" width="120">
							<template slot-scope="scope">
								<el-button
									@click="handleClick(scope.row)"
									type="text"
									size="small"
									>查看</el-button
								>
								<el-button type="text" size="small"
									>删除</el-button
								>
								<el-button type="text" size="small"
									>编辑</el-button
								>
							</template>
						</el-table-column>
					</el-table>
				</el-card>
			</el-tab-pane>

			<el-tab-pane label="说说" name="second">
				<el-card class="box-card">
					<div class="icons">
						<el-input
							placeholder="模糊搜索"
							prefix-icon="el-icon-search"
							v-model="input2"
							class="search"
						>
						</el-input>

						<el-button class="btn" type="success">搜索</el-button>

						<el-button class="btn" type="success"
							>发表说说</el-button
						>
					</div>

					<el-table
						:data="tableData"
						height="300"
						border
						style="width: 100%"
					>
						<el-table-column
							fixed
							prop="date"
							label="日期"
							width="150"
						>
						</el-table-column>
						<el-table-column label="说说" width="400">
							<div class="desc" slot-scope="scope">
								{{ scope.row.zip }}
								sjkabcjkkcbhhhjbbzbbzbbbbbbbbbbbbbbbbbbbbb
								nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
							</div>
						</el-table-column>
						<el-table-column
							prop="zip"
							label="是否匿名"
							width="150"
						>
							<template>
								<el-switch
									v-model="value"
									active-text="是"
									inactive-text="否"
								>
								</el-switch>
							</template>
						</el-table-column>
                        <el-table-column label="心情" width="150">
							<div >
								快乐
							</div>
						</el-table-column>
						<el-table-column fixed="right" label="操作" width="120">
							<template slot-scope="scope">
								<el-button
									@click="handleClick(scope.row)"
									type="text"
									size="small"
									>查看</el-button
								>
								<el-button type="text" size="small"
									>删除</el-button
								>
								<el-button type="text" size="small"
									>编辑</el-button
								>
							</template>
						</el-table-column>
					</el-table>
				</el-card>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
export default {
	name: 'AdminArticle',
	data() {
		return {
			activeName: 'first',
			options: [
				{
					value: '选项1',
					label: '全部',
				},
				{
					value: '选项2',
					label: 'Java',
				},
				{
					value: '选项3',
					label: 'HTML',
				},
				{
					value: '选项4',
					label: 'VUE',
				},
				{
					value: '选项5',
					label: 'Python',
				},
			],
			value: '选项1',
			input: '',
			tableData: [
				{
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333,
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1517 弄',
					zip: 200333,
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1519 弄',
					zip: 200333,
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1516 弄',
					zip: 200333,
				},
			],
		}
	},
	methods: {},
	mounted() {},
	components: {},
}
</script>

<style scoped lang="less">
.icons {
	display: flex;
	margin-bottom: 20px;
	* {
		flex: 2;
		margin: 0 15px;
	}
	.search {
		flex: 3;
	}
	.btn {
		flex: 1;
	}
}
.desc {
	font-size: 12px;
}
</style>
