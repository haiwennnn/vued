<template>
  <transition :name="transition">
    <div class="zz-loading" v-show="show">
      <div class="zz-mask-transparent"></div>
      <div class="zz-toast">
        <i class="zz-toast-icon zz-toast-loading"></i>
        <div class="zz-toast-content">正在玩命加载中...</div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'loading',
  data() {
    return {
      transition: 'zz-mask'
    }
  },
  computed: {
    show() {
      return this.$store.state.isLoading
    }
  }
}
</script>
<style scoped lang="less">
.zz-mask-enter,
.zz-mask-leave-active {
  opacity: 0;
}

.zz-mask-leave-active,
.zz-mask-enter-active {
  transition: opacity 400ms;
}
</style>
