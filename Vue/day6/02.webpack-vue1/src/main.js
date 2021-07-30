//入口文件
// 在webpack 中尝试使用 Vue：
// 注意： 在 webpack 中， 使用 import Vue from 'vue' 导入的 Vue 构造函数，功能不完整，只提供了 runtime-only 的方式，并没有提供 像网页中那样的使用方式；
import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'
// 回顾 包的查找规则：
// 1. 找 项目根目录中有没有 node_modules 的文件夹
// 2. 在 node_modules 中 根据包名，找对应的 vue 文件夹
// 3. 在 vue 文件夹中，找 一个叫做 package.json 的包配置文件
// 4. 在 package.json 文件中，查找 一个 main 属性【main属性指定了这个包在被加载时候，的入口文件】
//import Vue from '../node_modules/vue/dist/vue.js' //网页版，第一种解决方案

// var login = {
// 	template: '<h1>这是login登录组件，使用网页中的形式创建的模版</h1>'
// }

//1.倒入login.vue组件 
import login from './login.vue'
//默认webpack无法打包vue文件，需要安装相关loader
//cnpm i vue-loader vue-template-compiler -D
//在配置文件中添加配置项

var vm = new Vue({
	'el': '#app',
	'data': {
		msg: '123'
	},
	// components: {
	// 	login
	// }
	render: c => c(login)
})


// 总结梳理： webpack 中如何使用 vue :
// 1. 安装vue的包：  cnpm i vue -S
// 2. 由于 在 webpack 中，推荐使用 .vue 这个组件模板文件定义组件，所以，需要安装 能解析这种文件的 loader    cnpm i vue-loader vue-template-complier -D
// 3. 在 main.js 中，导入 vue 模块  import Vue from 'vue'
// 4. 定义一个 .vue 结尾的组件，其中，组件有三部分组成： template script style
// 5. 使用 import login from './login.vue' 导入这个组件
// 6. 创建 vm 的实例 var vm = new Vue({ el: '#app', render: c => c(login) })
// 7. 在页面中创建一个 id 为 app 的 div 元素，作为我们 vm 实例要控制的区域；


import m222, { title as title123, content } from './test.js'
console.log(m222)
console.log(title123 + ' --- ' + content)
