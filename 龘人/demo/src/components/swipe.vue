<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators= "show">
    <van-swipe-item v-for="( item, i ) in data" :key="i">
      
      <div class="text">{{ item.text }}</div>
      <img :src="item.img">
      <!--  -->
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ['data','show']
};
</script>


<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  // text-align: center;
  // background: url(../assets/img/banner.png) no-repeat center center;
  // background-size: 100% 100%;
  .van-swipe-item{
    position: relative;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
  .text{
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 0.62rem;



  }
}
</style>