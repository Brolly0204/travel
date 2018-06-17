<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" :alt="item.title">
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [
        {
          id: '001',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/1510/3e/3e8e30a6ff5d1cb090.water.jpg_200x200_ec6ab319.jpg',
          title: '北京欢乐水魔方',
          desc: '北京欢乐水魔方演出，High翻全场乐不停'
        },
        {
          id: '002',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/201405/23/0265195fc4b7913a758674357c3cc8f6.jpg_200x200_b58ea00b.jpg',
          title: '北京欢乐水魔方',
          desc: '北京欢乐水魔方演出，High翻全场乐不停'
        },
        {
          id: '003',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg',
          title: '北京欢乐水魔方',
          desc: '北京欢乐水魔方演出，High翻全场乐不停'
        },
        {
          id: '004',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/201405/23/0265195fc4b7913a758674357c3cc8f6.jpg_200x200_b58ea00b.jpg',
          title: '北京欢乐水魔方',
          desc: '北京欢乐水魔方演出，High翻全场乐不停'
        },
        {
          id: '005',
          imgUrl:
            'http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg',
          title: '北京欢乐水魔方',
          desc: '北京欢乐水魔方演出，High翻全场乐不停'
        }
      ]
    }
  },
  components: {}
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'

.title
  margin-top 0.1rem
  line-height 0.8rem
  background-color #eeeeee
  text-indent 0.2rem

.item
  display flex
  height 1.9rem
  overflow hidden

  .item-img
    width 1.7rem
    height 1.7rem
    padding 0.1rem

  .item-info
    flex 1
    padding 0.1rem
    min-width 0

    .item-title
      line-height 0.54rem
      font-size 0.32rem
      ellipsis()

    .item-desc
      line-height 0.4rem
      color #888888
      ellipsis()

    .item-button
      line-height 0.44rrem
      margin-top 0.16rem
      background-color #ff9300
      padding 0 0.2rem
      border-radius 0.06rem
      color #ffffff
</style>
