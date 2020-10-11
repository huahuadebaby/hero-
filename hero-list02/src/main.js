import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import moment from 'moment'
// 引入bootstrap 所提供的的样式
import 'bootstrap/dist/css/bootstrap.min.css'
// 将axios挂载在vue事例中
Vue.prototype.$axios = axios
// 设置请求的公共的地址
axios.defaults.baseURL = 'http://localhost:3000'

// 全局过滤器处理日期格式
Vue.filter('time', function (value) {
  return moment(+new Date(value)).format('YYYY年MM月DD日 HH:mm:ss')
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
