<template>
  <div>
    <tab-bar id="main-tab-bar" class="tab-bar">
      <div class="logo" @click="drawer = true">Blog</div>
      <tab-bar-item path="/home" icon="el-icon-s-home" title="网站首页" />
      <tab-bar-item path="/article" icon="el-icon-document" title="文章专栏" />
      <tab-bar-item path="/resources" icon="el-icon-upload" title="资源分享" />
      <tab-bar-item path="/timeline" icon="el-icon-sunny" title="点点滴滴" />
      <tab-bar-item path="/about" icon="el-icon-share" title="关于本站" />
      <tab-bar-item path="/mine" icon="el-icon-phone" title="给我留言" />
      <div class="login">
        <el-tooltip class="item" effect="dark" content="点击登录"  placement="left-start">
          <el-button type="info" @click="dialogFormVisible = true" circle>
            <i class="el-icon-user-solid"></i>
          </el-button>
        </el-tooltip>
      </div>
    </tab-bar>

<!-- 弹出登录表单 -->
<el-dialog title="登录" :visible.sync="dialogFormVisible">
  <div>
    登录表单后期制作
  </div>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>

<!-- 左侧导航 -->
    <el-drawer title="我是标题" direction="ltr" :visible.sync="drawer" :with-header="false" style="width:800px;">
      <left-bar/>
    </el-drawer>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
import LeftBar from "components/content/leftbar/LeftBar";

export default {
  name: "MainTabBar",
  data() {
    return {
      drawer: false,
      dialogFormVisible:false
    };
  },
  methods: {},
  mounted() {},
  components: {
    TabBar,
    TabBarItem,
    LeftBar
  },
};
</script>

<style scoped>
.logo {
  font-size: 30px;
  width: 150px;
  padding-left: 20px;
  font-weight: 700;
  color: var(--color-theme);
  cursor: pointer;
}
.tab-bar {
  display: flex;
  background-color: var(--app-theme);
  width: 100vw;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  justify-items: center;
  align-items: center;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  border-bottom: 2px solid var(--color-theme);
  
}
.login {
  width: 290px;
  display: flex;
  padding-right: 50px;
  justify-content: flex-end;
  align-items: center;
}

</style>