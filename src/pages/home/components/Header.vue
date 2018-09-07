<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-arrow">&#xe624;</div>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe632;</i>
      <span>输入城市/景点/游玩主题</span>
    </div>
    <div class="header-right">
      <router-link to='/city'>
        <span class="nav-city">{{this.$store.state.city}}</span>
        <span class="iconfont down-arrow">&#xe615;</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varible.styl'
  .header
    position relative
    display flex
    line-height .86rem
    background $bgColor
    .header-left
      width .64rem
      float left
      color #fff
     .back-arrow
      text-align center
      font-size = .4rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin .12rem .2rem
      padding-left .2rem
      background #fff
      border-radius .1rem
      color #ccc
    .header-right
      width 1.24rem
      float right
      align-items center
      .nav-city
        color #fff
      .down-arrow
        font-size .24rem
        color #fff
</style>
