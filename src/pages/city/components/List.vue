<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">
          热门城市
        </div>
        <div class="button-list">
          <div class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">
          字母排序
        </div>
        <div class="letter-list">
          <div class="letter-wrapper"
            v-for="(item, key) of cities"
            :key="key"
            @click="handleLetterClick"
          >
            <div class="letter">{{key}}</div>
          </div>
        </div>
      </div>
      <div class="area"
        v-for="(item, key) of cities"
        :key="key"
      >
        <div class="title border-topbottom" :ref="key">
          {{key}}
        </div>
        <div class="town-list">
          <div class="town-wrapper"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            <div class="town">{{innerItem.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letterAlp: String
  },
  data () {
    return {
      letter: ''
    }
  },
  methods:
  {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
      this.letter = e.target.innerText
    },
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    },
    letterAlp () {
      if (this.letterAlp) {
        const element = this.$refs[this.letterAlp][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/varible.styl'
  @import '~@/assets/styles/mixins.styl'
  // .border-topbottom
  //   &:before
  //     border-color #ddd
  //   &:after
  //     border-color #ddd
  .list
    position absolute
    overflow hidden
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .8rem
      background #eee
      font-size .26rem
      padding-left .2rem
      color #666
    .button-list
      overflow hidden
      line-height .8rem
      .button-wrapper
        float left
        width 33.33%
        .button
          padding .1rem 0
          text-align center
          border .01rem solid #eee
          cursor:pointer
    .letter-list
        overflow hidden
        line-height .8rem
        .letter-wrapper
          float left
          width 16.66%
          .letter
            padding .1rem 0
            text-align center
            cursor:pointer
    .town-list
        overflow hidden
        line-height .8rem
        .town-wrapper
          float left
          width 25%
          .town
            padding .1rem 0
            text-align center
            border .01rem solid #eee
            cursor:pointer
            ellipsis()
</style>
