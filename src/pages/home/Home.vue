<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList" ></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import { getHomeInfo } from '@/api/home'
export default {
  name: 'Home',
  data() {
    return {
      city: '北京',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  created() {
    getHomeInfo().then(this.getHomeData)
  },
  methods: {
    getHomeData(response) {
      let result = response.data
      if (result.ret && result.data) {
        let { city, swiperList, iconList, recommendList, weekendList } = result.data
        this.city = city
        this.swiperList = swiperList
        this.iconList = iconList
        this.recommendList = recommendList
        this.weekendList = weekendList
      }
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>
