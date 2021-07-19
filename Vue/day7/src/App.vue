<template>
	<div>
		<h1>这是app.vue组件</h1>
		<mt-button type="danger" size="small" icon="back">default</mt-button>
		<mt-button type="danger" size="small" plain>default</mt-button>
		<mt-button type="primary" size="large">default</mt-button>
		<router-link to="/account">Account</router-link>
	    <router-link to="/goodslist">Goodslist</router-link>
	    <router-view></router-view>
	</div>
</template>