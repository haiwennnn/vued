<template>
  <div class="zz-body">
    <div class="zz-body-wrap">
      <div class="flex-demo">
        <div class="zz-flex">
          <div class="zz-flex-item">home</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {

    }
  },
  methods: {
    listenerHeaderEvent() {
      window.BUS.$on('gotoTest', () => {
        this.$router.push({
          name: 'test'
        })
      })
    }
  },
  created() {

  },
  mounted() {

  }
}
</script>
<style lang="less">
</style>
