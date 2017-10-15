<template>
  <div class="zz-header">
    <div class="zz-header-wrap">
      <div class="zz-hedaer-left" @click="headerToolEvent($event)">
        <span class="zz-header-item" v-for="lItem in currentPage.left" @click="headerToolEvent(lItem)">
          {{lItem.text}}
          <i class="icon" :class="lItem.icon" v-if="lItem.icon"></i>
        </span>
      </div>
      <div class="zz-header-title">
        <span>{{currentPage.title}}</span>
      </div>
      <div class="zz-hedaer-right">
        <span class="zz-header-item" v-for="rItem in currentPage.right" @click="headerToolEvent(rItem)">
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

    }
  },
  computed: {
    currentPage() {
      let cp = JSON.parse(JSON.stringify(this.$store.state.pages[this.$store.state.currentPageName]))
      console.log(cp)
        /*
          处理header左侧工具栏
          默认存在left按钮,可通过添加back属性进行设置
          back:false 取消back
          back:object 新的属性覆盖旧的属性
        */
      if (cp.hasOwnProperty('back')) {
        if (cp.back) {
          if (!cp.left) cp.left = []
          if (!cp.back.icon) cp.back.icon = 'ion-ios-arrow-back'
          cp.left.unshift(cp.back)
        }
      } else {
        if (!cp.left) cp.left = []
        cp.left.unshift({
          icon: 'ion-ios-arrow-back',
          event: 'back'
        })
      }
      console.log(cp)
      return cp
    }
  },
  methods: {
    headerToolEvent: function(eventInfo) {
      if (eventInfo.event === 'back') {
        this.$router.back()
      }
      if (eventInfo.event) window.BUS.$emit(eventInfo.event)
    }
  }
}
</script>
<style lang="less">
</style>
