<template>
	<div class="comment-child">
		<Comment/>
        <el-divider class="line"></el-divider>
	</div>
</template>

<script>
import Comment from './comment'
export default {
	name: 'CommentChild',
	data() {
		return {
			
		}
	},
	methods: {
		
	},
	mounted() {},
	components: {
        Comment
    },
}
</script>

<style scoped lang="less">

.comment-child {
	padding-left: 5%;
	i {
		color: rgb(198, 226, 255);
	}
}

.line{
    background-color: #E6A23C;
}
</style>
