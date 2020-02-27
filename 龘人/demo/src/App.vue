<template>
  <div id="app">
    <van-nav-bar :title="title" left-arrow:false>
      <van-icon name="home-o" slot="left" v-if="ificon"/>
    </van-nav-bar>
    <router-view></router-view>

    <!-- <hg-dialog></hg-dialog> -->
  </div>
</template>


<script>
// import Dialog from '@/components/Dialog.vue'
export default {
  name: "App",
  data() {
    return {
      ificon: false,
      title: 'home'
    };
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        // console.log(val.path);
        if (val.path === "/detail") {
          this.title = 'detail',
          this.ificon = true
        } else if (val.path === "/category") {
          this.title = 'category',
          this.ificon = true
        }else{
          this.title = 'home',
          this.ificon = false
        }
          
      },
      // 深度观察监听
      // deep: true
    }
  },
  // props: ['a'],
  components: {
    // 'hg-dialog': Dialog
  },
  methods: {
    amet() {
      console.log("app");
    }
  }
};
</script>

<style lang="scss">
html,body{
  height: 100%;
  width: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #2A2A2A;
  max-width: 730px;
  margin: 0 auto;
  min-height: 100%;
}

</style>
