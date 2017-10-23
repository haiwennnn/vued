<template>
  <div class="zz-content">
    <z-header :title="'测试页面'" :backButton="false" :left="left" @evt-pageBack="pageBack"></z-header>
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
          name: 'evt-pageBack',
          type: 2
        }
      }],
      right: []
    }
  },
  methods: {
    pageBack() {
      alert('pageBack')
      this.$router.back()
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
