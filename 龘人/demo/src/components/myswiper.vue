<template>
  <div class="conter">
    <swiper :options="swiperOption" ref="mySwiper">
      <!--  @someSwiperEvent="callback" -->
      <!-- slides -->
      <swiper-slide>
        <img :src="img.one">
        <div class="slidetext">1</div>
      </swiper-slide>
      <swiper-slide><img :src="img.two"><div class="slidetext">2</div></swiper-slide>
      <swiper-slide><img :src="img.three"><div class="slidetext">3</div></swiper-slide>
      <!-- Optional controls -->
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      <div class="swiper-button-prev" slot="button-prev" @click="slidePrev"></div>
      <div class="swiper-button-next" slot="button-next" @click="slideNext"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      img:{
        one: require("../assets/img/recommend/one.png"), 
        two: require("../assets/img/recommend/two.png"), 
        three: require("../assets/img/recommend/three.png"), 

      },
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        // autoplay: 13000,//可选选项，自动滑动
        initialSlide :1,
        coverflow: {
          rotate: 90, //slide做3d旋转时Y轴的旋转角度。默认50。
          stretch: 0, //每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
          depth: -100, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
          modifier: 1, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
          slideShadows: true //开启slide阴影。默认 true。
        },
        effect: "coverflow", //切换效果
        slidesPerView: 3,
        centeredSlides: true,
        loop : true,
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(2, 1000, true)
    // this.swiper.enableMousewheelControl();
  },
  methods: {
    slidePrev() {
      this.swiper.slidePrev();
    },
    slideNext() {
      this.swiper.slideNext();
    },
  },
};
</script>

<style lang="scss" scoped>
// .swiper-wrapper {
//   height: 3.53rem;
//   line-height: 3.53rem;
//   .swiper-container {
//     height: 3.53rem;
//     line-height: 3.53rem;
//   }
// }
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slidetext{
  box-sizing: border-box;
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  position: relative;
  top: -0.5rem;
  font-size: 0.28rem;
  z-index: 5;
  // background-color: red;
}
</style>