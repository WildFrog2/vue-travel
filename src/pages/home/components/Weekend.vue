<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="weekend-item" v-for="item of list" :key="item.id">
        <div class="weekend-img-wrapper">
          <img class="weekend-imgcon" :src="item.imgUrl" :alt="item.name">
        </div>
        <div class="weekend-tag">
          <p class="weekend-tag-title">{{item.name}}</p>
          <p class="weekend-tag-con">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
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
  .weekend
    background #eee
    .weekend-title
      line-height 1rem
      text-indent .4rem // 首行缩进
      font-size .4rem
    .weekend-item
      margin-bottom .2rem
      .weekend-img-wrapper
        overflow hidden
        height 0
        padding-bottom 37%
        .weekend-imgcon
          width 100%
      .weekend-tag
        padding .1rem
        min-width 0
        background #fff
        .weekend-tag-title
          line-height .54rem
          font-size .32rem
          ellipsis()
        .weekend-tag-con
          line-height .4rem
          color #666
          ellipsis()
</style>
