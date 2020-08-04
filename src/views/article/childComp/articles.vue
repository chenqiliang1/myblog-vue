<template>
  <div class="articles">
    <div class="article-item">
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
        <div class="left-a">
          <h2 class="title">
              <router-link to="/essay/1"><a href="javascript:;">Vue3插件开发详解尝鲜版</a></router-link>
          </h2>
          <div class="icons">
            <span>
              <i class="el-icon-date"></i>2020/8/1
            </span>
            <span>
              <i class="el-icon-folder"></i>html vue
            </span>
            <span>
              <i class="el-icon-view"></i>阅读数 190
            </span>
            <span>
              <i class="el-icon-notebook-1"></i>评论数 190
            </span>
          </div>
          <div
            class="content"
          >在前后端分离的开发中，通过 Restful API 进行数据交互时，如果没有对 API 进行保护，那么别人就可以很容易地获取并调用这些 API 进行操作。那么服务器端要如何进行鉴权呢？</div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <div class="right-a">
          <img src="https://lin-xin.gitee.io/images/post/vue_plugin.png" alt />
        </div>
      </el-col>
      <el-col :span="24">
        <el-button type="success" class="btn" round>阅读全文 》</el-button>
      </el-col>
    </div>

    <div class="article-item">
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
        <div class="left-a">
          <h2 class="title">
            <router-link to="/essay/1"><a href="javascript:;">Vue3插件开发详解尝鲜版</a></router-link>
          </h2>
          <div class="icons">
            <span>
              <i class="el-icon-date"></i>2020/8/1
            </span>
            <span>
              <i class="el-icon-folder"></i>html vue
            </span>
            <span>
              <i class="el-icon-view"></i>阅读数 190
            </span>
            <span>
              <i class="el-icon-notebook-1"></i>评论数 190
            </span>
          </div>
          <div
            class="content"
          >在前后端分离的开发中，通过 Restful API 进行数据交互时，如果没有对 API 进行保护，那么别人就可以很容易地获取并调用这些 API 进行操作。那么服务器端要如何进行鉴权呢？</div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <div class="right-a">
          <img src="http://qea871syu.bkt.clouddn.com/swiper_1.jpg" alt="">
        </div>
      </el-col>
      <el-col :span="24">
        <el-button type="success" class="btn" round>阅读全文 》</el-button>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  components: {},
};
</script>

<style scoped lang="less">
a{
    color: var(--color-text);
}
.article-item {
    // margin-bottom: 20px;

  .btn{
    margin: 10px 0;
    margin-bottom: 80px;
  }
  .content {
    font-size: 15px;
    line-height: 25px;
    color: rgb(85, 85, 85);
  }
  .left-a {
    h2 {
      font-weight: 400;
      font-size: 25px;
      margin-bottom: 15px;
    }
  }
  .icons {
    height: 30px;
    line-height: 30px;
    color: rgb(153, 153, 153);
    font-size: 13px;
    margin-bottom: 25px;
    span {
      margin-right: 10px;
      i {
        padding-right: 5px;
      }
    }
  }
  .right-a{
    img{
      width: 100%;
      transition: 0.5s all;
      cursor: pointer;
    }
    img:hover{
      transform: scale(1.2);
    }
  }
}
</style>