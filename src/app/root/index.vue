<template>
  <div class="zz-content">
    <z-header></z-header>
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
  }
}
</script>
<style lang="less">
</style>
