import VueRouter from 'vue-router'

//导入Account组件
import account from './main/Account.vue'
import goodsList from './main/GoodsList.vue'

// 导入Account的两个子组件
import login from './subcom/login.vue'
import register from './subcom/register.vue'

var router = new VueRouter({
	routes: [
		{ 
			path: '/account', 
			component: account,
			children: [
		        { path: 'login', component: login },
		        { path: 'register', component: register }
		    ]
		},
		{ path: '/goodsList', component:  goodsList}
	]
})

// 把路由对象暴露出去
export default router