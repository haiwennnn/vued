<template>
  <div class="zz-footer">
    <div class="zz-footer-wrap">
      <div class="zz-tabbar">
        <a href="javascript:;" class="zz-tabbar-item" v-for="(tabbarItem,index) in tabbars" @click="tabbarItemTouch(tabbarItem,index)" :class="{'active' : tabbarIndex === index}">
          <img :src="tabbarIndex === index ? tabbarItem.activeIcon: tabbarItem.icon">
          <p class="zz-tabbar-label">{{tabbarItem.text}}</p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import mainOn from '@/assets/icons/svg/main-on.svg'
import mainOff from '@/assets/icons/svg/main-off.svg'
import payOn from '@/assets/icons/svg/pay-on.svg'
import payOff from '@/assets/icons/svg/pay-off.svg'
import mineOn from '@/assets/icons/svg/mine-on.svg'
import mineOff from '@/assets/icons/svg/mine-off.svg'
export default {
  name: 'z-footer',
  data() {
    return {
      mainOn,
      mainOff,
      payOn,
      payOff,
      mineOn,
      mineOff,
      tabbars: [{
        text: '首页',
        icon: mainOff,
        activeIcon: mainOn,
        router: 'home'
      }, {
        text: '还款',
        icon: payOff,
        activeIcon: payOn,
        router: 'pay'
      }, {
        text: '我的',
        icon: mineOff,
        activeIcon: mineOn,
        router: 'mine'
      }]
    }
  },
  computed: {
    tabbarIndex() {
      return this.$store.state.tabbarIndex
    }
  },
  methods: {
    tabbarItemTouch: function(tabbarItem, index) {
      this.$router.push({
        name: tabbarItem.router
      })
      this.$store.commit({
        type: 'SWITCH_TABBAR',
        index: index
      })
    }
  },
  created() {

  }
}
</script>
<style lang="less">
.zz-footer {}

.zz-tabbar-label {
  color: #bdc3d5;
}
</style>
