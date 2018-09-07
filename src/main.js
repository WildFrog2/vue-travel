// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 解决移动端300ms点击延迟
import VueAwesomeSwiper from 'vue-awesome-swiper' // 轮播图插件
import store from './store/index'
import './assets/styles/reset.css' // 重置css样式
import './assets/styles/border.css' // 在多倍屏中显示正常像素
import './assets/styles/iconfont.css' // 使用阿里巴巴矢量图标库
import 'swiper/dist/css/swiper.css' // 轮播图插件

Vue.config.productionTip = false
fastClick.attach(document.body) // 解决移动端300ms点击延迟
Vue.use(VueAwesomeSwiper) // 轮播图插件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
