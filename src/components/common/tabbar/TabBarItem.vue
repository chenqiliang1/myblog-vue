<template>
  <div class="tab-bar-item" :class="{active:isActive}" @click="itemClick">
    <a href="javascript:;">
      <i :class="icon"></i>
      <span class="title">{{title}}</span>
    </a>
  </div>
</template>

<script>
 export default {
    name: "TabBarItem",
    props: {
      // 路徑
      path: String,
      // 文本標題
      title:{
        type:String,
        default:"默認標題"
      },
      // 圖標樣式
      icon:String
    },
    data() {
      return {
        
      }
    },
    computed: {
      isActive() {
        // 通過判斷url路徑是否包含這個item的path，來決定是否active
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods: {
      // 點擊改變路徑
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
.tab-bar-item{
  font-size: 15px;
  height: 55px;
  line-height: 55px;
  cursor: pointer;
  flex: 1;
}
.tab-bar-item:hover{
  background-color: var(--color-theme);
}
.active{
   background-color: var(--color-theme);
}
a{
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--font-color);
}
span{
  padding-left: 5px;
}
</style>