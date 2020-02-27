<template>
  <div class="about">
    <my-swipe :data="swipetdata" :show="swipeshowone"></my-swipe>

    <div class="flex title">
      <div>popular</div>
      <div>classic</div>
      <div>recommend</div>
    </div>

    <div class="flex main">
      <div v-for="(item, i) in data" :key="i">
        <img :src="item.img"/>
        <div>{{ item.text }}</div>
      </div>
    </div>

    <!-- 处理留白 -->
    <div class="magin_b"></div>
  </div>
</template>

<script>
import swipe from "@/components/swipe.vue";
export default {
  data() {
    return {
      swipetdata: [
        {
          img: require("../assets/img/banner.png"),
          text: "广告"
        },
        {
          img: require("../assets/img/banner.png"),
          text: "广告s"
        }
      ],
      data:[
        {
          img: require('../assets/img/banner.png'),
          text: "sajks"
        },
        {
          img: require('../assets/img/banner.png'),
          text: "sajks"
        },
        {
          img: require('../assets/img/banner.png'),
          text: "sajks"
        },
        {
          img: require('../assets/img/banner.png'),
          text: "sajks"
        }
      ],
      swipeshowone: false,
    };
  },
  components: {
    "my-swipe": swipe
  }
};
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  height: 100%;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.title {
  box-sizing: border-box;
  // width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  margin: 0.2rem 0.2rem 0.1rem;
  background-color: #515151;
  div {
    font-size: 0.3rem;
  }
}
.main {
  box-sizing: border-box;
  height: 4.79rem;
  margin: 0 0.2rem;
  padding-bottom: 0.32rem;
  flex-wrap: wrap;
  background-color: #515151;
  > div {
    box-sizing: border-box;
    width: 3.4rem;
    padding: 0.18rem 0 0 0.18rem;
    // background-color: #999999;
    position: relative;
    color: #2a2a2a;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    > div {
      position: absolute;
      bottom: 0;
      left: 0.18rem;
      width: 3.22rem;
      height: 0.43rem;
      line-height: 0.43rem;
      font-size: 0.28rem;
      background-color: rgba($color: #fff, $alpha: 0.52)
    }
  }
}
</style>