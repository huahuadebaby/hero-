import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 在全局导入bootstrap的样式
import 'bootstrap/dist/css/bootstrap.css'
import moment from 'moment'
import axios from 'axios'
// 将axios挂载在vue根实例上的原型对象上，则其他子组件可以直接访问
Vue.prototype.$axios = axios

// 全局公用地址
axios.defaults.baseURL = 'http://localhost:3000'

// 全局过滤器处理日期格式
Vue.filter('time', function (value) {
  return moment(+new Date(value)).format('YYYY年MM月DD日 HH:mm:ss')
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
