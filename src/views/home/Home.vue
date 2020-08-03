<template>
  <div class="home">
    <!-- 轮播图 -->
    <div class="block">
      <el-carousel  trigger="click" height="70vh">
        <el-carousel-item v-for="item in swiperImg" :key="item.index">
          <el-image fit="contain" :src="item" class="swiperImg"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 公告 -->
    <div class="public">
      <i class="el-icon-s-opportunity"></i>
      <el-carousel height="35px" direction="vertical">
        <el-carousel-item v-for="item in publicText" :key="item" class="public-text">
          <h3 class="medium" @click="open(item)">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <hr class="hr" />

     <el-divider class="fav"><h2 class="h2">博主推荐</h2></el-divider>
    <!-- 文章列表 -->
    <div class="article-wrapper">
      <div class="article-list">
        <Articles/>
      </div>

    </div>
  </div>
</template>

<script>

import Articles from "../article/childComp/articles";
export default {
  name: "Home",
  data() {
    return {
      swiperImg: [
        "http://qea871syu.bkt.clouddn.com/swiper_1.jpg",
        "http://qea871syu.bkt.clouddn.com/swiper_2.jpg",
        "http://qea871syu.bkt.clouddn.com/swiper_3.jpg",
        "http://qea871syu.bkt.clouddn.com/swiper_4.jpg",
      ],
      publicText: ["博客正在搭建中", "很好很好很好", "框架还不错"],
      activeName: "first",
    };
  },
  methods: {
    open(item) {
      this.$alert(item, "公告", {
        confirmButtonText: "确定",
      });
    },
  },
  mounted() {},
  components: {
    Articles
  },
};
</script>

<style scoped lang="less">
.block {
  margin-top: -3px;
  width: 100%;
}
.swiperImg {
  width: 100%;
  z-index: 0 !important;
}
.public {
  width: 100%;
  height: 35px;
  line-height: 35px;
  /* border-bottom: 2px solid #ccc; */
  position: relative;
  margin-top: 30px;
  z-index: 0 !important;
}
.public > i {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(30, 159, 255);
  font-size: 18px;
}
.public-text {
  cursor: pointer;
  padding-left: 20px;
}
.hr {
  width: 98%;
  margin-bottom: 20px;
}
.article-wrapper {
  display: flex;
  width: 100%;
  overflow: hidden;
}

.article-list {
  flex: 6;
  // width: 50px;
  width:80%;
  padding: 0 15%;
  height: auto;
  margin: 0 auto;
}
.fav{
  margin: 50px 0;
  margin-bottom: 70px;
  .h2{
  font-size: 15px;
  color: rgb(32,160,255);
  padding: 5px 10px;
}
}

</style>