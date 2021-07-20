<template>
	<div>
		<h1>这是app.vue组件</h1>
		<mt-button type="danger" size="small" icon="back" @click="show">default</mt-button>
		<mt-button type="danger" size="small" plain>default</mt-button>
		<mt-button type="primary" size="large">default</mt-button>
		<mt-button type="primary">1234</mt-button>

		<button type="button" class="mui-btn mui-btn-royal">
	      紫色
	    </button>
	    
		<router-link to="/account">Account</router-link>
	    <router-link to="/goodslist">Goodslist</router-link>
	    <router-view></router-view>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		data() {
			return {
				instance: null
			}
		},
		created() {
			this.getList()
		},
		methods: {
		  getList(){
		  	this.show()
		  	setTimeout(() => {
		  		this.instance.close();
		  	}, 3000)
		  },
		  show() {
		    this.instance = Toast(
		    	{
				  message: '提示',
				  position: 'top',
				  duration: -1,
				  iconClass: 'bi bi-check2',
				  className: 'mytoast'
				}
		    );
		  }
		}
	}
</script>