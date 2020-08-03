<template>
  <div class="article-list">
    <el-card :body-style="{ padding: '0px' }" class="article" shadow="always">
      <img
        src="https://img.debuginn.cn/wp-content/uploads/2020/07/debuginn-banner-1.jpg"
        class="image"
      />
      <div class="text">
        <a href="javascript:;">
          <h2>标题党</h2>
          <p>dfiohsgbnsjgkbbbbbbbbbbb</p>
        </a>
      </div>
      <div class="content">
        <div class="bottom clearfix">
          <time class="time">
            <span class="tag">
              <el-tag effect="dark" size="small">推荐</el-tag>
            </span>
            <span class="tag">
              <el-tag effect="dark" size="small" type="danger">置顶</el-tag>
            </span>
            <span class="tag info">
              <i class="el-icon-aim"></i>2020/7/31
            </span>
            <span class="tag info">
              <i class="el-icon-view"></i>500
            </span>
            <span class="tag info">
              <i class="el-icon-paperclip"></i>Java后端 HTML
            </span>
          </time>
          <el-button type="text" class="button">去围观</el-button>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }" class="article" shadow="always">
      <img
        src="https://img.debuginn.cn/wp-content/uploads/2020/07/debuginn-banner-1.jpg"
        class="image"
      />
      <div class="text">
        <a href="javascript:;">
          <h2>标题党</h2>
          <p>dfiohsgbnsjgkbbbbbbbbbbb</p>
        </a>
      </div>
      <div class="content">
        <div class="bottom clearfix">
          <time class="time">
            <span class="tag">
              <el-tag effect="dark" size="small">推荐</el-tag>
            </span>
            <span class="tag">
              <el-tag effect="dark" size="small" type="danger">置顶</el-tag>
            </span>
            <span class="tag info">
              <i class="el-icon-aim"></i>2020/7/31
            </span>
            <span class="tag info">
              <i class="el-icon-view"></i>500
            </span>
            <span class="tag info">
              <i class="el-icon-paperclip"></i>Java后端 HTML
            </span>
          </time>
          <el-button type="text" class="button">去围观</el-button>
        </div>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }" class="article" shadow="always">
      <img
        src="https://img.debuginn.cn/wp-content/uploads/2020/07/debuginn-banner-1.jpg"
        class="image"
      />
      <div class="text">
        <a href="javascript:;">
          <h2>标题党</h2>
          <p>dfiohsgbnsjgkbbbbbbbbbbb</p>
        </a>
      </div>
      <div class="content">
        <div class="bottom clearfix">
          <time class="time">
            <span class="tag">
              <el-tag effect="dark" size="small">推荐</el-tag>
            </span>
            <span class="tag">
              <el-tag effect="dark" size="small" type="danger">置顶</el-tag>
            </span>
            <span class="tag info">
              <i class="el-icon-aim"></i>2020/7/31
            </span>
            <span class="tag info">
              <i class="el-icon-view"></i>500
            </span>
            <span class="tag info">
              <i class="el-icon-paperclip"></i>Java后端 HTML
            </span>
          </time>
          <el-button type="text" class="button">去围观</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ArticleList",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  components: {},
};
</script>

<style scoped lang="less">
.article {
  width: 100%;
  margin-bottom: 40px;
  border-color: black;
  position: relative;
  .text {
    z-index: 2;
    color: white;
    width: 100%;
    height: 120px;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    padding: 17px;
    top: 273px;
    a {
      opacity: 1;
      h2 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 15px;
      }
    }
  }
}
.time {
  font-size: 13px;
  color: white;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  height: 393px;
  display: block;
  overflow: hidden;

  img {
    width: 100%;
  }
}
.content {
  padding: 14px;
  background-color: rgb(66, 66, 66);
  padding-top: 5px;
  span {
    color: white;
    font-weight: 700;
  }
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.tag {
  margin-right: 15px;
}
.info {
  font-size: 16px;
  i {
    padding-right: 5px;
  }
}
</style>