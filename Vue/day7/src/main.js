import Vue from 'vue'
// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter 
Vue.use(VueRouter)

// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './css/app.css'

// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.min.css'

// import MintUI from 'mint-ui'
// //可以省略node_modules目录
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

 
import { Button } from 'mint-ui'
Vue.component(Button.name, Button)
console.log(Button.name)
//Vue.use(Button)

//导入App.vue组件
import app from './App.vue'

// 导入 自定义路由模块
import router from './router.js'

var vm = new Vue({
	el: '#app',
	render: c => c(app),
	router //挂载路由对象
})

// 注意： App 这个组件，是通过 VM 实例的 render 函数，渲染出来的， render 函数如果要渲染 组件， 渲染出来的组件，只能放到 el: '#app' 所指定的 元素中；
// Account 和 GoodsList 组件， 是通过 路由匹配监听到的，所以， 这两个组件，只能展示到 属于 路由的 <router-view></router-view> 中去；