<template>
  <div id="app">
    <main-tab-bar/>
    <keep-alive>
      <router-view class="main"/>
    </keep-alive>
  </div>
</template>
<script>
import MainTabBar from "components/content/maintabbar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>
<style lang="less">
@import "assets/css/base.css";
html,body{
  background-color: var(--app-theme);
  color: var(--font-color);
}
.main{
  width: 80%;
  margin: 0 auto;
  margin-top: 60px;
  // border-left: 3px solid #ccc;
  // border-right: 3px solid red;
  height: auto;
  box-shadow:0 2rpx 4rpx rgba(0, 0, 0, .3);
}
</style>
