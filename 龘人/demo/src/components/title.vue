<template>
  <div class="conter">
    <div>{{ title }}</div>
    <div class="add">...</div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {

    };
  },
  props: ['title'],
};
</script>

<style lang="scss" scoped>
.conter{
  box-sizing: content-box;
  margin: 0.20rem 0 0.1rem 0;
  padding: 0 0.19rem 0 0.19rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.3rem;
  display: flex;
  justify-content: space-between;
  background-color: #515151;
  div.add{
    line-height: 0.5rem;
    font-size: 0.2rem;
    font-weight: 700;
  }
}
</style>