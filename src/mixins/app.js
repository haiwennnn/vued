let mixin = {
  destroyed() {
    console.log('destroy')
    window.BUS.$off()
  }
}

export default mixin
