<template>
  <div class="myclassic">
    <div class="left">
      <img :src="imgs.one">
      <div class="title">{{ title.one }}</div>
    </div>
    <div class="right">
      <div class="top">
        <img :src="imgs.two">
        <div class="title">{{ title.two }}</div>
      </div>
      <div class="bottom">
        <img :src="imgs.three">
        <div class="title">{{ title.three }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: {
        one: require('../../assets/img/home/classic/one.png'),
        two: require('../../assets/img/home/classic/two.png'),
        three: require('../../assets/img/home/classic/three.png'),
      },
      title: {
        one: 'jsai',
        two: 'jsai',
        three: 'jsai',
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.myclassic{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  .left{
    width: 2.76rem;
    height: 3.52rem;
    position: relative;
  }
  .right{
    width: 3.64rem;
    height: 3.52rem;  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top,.bottom{
      height: 1.71rem;
    position: relative;

    }
    .bottom{
    position: relative;

    }
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .title{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    background-color: rgba($color: #fff, $alpha: 0.52);
    font-size: .26rem;
    color: #2A2A2A;
  }
}

</style>