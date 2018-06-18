<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(icons, index) in iconPage" :key="index">
        <div class="icon" v-for="item in icons" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" :alt="item.desc">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    // icon多页切换处理
    iconPage() {
      const pages = []
      this.list.forEach((item, index) => {
        let page = Math.floor(index / 8)
        pages[page] = !pages[page] ? [item] : [...pages[page], item]
      })
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'

.icons >>> .swiper-container
  height 0
  padding-bottom 55%

.icons >>> .swiper-pagination-bullets
  bottom -.04rem

.icons
  margin-top .1rem

  .icon
    position relative
    float left
    width 25%
    height 0
    padding-bottom 25%
    overflow hidden

    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0.44rem
      box-sizing border-box
      padding 0.1rem

      .icon-img-content
        display block
        margin 0 auto
        height 100%

    .icon-desc
      position absolute
      right 0
      left 0
      bottom 0
      height 0.44rem
      line-height 0.44rem
      text-align center
      color $darkTextColor
      ellipsis()
</style>
