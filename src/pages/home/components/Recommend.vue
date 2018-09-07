<template>
  <div class="recommend">
    <div class="recommend-title">今日热卖</div>
    <ul>
      <li class="recommend-item border-bottom" v-for="item of list" :key="item.id">
        <img class="recommend-imgcon" :src="item.imgUrl" :alt="item.address">
        <div class="recommend-tag">
          <p class="tag-title">{{item.address}}</p>
          <p class="tag-con">{{item.name}}</p>
          <button class="tag-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .recommend-title
    background #eee
    margin-top .2rem
    line-height 1rem
    text-indent .4rem // 首行缩进
    font-size .4rem
  .recommend-item
    display flex
    overflow hidden
    height 1.9rem
    .recommend-imgcon
      width 1.7rem
      height 1.7rem
      padding .1rem
    .recommend-tag
      flex: 1
      padding .1rem
      min-width 0
      .tag-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .tag-con
        line-height .4rem
        color #ccc
        ellipsis()
      .tag-button
        line-height .4rem
        margin-top .16rem
        padding 0 .2rem
        background #ff9300
        border-radius .06rem
        color #fff
</style>
