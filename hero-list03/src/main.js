import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import moment from 'moment'
// 因为全局中要使用bootstrap的css样式，先引入
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// 配置axios 到vue的原型对象上，以至于整个vue的全局都能用axios 不用在重复导入axios
Vue.prototype.$axios = axios

// 配置公共的基准地址
axios.defaults.baseURL = 'http://localhost:3000'

// 使用全局过滤器处理日期格式
Vue.filter('time', function (value) {
  return moment(+new Date(value)).format('YYYY年MM月DD日 HH:mm:ss')
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
