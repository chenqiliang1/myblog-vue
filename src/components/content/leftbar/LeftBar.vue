<template>
  <div class="left-bar">
    <div class="top">
      <div class="avtar">
        <el-avatar :size="60" :src="avatar"></el-avatar>
      </div>
      <div class="nick_name">
        <h2>悲伤的狗子</h2>
        <el-tooltip class="item" effect="dark" content="努力吧！向前冲" placement="top">
          <p>努力吧！向前冲</p>
        </el-tooltip>
      </div>
    </div>
    <div class="botton">
      <ul class="icons">
        <li>
          <div>
            <a href="javascript:;" class="icon active">
              <i class="el-icon-setting"></i>
              <span>后台管理</span>
            </a>
          </div>
        </li>
        <li>
          <div>
            <a href="javascript:;" class="icon">
              <i class="el-icon-message"></i>
              <el-badge :value="12" class="item">
                <span>我的留言</span>
              </el-badge>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftBar",
  data() {
    return {
      avatar:
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1061259528,9372830&fm=26&gp=0.jpg",
    };
  },
  methods: {},
  mounted() {},
  components: {},
};
</script>

<style scoped>
.left-bar {
  width: 100%;
  height: 100%;
  background-color: var(--app-theme) !important;
}
.left-bar > div {
  width: 100%;
}
.top {
  height: 35vh;
  background: url("~assets/img/bg_left_bar.jpg");
  background-size: 100% 100%;
  position: relative;
}
.botton {
  height: 65vh;
}
.avtar {
  position: absolute;
  top: 20px;
  left: 20px;
}
.nick_name {
  width: 100%;
  position: absolute;
  bottom: 30px;
  left: 20px;
}
.nick_name > h2 {
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
}
.nick_name > p {
  width: 200px;
  font-size: 14px;
  color: #ccc !important;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
}
.icons,
.icons > li {
  width: 100%;
}
.icons > li {
  height: 50px;
  font-size: 17px;
  font-weight: 700;
}
.icons > li > div {
  height: 100%;
}
.icons > li > div > a {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
}
.icons > li > div > a:hover {
  background-color: rgb(93,93,93);
}

.active::before{
  content: "";
  display: block;
  width: 85%;
  height: 100%;
  background-color: rgb(177,175,191);
  opacity: .5;
  position: absolute;
}
.active::after{
  content: "";
  display: block;
  width: 50px;
  height: 50px;
  left: 75%;
  border-radius: 50%;
  opacity: .2;
  background-color: rgb(177,175,191);
  
  position: absolute;
}
i {
  padding-right: 10px;
  padding-left: 20px;
}
</style>