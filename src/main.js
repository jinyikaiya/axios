// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Indicator} from 'mint-ui'
import axios from '../utils/axios.js'
import {post, get} from '../utils/http.js'
Vue.config.productionTip = false
Vue.component(Indicator)
Vue.prototype.$axios = axios
Vue.prototype.$post = post
Vue.prototype.$get = get
// require('./mock.js')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
