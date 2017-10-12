<template>
  <div class="zz-header">
    <div class="zz-header-wrap">
      <div class="zz-hedaer-left">
        <!-- <span class="zz-header-item">
            <i class="icon ion-ios-arrow-back"></i>
        </span>
        <span class="zz-header-item">帮助帮助</span> -->
      </div>
      <div class="zz-header-title">
        <span>{{currentPage.title}}</span>
      </div>
      <div class="zz-hedaer-right">
        <span class="zz-header-item" v-for="rItem in currentPage.right">
          {{rItem.text}}
          <i class="icon" :class="rItem.icon" v-if="rItem.icon"></i>
        </span>
        <!-- <span class="zz-header-item">关于</span>
        <span class="zz-header-item">
          <i class="icon ion-chatbubble-working"></i>
        </span> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'z-header',
  data() {
    return {
      pages: {
        home: {
          title: '云科贷',
          right: [{
            text: '测试页面'
          }, {
            icon: 'ion-chatbubble-working'
          }]
        },
        pay: {
          title: '还款详情'
        },
        mine: {
          title: '个人中心'
        }
      },

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
    },
    currentPage() {
      return this.pages[this.$store.state.currentPageName]
    }
  }
}
</script>
<style lang="less">
</style>
