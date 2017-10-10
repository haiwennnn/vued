<template>
  <div id="app">
    <div class="zz-container">
      <z-header></z-header>
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
  }
}
</script>
<style lang="less">
@import './styles/index';
</style>
