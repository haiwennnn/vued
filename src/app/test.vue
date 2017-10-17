<template>
  <div class="zz-content">
    <z-header></z-header>
    <div class="zz-body">
      <div class="zz-body-wrap">
        <div class="flex-demo">
          <div class="zz-flex">
            <div class="zz-flex-item">test</div>
            <div class="zz-flex-item">test</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  ZHeader
} from '@/components'
export default {
  name: 'test',
  components: {
    ZHeader
  },
  methods: {
    setBackEvent() {
      let info = JSON.parse(JSON.stringify(this.$store.state.pages[this.$store.state.currentPageName]))
      info.back = {
        event: {
          type: 2,
          name: 'showHello'
        }
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

  },
  mounted() {
    this.setBackEvent()
  },
  beforeDestroy() {
    window.BUS.$off('showHello')
  }
}
</script>
<style lang="less">
</style>
