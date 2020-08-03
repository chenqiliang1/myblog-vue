<template>
	<div>
		<!-- 搜索框 -->
		<el-row :gutter="10">
			<el-col :span="18">
				<el-input v-model="input" placeholder="请输入关键字"></el-input>
			</el-col>
			<el-col :span="6">
				<div class="btn">
					<el-button type="success" icon="el-icon-search"></el-button>
				</div>
			</el-col>
		</el-row>

		<!-- 分类栏 -->
		<div class="category">
			<el-card class="box-card">
				<div slot="header" class="clearfix">
					<span>分类导航</span>
				</div>

				<el-row :gutter="5">
					<el-col :span="12" v-for="o in 4" :key="o">
                        <div class="btn cate-btn"><el-button size="medium" >{{ o }}(0nkbhj)</el-button></div>
                    </el-col>
				</el-row>
			</el-card>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Category',
	data() {
		return {
			input: '',
		}
	},
	methods: {},
	mounted() {},
	components: {},
}
</script>

<style scoped>
.btn {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.cate-btn{
    margin-bottom: 10px;
}
.category {
	margin: 20px 0;
}
</style>
