<template>
	<div class="essay">
		<h2>Vue3 插件开发详解尝鲜版</h2>
		<div class="icons">
			<span> <i class="el-icon-date"></i>2020/8/1 </span>
			<span> <i class="el-icon-folder"></i>html vue </span>
			<span> <i class="el-icon-view"></i>阅读数 190 </span>
			<span> <i class="el-icon-notebook-1"></i>评论数 190 </span>
		</div>
		<!-- 内容 -->
		<div class="content">
			<h2>1</h2>
			<h2>2</h2>
			<h2>3</h2>
			<h2>4</h2>
			<h2>5</h2>
			<h2>1</h2>
			<h2>2</h2>
			<h2>3</h2>
			<h2>4</h2>
			<h2>5</h2>
			<h2>1</h2>
			<h2>2</h2>
			<h2>3</h2>
			<h2>4</h2>
			<h2>5</h2>
			<h2>1</h2>
			<h2>2</h2>
			<h2>3</h2>
			<h2>4</h2>
			<h2>5</h2>
			<h2>1</h2>
			<h2>2</h2>
			<h2>3</h2>
			<h2>4</h2>
			<h2>5</h2>
		</div>
		<el-divider></el-divider>
		<!-- 评论 -->
		<el-card class="box-card">
			<el-row :gutter="10">
				<el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
					<el-input
						v-model="input"
						placeholder="请输入昵称"
						class="input"
					></el-input>
					<div class="send">
						<el-button type="primary">点击发送</el-button>
					</div>
				</el-col>
				<el-col :xs="24" :sm="25" :md="12" :lg="12" :xl="12">
					<el-input
						v-model="input"
						type="textarea"
						placeholder="请输入评论"
						class="input"
					></el-input>
				</el-col>
			</el-row>
			<el-divider><i class="el-icon-edit"></i></el-divider>
			<CommentParent />
		</el-card>
	</div>
</template>

<script>
import CommentParent from '../mine/childComp/commentparent'
export default {
	name: 'Essay',
	data() {
		return {
            input:""
        }
	},
	methods: {},
	mounted() {},
	components: {
		CommentParent,
	},
}
</script>

<style scoped lang="less">
.essay {
	h2 {
		text-align: center;
		font-size: 25px;
		color: #606266;
		margin-bottom: 15px;
	}

	.icons {
		height: 30px;
		line-height: 30px;
		color: rgb(153, 153, 153);
		font-size: 13px;
		margin-bottom: 25px;
		text-align: center;
		span {
			margin-right: 10px;
			i {
				padding-right: 5px;
			}
		}
	}
}
.input {
	margin-bottom: 15px;
}
.send {
	display: flex;
	justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}
</style>
