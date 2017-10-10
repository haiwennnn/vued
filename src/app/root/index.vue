<template>
  <div class="zz-content">
    <z-footer></z-footer>
    <router-view></router-view>
  </div>
</template>
<script>
import {
  ZFooter
} from '@/components'
export default {
  name: 'root',
  components: {
    ZFooter
  }
}
</script>
<style lang="less">
</style>
