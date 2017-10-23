<template>
  <div class="zz-content">
    <z-header :title="headerInfo.title" :backButton="headerInfo.back" :left="headerInfo.left" :right="headerInfo.right" @evt-page="evtPage"></z-header>
    <z-footer></z-footer>
    <router-view></router-view>
  </div>
</template>
<script>
import {
  ZHeader,
  ZFooter
} from '@/components'
export default {
  name: 'root',
  components: {
    ZHeader,
    ZFooter
  },
  data() {
    return {
      headerList: [{
        title: '云科贷',
        back: false,
        right: [{
          text: '测试页面',
          event: {
            name: 'test',
            type: 1
          }
        }]
      }, {
        title: '还款详情',
        back: false,
        right: [{
          text: '测试页面1',
          event: {
            name: 'test',
            type: 1
          }
        }, {
          text: '事件',
          event: {
            name: 'evt-page',
            type: 2
          }
        }]
      }, {
        title: '个人中心',
        back: false
      }]
    }
  },
  computed: {
    headerInfo() {
      return this.headerList[this.$store.state.tabbarIndex]
    }
  },
  methods: {
    evtPage() {
      alert('evtPage')
    }
  }
}
</script>
<style lang="less">
</style>
