<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" :alt="item.alt">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '001',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1806/11/947d8b7e221cbb02.jpg_750x200_4145c399.jpg',
          alt: '未来城'
        },
        {
          id: '002',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1805/13/6332699c44387902.jpg_750x200_b7afa4f8.jpg',
          alt: '海岛节'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background-color #ffffff

.wrapper >>> .swiper-pagination-bullets
  bottom 5px

.wrapper
  width 100%
  height 0
  overflow hidden
  padding-bottom 26.66%
  background-color #f1f1f1

  .swiper-img
    width 100%
</style>
