<template>
	<div id="app" >
		<main-tab-bar />
		<keep-alive>
			<router-view class="main" />
		</keep-alive>
        <keep-alive>
            <router-view class="Admin" name="Admin"/>
        </keep-alive>
		<main-bottom class="bottom"/>
        <back-top/>
	</div>
</template>
<script>
import BackTop from 'components/content/backtop/BackTop'
import MainTabBar from 'components/content/maintabbar/MainTabBar-1'
import MainBottom from 'components/content/mainbottom/MainBottom'
export default {
	name: 'app',
	components: {
        MainTabBar,
        MainBottom,
        BackTop
	},
}
</script>
<style lang="less">
@import 'assets/css/base.css';
@import 'assets/css/tocbot.css';
html,
body {
	background-color: rgb(236, 236, 236);

	overflow-x: hidden;
}
#app {
	width: 100vw;
}
.main {
	width: 80%;
	margin: 0 auto;
	margin-top: 60px;
	// border-left: 3px solid rgb(157,157,155);
	// border-right: 3px solid rgb(157,157,155);
	padding: 0 10px;
	height: auto;
	overflow: hidden;
	box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.3);
}
.Admin{
    // height:80vh;
    padding-right: 20px;
    // height: auto;
}
</style>
