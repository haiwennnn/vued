<template>
  <div class="zz-footer">
    <div class="zz-footer-wrap">
      <div class="zz-tabbar">
        <a href="javascript:;" class="zz-tabbar-item" v-for="tabbarItem in tabbars" @click="tabbarItemTouch(tabbarItem)">
          <img :src="tabbarItem.icon">
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
        router: 'mine'
      }, {
        text: '还款',
        icon: payOff,
        router: 'pay'
      }, {
        text: '我的',
        icon: mineOff,
        router: 'mine'
      }]
    }
  },
  methods: {
    tabbarItemTouch: function(tabbarItem) {
      console.log(tabbarItem)
    }
  }
}
</script>
<style lang="less">
.zz-footer {}

.zz-tabbar-label {
  color: #bdc3d5;
}
</style>
