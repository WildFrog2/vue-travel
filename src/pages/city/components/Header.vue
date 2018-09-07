<template>
  <div class="header">
    <div class="header-left">
      <router-link to='/'>
        <i class="iconfont back-arrow">&#xe624;</i>
      </router-link>
    </div>
    <div class="header-title">
      <span>城市选择</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varible.styl'
  .header
    position relative
    overflow hidden
    height .86rem
    line-height .86rem
    background $bgColor
    text-align center
    color #fff
    .header-left
      position absolute
      top 0
      left 0
      width .64rem
      .back-arrow
        color #fff
    .header-title
      font-size .4rem
</style>
