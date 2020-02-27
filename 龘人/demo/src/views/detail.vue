<template>
  <div class="detailt">
    <my-swipe :data="swipetdata" :show="swipeshow"></my-swipe>

    <div class="classic">
        <div class="left">
          <div class="l">
            <img :src="imgurl">
          </div>
          <div class="r">
            <div>ysdud</div>
            
            <div class="add">
              <span class="b">1200</span>
              <span class="t">+</span>
            </div>

            <div>
              <van-rate v-model="rate" />
            </div>
          </div>
        </div>
        <div class="right">
          <van-button type="default" size="normal">kaj</van-button>
        </div>
    </div>

    <div class="title">sgaashgsgaiguig</div> 

    <div class="swipet min_swipt">
      <my-swipe :data="swipetdataone" :show="swipeshowone"></my-swipe>
    </div>

    <div class="title">sgaashgsgaiguig</div>

    <div class="gametext">
      gadhda sajid alsjds adjls daj  gadhda sajid alsjds adjls daj  gadhda 
      sajid alsjds adjls daj gadhda sajid alsjds adjls daj gadhda sajid alsjds 
      adjls daj gadhda sajid alsjds adjls daj gadhda sajid alsjds adjls daj gadhda 
      sajid alsjds adjls daj
    </div> 

    <my-title :title="recommend"></my-title> 

    <div class= 'myswiper'>
        <myswiper></myswiper>
    </div>

  </div>
</template>

<script>
import swipe from '@/components/swipe.vue'
import title from '@/components/title.vue'
import myswiper from '@/components/myswiper.vue'
export default {
  name: 'detail',
  data() {
    return {
      swipetdata: [
        {
          img: require("../assets/img/banner.png"),
          text: '广告'
        },
        {
          img: require("../assets/img/banner.png"),
          text: '广告s'
        },
      ],
      imgurl: require('../assets/img/detal/banner.png'),
      rate: 5,
      swipetdataone: [
        {
          img: require("../assets/img/detal/banner.png"),
        },
        {
          img: require("../assets/img/detal/banner.png"),
        },
      ],
      swipeshow: false,
      swipeshowone: true,
      recommend: 'recommend',
    };
  },
  components: {
    'my-swipe': swipe,
    'my-title': title,
    'myswiper': myswiper,
  },
}
</script>

<style lang="scss" scoped>
.classic{ 
  box-sizing: border-box;
  margin: 0.20rem;
  padding: 0.16rem 0.46rem 0.16rem 0.31rem;
  height: 1.72rem;
  background-color: #515151;
  display: flex;
  justify-content: space-between;
  .left{
    width: 4.5rem;
      .l{
        box-sizing: border-box;
        width: 1.2rem;
        height: 100%;
        margin-right: 0.5rem;
        float: left;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .r{
        box-sizing: border-box;
        // width: 2.8rem;
        height: 100%;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.18rem 0 0.30rem 0;
        font-size: 0.3rem;
        .add{
          height: 0.34rem;
          line-height: 0.34rem;
          > .b{
            display: block;
            float: left;
            font-size: 0.18rem;
            line-height: 0.34rem;
          }
          > .t{
            display: block;
            float: left;
            font-size: 0.14rem;
            line-height: 0.14rem;
          }
        }
      }
  }
  .right{
    width: 1.37rem;
    display: flex;
    align-items: center;
    // text-align: right;
    justify-content: flex-end;
    .van-button{
      line-height: 0.54rem;
      width: 1.37rem;
      height: 0.54rem;
      font-size: 0.3rem;
      border-radius: 0.05rem;
    }
  }
}
.title{
  box-sizing: border-box;
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 0.3rem;
  background-color: #515151;
}
.gametext{
  height: 1.26rem;
  font-size: 0.3rem;
  text-align: left;
  line-height: 0.42rem;
  padding: 0.2rem;
  word-wrap:break-word;
  overflow: auto;
}
.min_swipt{ 
  box-sizing: border-box;
  margin: 0.2rem;
  height: 2.33rem;
  background-color: #515151;
  overflow: hidden;
}
.min_swipt .my-swipe{
    height: 2.33rem;
    line-height: 2.33rem;
}

.min_swipt .my-swipe .van-swipe-item{
    height: 2.33rem;
    line-height: 2.33rem;
}
</style>