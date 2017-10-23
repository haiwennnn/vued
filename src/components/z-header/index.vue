<template>
  <div class="zz-header">
    <div class="zz-header-wrap">
      <div class="zz-hedaer-left">
        <span class="zz-header-item" v-for="lItem in leftButtons" @click="headerToolEvent(lItem)">
          {{lItem.text}}
          <i class="icon" :class="lItem.icon" v-if="lItem.icon"></i>
        </span>
      </div>
      <div class="zz-header-title">
        <span>{{title}}</span>
      </div>
      <div class="zz-hedaer-right">
        <span class="zz-header-item" v-for="rItem in rightButtons" @click="headerToolEvent(rItem)">
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
  props: {
    title: {
      type: String,
      default () {
        return ''
      }
    },
    backButton: {
      type: Boolean,
      default () {
        return true
      }
    },
    left: {
      type: Array,
      default () {
        return []
      }
    },
    right: {
      type: Array,
      default () {
        return []
      }
    }

  },
  computed: {
    /*
      返回左侧按钮
      backButton=false return this.leftButtons
      backButton=true 加上返回按钮并增加this.leftButtons[0]
    */
    leftButtons() {
      let leftBtns = []
      if (!this.backButton) {
        return this.left
      }
      leftBtns.push({
        icon: 'ion-ios-arrow-back',
        event: 'back'
      })
      this.left[0] && leftBtns.push(this.left[0])
      return leftBtns
    },
    rightButtons() {
      let rightBtns = []
      this.right.forEach((data, index) => {
        if (rightBtns.length <= 2) {
          rightBtns.push(data)
        }
      })
      return rightBtns
    }
  },
  methods: {
    headerToolEvent: function(eventInfo) {
      console.log(eventInfo)
      let event = eventInfo.event
      if (event === 'back') {
        this.$router.back()
        return
      }
      if (event.type === 1) {
        this.$router.push(event.name)
        return
      }
      if (event.type === 2) {
        this.$emit(event.name)
      }
    }
  },
  created() {
    console.log(this)
  }
}
</script>
<style lang="less">
</style>
