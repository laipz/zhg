function HgDialog() {
    
}
HgDialog.install = function (vue) {
  vue.mixin({
      data(){
          return{
              HgDialogA: 'this is mixin in',
              HgDialogShow: false,
              HgDialogTitle: '提示在APP.vue修改',
              HgDialogText: '文本内容在APP.vue修改',
              HgDialogThis: 1,
          }
      },
      methods:{
          HgDialogVisible(data){
              console.log(this)
              let that = this.$parent       
              while(that != undefined){
                if (that.$parent == undefined) {
                  that.HgDialogShow = !that.HgDialogShow
                  that.HgDialogTitle = data.HgDialogTitle
                  that.HgDialogText = data.HgDialogText
                }
                that = that.$parent
              }
          },
      },
      
  })
  
}

export default HgDialog
