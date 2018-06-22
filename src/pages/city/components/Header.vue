<template>
  <div class="header">
    城市选择
    <div @click="back" class="iconfont header-icon">&#xe624;</div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .header
    position relative
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #ffffff
    background-color $bgColor
    font-size .32rem
    .header-icon
      position absolute
      top 0
      left 0
      width .64rem
      text-align center
      font-size .4rem
</style>
