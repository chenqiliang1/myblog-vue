<template>
  <div class="article">
    <!-- 面包屑导航 -->
    <div class="nav-mianbao">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">网站首页</el-breadcrumb-item>
        <el-breadcrumb-item>文章专栏</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 文章列表 分类 搜索  一行24份-->
    <div class="article-main">
      <el-row :gutter="50">
        <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
          <articles />
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
          <Category/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Articles from "./childComp/articles";
import Category from './childComp/category';
export default {
  name: "Article",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  components: {
    Articles,
    Category
  },
};
</script>

<style scoped lang="less">
.article {
  .nav-mianbao {
    background-color: rgb(255, 255, 255);
    padding: 10px 15px;
    border-left: 5px solid var(--color-theme);
    margin-bottom: 45px;
    // margin-top: 20px;
  }
}

.article-main {
  width: 100%;
  
}
</style>