<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img-container">
            <img class="con-img-content" :src= 'item.imgUrl' :alt='item.desc'>
          </div>
          <div class="keyword">
            <p class="keyword-con">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 55%
  .icons
    width 100%
    height 0
    padding-bottom 55%
    margin-top .1rem
    .icon
      position relative
      float left
      width 25%
      height 0
      padding-bottom 25%
      text-align: center
      .icon-img-container
        position absolute
        top 0
        right 0
        left 0
        bottom .44rem
        padding .1rem
        .con-img-content
          display block
          margin 0 auto
          height 100%
      .keyword
        position absolute
        right 0
        left 0
        bottom 0
        height .44rem
        line-height .44rem
        .keyword-con
          ellipsis()
</style>
