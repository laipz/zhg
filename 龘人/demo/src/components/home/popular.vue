<template>
  <div class="mypopular">
    <div class="item" v-for="(item, i ) in data" :key="i">
      <div class="left">
        <img :src="item.url">
      </div>
      <div class="right">
        <div>{{item.title}}</div>
        <div>
          <van-rate v-model="item.rate" />
        </div>
        <div>
          <van-button type="default" size="small">{{ item.name }}</van-button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:[
        {
          title: 'mynane',
          url: require('../../assets/img/home/popular/one.png'),
          rate: 5,
          name: 'go'
        },
        {
          title: 'mynane',
          url: require('../../assets/img/home/popular/two.png'),
          rate: 2,
          name: 'go'
        },
        {
          title: 'mynane',
          url: require('../../assets/img/home/popular/three.png'),
          rate: 5,
          name: 'go'
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.mypopular{
  box-sizing: border-box;
  font-size: 16px;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  .item{
    box-sizing: border-box;
    width: 100%;
    height: 1.76rem;
    margin-bottom: 0.1rem;
    background-color: #2A2A2A;
    .left{
      box-sizing: border-box;
      width: 3.66rem;
      height: 1.76rem;
      float: left;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .right{
      box-sizing: border-box;
      width: 2.84rem;
      height: 1.76rem;
      float: right;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0.14rem 0 0.22rem 0;
      font-size: 0.3rem;
      .van-rate__icon--full{
        color: red;
      }
      .van-button{
        border-radius: 0.05rem;
      }
    }
  }
}

</style>