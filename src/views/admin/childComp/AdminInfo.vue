<template>
	<div class="admininfo">
		<el-tabs type="border-card">
			<el-tab-pane label="个人信息">
				<UserInfo/>
			</el-tab-pane>
            <el-tab-pane label="网站信息">
				<SiteInfo/>
			</el-tab-pane>
        </el-tabs>
	</div>
</template>

<script>
import UserInfo from './UserInfo'
import SiteInfo from './SiteInfo'
export default {
	name: 'AdminInfo',
	data() {
		return {
			activeNames: ['0'],
		}
	},
	methods: {
		
	},
	mounted() {},
	components: {
        UserInfo,
        SiteInfo
    },
}
</script>

<style scoped lang="less">


</style>
