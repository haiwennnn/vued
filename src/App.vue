<template>
  <div id="app">
    <div class="zz-container">
      <router-view></router-view>
    </div>
    <div class="zz-component">
      <Loading></Loading>
    </div>
    <!-- <img src="./assets/logo.png">
    <router-view></router-view> -->
  </div>
</template>
<script>
import {
  ZHeader
} from '@/components'

import Loading from '@/components/loading'

export default {
  name: 'app',
  components: {
    ZHeader,
    Loading
  },
  watch: {
    '$route' (to, from) {
      let targetName = to.name || 'home'
      this.$store.commit({
        type: 'SET_PAGE_NAME',
        pageName: targetName
      })
    }
  }
}
</script>
<style lang="less">
@import './styles/index';
</style>
