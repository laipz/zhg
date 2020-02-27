<template>
  <div class="home">
    <my-swipe :data="swipetdataone" :show="swipeshowone"></my-swipe>

    <my-title :title="popular"></my-title>
    <div class="popular">
      <popular></popular> 
    </div>  

    <my-title :title="classic"></my-title> 
    <div class="classic">
      <classic></classic> 
    </div>  

    <my-swipe :data="swipetdatatwo" :show="swipeshowtwo"></my-swipe>
    <my-title :title="recommend"></my-title> 

    <div class= 'myswiper'>
        <myswiper></myswiper>
    </div>

    <!-- 处理留白 -->
    <div class="magin_b"></div>
  </div>
</template>

<script>
import swipe from '@/components/swipe.vue'
import title from '@/components/title.vue'
import popular from '@/components/home/popular.vue'
import classic from '@/components/home/classic.vue'
import myswiper from '@/components/myswiper.vue'
export default {
  name: 'home',
  data() {
    return {
      popular: 'popular',
      classic: 'classic',
      recommend: 'recommend',
      swipetdataone: [
        {
          img: require("../assets/img/banner.png"),
        },
        {
          img: require("../assets/img/banner.png"),
        },
        {
          img: require("../assets/img/banner.png"),
        },
      ],
      swipetdatatwo: [
        {
          img: require("../assets/img/banner.png"),
          text: '广告'
        },
        {
          img: require("../assets/img/banner.png"),
          text: '广告'
        },
        {
          img: require("../assets/img/banner.png"),
          text: '广告'
        },
      ],
      swipeshowone: false,
      swipeshowtwo: false,
    };
  },
  components: {
    'my-swipe': swipe,
    'my-title': title,
    'popular': popular,
    'classic': classic,
    'myswiper': myswiper,
  },
  props: ['id'],
  methods:{
    amet(){
      console.log("home")
    }

  },
  created(){
  }
}
</script>


<style lang="scss" scoped>
.popular,.classic{ 
  box-sizing: border-box;
  margin: 0 0.20rem;
  padding: 0.16rem 0.16rem 0.16rem;
  background-color: #515151;
  // overflow: hidden;
}
.classic{
  margin-bottom: 0.2rem
}

</style>