<template>
  <div>
    <!-- 轮播图 -->
    <div class="block">
      <el-carousel type="card">
        <el-carousel-item v-for="item in swiperImg" :key="item.index">
          <el-image fit="contain" :src="item" class="swiperImg"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>

    
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      swiperImg:[
        "http://qea871syu.bkt.clouddn.com/swiper_1.jpg",
        "http://qea871syu.bkt.clouddn.com/swiper_2.jpg",
        "http://qea871syu.bkt.clouddn.com/swiper_3.jpg",
        "http://qea871syu.bkt.clouddn.com/swiper_4.jpg"
      ]
    };
  },
  methods: {},
  mounted() {},
  components: {},
};
</script>

<style scoped>
.block{
  margin-top: -3px;
}
.swiperImg{
  width: 100;
}
</style>