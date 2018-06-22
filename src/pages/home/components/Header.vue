<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
      </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}<span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    display flex
    line-height $headerHeight
    background-color: $bgColor
    color #ffffff
    .header-left
      width .64rem
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex 1
      height .62rem
      line-height .62rem
      margin .12rem 0 0 .2rem
      padding-left .2rem
      border-radius .1rem
      color #cccccc
      background-color #ffffff
    .header-right
      width 1.24rem
      text-align center
      color #ffffff
      .arrow-icon
        margin-left .02rem
        font-size .24rem
</style>
