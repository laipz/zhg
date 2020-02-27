<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    };
  },
  props: ['a'],
  components: {
    'a-name': a
  },
  computed: {
    now: function () {
      return Date.now()
    },
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
  },
  methods: {
    myRouters() {
      const _this = this
      return {
        a() {

        },
      }
    },
    events() {
      const _this = this
      return {
        a() {

        },
      }
    },
    https() {
      const _this = this
      return {
        a() {

        },
      }
    },
  },
  created() {

  },
  mounted() {

  },
  beforeDestroy() {
    // 销毁前
  },
  // 组件内导航守卫
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }

}
</script>

<style lang="scss" scoped>

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

</style>