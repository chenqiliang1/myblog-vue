<template>
	<div class="about">
		<el-row :gutter="35">
			<el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<h2 class="title">关于我</h2>
					</div>
					<div class="text item">
						<h2>即将大二的学生</h2>
						<h2>对未来很迷茫</h2>
						<h2>不知道怎么去进步</h2>
						<h2>总是约束不了自己</h2>
						<h2>唉唉唉！！！</h2>
						<h2>冲冲冲！向前冲冲冲吧</h2>
						<h2>冲</h2>
						<h2>冲</h2>
						<h2>冲</h2>
						<h2>冲</h2>
						<h2>冲</h2>
						<h2>冲</h2>
					</div>
				</el-card>
			</el-col>
			<el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
				<el-card>
					<div class="avatar">
						<el-avatar :size="100"
							src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
						></el-avatar>
					</div>
                    <h2 class="nikename">CQL</h2>
                    <p class="fav-c">不贪婪，不奢求，随遇而安，知足常乐</p>
                    <el-divider><i class="el-icon-loading"></i></el-divider>
                    <div class="icons">
                        <a href="javascript:;"><i class="el-icon-sunrise"></i>QQ</a>
                        <a href="javascript:;"><i class="el-icon-sunrise-1"></i>GIT</a>
                        <a href="javascript:;"><i class="el-icon-sunny"></i>WeiChat</a>
                    </div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: 'About',
	data() {
		return {}
	},
	methods: {},
	mounted() {},
	components: {},
}
</script>

<style scoped lang="less">
.about {
	margin-bottom: 30px;
}
.text {
	font-size: 14px;
	h2 {
		margin: 15px 0;
		font-size: 16px;
	}
}

h2 {
	font-weight: 700;
}
.title {
	font-size: 25px;
}
.avatar{
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    // height: 150px;
}
.nikename{
    font-size: 25px;
    text-align: center;
    margin: 15px 0;
}
.fav-c{
    font-size: 14px;
    
}
.icons{
    display: flex;
    a{
        flex: 1;
        i{
            padding-right: 5px;
        }
    }
}
</style>
