<template>
    <el-dialog
        :title="this.$parent.$parent.HgDialogTitle"
        :visible.sync="this.$parent.$parent.HgDialogShow"
        width="30%"
        :before-close="HgDialogVisible">
        <span>{{ this.$parent.$parent.HgDialogText }}</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="HgDialogVisible">取 消</el-button>
            <el-button type="primary" @click="HgDialogOk(a)">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    a: function(){
      return this.$parent.$parent.HgDialogThis
    }

  },
  methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    amet(){
      console.log("dialog")
    }

  },  
}
</script>

<style lang="scss" scoped>

</style>