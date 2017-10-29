<template>
  <div class="zz-content">
    <z-header :title="'测试页面'" :backButton="false" :left="left" :right="right" @evt-custom="evtCustom"></z-header>
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
  data() {
    return {
      left: [{
        icon: 'ion-ios-arrow-back',
        event: {
          name: 'pageBack',
          type: 2
        }
      }],
      right: [{
        text: 'loading',
        event: {
          name: 'showLoading',
          type: 2
        }
      }]
    }
  },
  methods: {
    evtCustom(data) {
      if (data.name === 'pageBack') {
        this.pageBack()
      }
      if (data.name === 'showLoading') {
        this.showLoading()
      }
    },
    pageBack() {
      alert('pageBack')
      this.$router.back()
    },
    showLoading() {
      this.$store.commit({
        type: 'OPEN_LOADING'
      })
    }
  },
  created() {

  },
  mounted() {

  },
  beforeDestroy() {}
}
</script>
<style lang="less">
</style>
