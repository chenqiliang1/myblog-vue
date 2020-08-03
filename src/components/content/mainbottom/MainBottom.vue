<template>
	<div>
		<el-menu mode="horizontal" background-color="rgb(44,62,80)" class="bottom">
            <p class="top">Copyright @ 2020 ChenQiLiang博客 Design By ChenqiLiang</p>
            <p>桂ICP备18009506号</p>
        </el-menu>
	</div>
</template>

<script>
export default {
	name: '',
	data() {
		return {}
	},
	methods: {},
	mounted() {},
	components: {},
}
</script>

<style scoped lang="less">
.bottom{
    margin: 0;
    padding: 0;
    // padding-top: 10px;
    .top{
        padding-top: 10px;
    }
    p{
        text-align: center;
        padding-bottom: 10px;
        font-size: 14px;
        color: rgb(225,242,242);
    }
}
</style>
