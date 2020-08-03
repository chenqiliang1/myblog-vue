<template>
	<div class="note">
		<el-row :gutter="10">
			<el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
				<el-card class="box-card">
					<h2 class="title">笔记（1）</h2>
					<div class="bg-purple">
                        ndkjfbfkb
                    </div>
                    <div class="icons">
                        <span><i class="el-icon-folder"></i> HTML JAVASCRIPT</span>
                    </div>
                    <div class="time">2020/8/1 17:34:60</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: 'Note',
	data() {
		return {}
	},
	methods: {},
	mounted() {},
	components: {},
}
</script>

<style scoped lang="less">
.box-card {
    margin-bottom: 25px;
    .title{
        font-weight: 700;
        color: black;
        text-align: center;
        margin-bottom: 5px;
    }
	.bg-purple {
        background: #d3dce6;
        padding: 5px 10px;
        font-size: 14px;
        line-height: 16px;
        color: rgb(85,107,161);
        // width: 100%;
        // overflow: hidden;
    }
    .icons{
        font-size: 12px;
        margin: 10px 0;
        color: rgb(182,182,182);
        i{
            padding-right: 5px;
        }
    }
    .time{
        width: 100%;
        text-align: center;
        font-size: 12px;
        color: rgb(182,182,182);
    }
}
</style>
