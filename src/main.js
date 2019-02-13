// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import TableList from './components/TableList'

Vue.config.productionTip = false
Vue.use(VueRouter)

// 设置路由
const router = new VueRouter({
  mode:"history",//去掉“#”
  base:__dirname,//当前路径
  routes:[
    {path:"/",component:App},
    {path:"/tableList",name:'TableList',component:TableList}
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h => h(App)
})
