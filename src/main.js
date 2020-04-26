import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/common.css'//初始化css
import './element_import/index'//引入需要使用的elementui
import api from './api/index'//引入api api中封装了一些网络请求的方法

//从本地获取数据 如果有 直接进去 刷新页面时保持登录状态
let egouser = localStorage.getItem('egousername');
if(egouser){
  store.dispatch('setegoUserNameActions',egouser)
}
let egotoken = localStorage.getItem('egotoken');
if(egouser){
  store.dispatch('setegoTokenAction',egotoken)
}

Vue.config.productionTip = false
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
