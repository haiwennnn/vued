<template>
  <div class="zz-body">
    <div class="zz-body-wrap">
      <div class="flex-demo">
        <div class="zz-flex">
          <div class="zz-flex-item">test</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'test',
  methods: {
    setBackEvent() {
      let info = JSON.parse(JSON.stringify(this.$store.state.pages[this.$store.state.currentPageName]))
      info.back = {
        event: 'showHello'
      }
      this.listenerSayHello()
      this.$store.commit({
        type: 'setPageItem',
        name: 'test',
        info: info
      })
    },
    listenerSayHello() {
      window.BUS.$on('showHello', () => {
        alert('Hello')
        this.$router.back()
      })
    }
  },
  created() {
    this.setBackEvent()
  }
}
</script>
<style lang="less">
</style>
