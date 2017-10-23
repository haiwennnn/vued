<template>
  <div id="app">
    <div class="zz-container">
      <router-view></router-view>
    </div>
    <!-- <img src="./assets/logo.png">
    <router-view></router-view> -->
  </div>
</template>
<script>
import {
  ZHeader
} from '@/components'

export default {
  name: 'app',
  components: {
    ZHeader
  },
  watch: {
    '$route' (to, from) {
      let targetName = to.name || 'home'
      this.$store.commit({
        type: 'setPageName',
        pageName: targetName
      })
    }
  }
}
</script>
<style lang="less">
@import './styles/index';
</style>
