<template>
	<div class="comment-parent">
		<Comment/>
        <el-divider class="line"></el-divider>
        <CommentChild/>
	</div>
</template>

<script>
import CommentChild from './commentchild'
import Comment from './comment'
export default {
	name: 'CommentParent',
	data() {
		return {
			
		}
	},
	methods: {
	
	},
	mounted() {},
	components: {CommentChild,Comment},
}
</script>

<style scoped lang="less">
.line{
    background-color: #409EFF;
}
</style>
