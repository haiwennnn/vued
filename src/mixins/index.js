export default {
  init: function(Vue) {
    Vue.mixin({
      beforeDestroy() {
        console.log('destroy')
        window.BUS.$off()
      }
    })
  }
}
