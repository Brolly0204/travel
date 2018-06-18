<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" :alt="item.title">
        </div>
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
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
            'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '北京欢乐水魔方',
          desc: '北京欢乐水魔方演出，High翻全场乐不停'
        },
        {
          id: '002',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '北京欢乐水魔方',
          desc: '北京欢乐水魔方演出，High翻全场乐不停'
        },
        {
          id: '003',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '北京欢乐水魔方',
          desc: '北京欢乐水魔方演出，High翻全场乐不停'
        },
        {
          id: '004',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '北京欢乐水魔方',
          desc: '北京欢乐水魔方演出，High翻全场乐不停'
        },
        {
          id: '005',
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
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
  .item-img-wrapper
    height 0
    overflow hidden
    padding-bottom 37%
    background-color #f1f1f1
    .item-img
      width 100%

  .item-info
    flex 1
    padding 0.1rem
    min-width 0
    margin-bottom: .1rem;

    .item-title
      line-height 0.54rem
      font-size 0.32rem
      ellipsis()

    .item-desc
      line-height 0.4rem
      color #888888
      ellipsis()
</style>
