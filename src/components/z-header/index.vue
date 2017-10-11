<template>
  <div class="zz-header">
    <div class="zz-header-wrap">
      <div class="zz-hedaer-left">
        <span class="zz-header-item">
            <i class="icon ion-ios-arrow-back"></i>
        </span>
        <span class="zz-header-item">帮助帮助</span>
      </div>
      <div class="zz-header-title">
        <span>{{currentNavItem.text}}</span>
      </div>
      <div class="zz-hedaer-right">
        <span class="zz-header-item">关于</span>
        <span class="zz-header-item">
          <i class="icon ion-calculator"></i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'z-header',
  data() {
    return {
      navs: [{
        text: '云科贷'
      }, {
        text: '还款详情'
      }, {
        text: '个人中心'
      }]
    }
  },
  computed: {
    currentNavItem() {
      return this.navs[this.$store.state.tabbarIndex]
    }
  }
}
</script>
<style lang="less">
</style>
