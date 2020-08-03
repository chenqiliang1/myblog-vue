<template>
	<div class="admin">
		<el-row :gutter="0">
			<el-col :span="3">
				<el-menu background-color="rgb(236,236,236)"  active-text-color="#409EFF" class="left-meun" :router="true">
					<el-menu-item index="/admin/adminindex">
						<i class="el-icon-s-home"></i>
						<span slot="title">管理首页</span>
					</el-menu-item>
					<el-menu-item index="/admin/admininfo">
						<i class="el-icon-s-custom"></i>
						<span slot="title">信息管理</span>
					</el-menu-item>
					<el-menu-item index="/admin/adminNews">
						<i class="el-icon-date"></i>
						<span slot="title">消息管理</span>
					</el-menu-item>
                    <el-menu-item index="/admin/">
						<i class="el-icon-cpu"></i>
						<span slot="title">Bug管理</span>
					</el-menu-item>
					<el-menu-item index="/admin/">
						<i class="el-icon-tickets"></i>
						<span slot="title">文章管理</span>
					</el-menu-item>
					<el-menu-item index="/admin/">
						<i class="el-icon-setting"></i>
						<span slot="title">其他设置</span>
					</el-menu-item>
				</el-menu></el-col
			>
			<el-col :span="21">
				<router-view class="admin-right" name="admin_icon"></router-view>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: 'Admin',
	data() {
		return {}
	},
	methods: {},
	mounted() {},
	components: {},
}
</script>

<style scoped lang="less">
.left-meun {
    height: 80vh;
    

}
.admin-right{
    // background-color: ;
    padding: 10px 60px;
}
</style>
