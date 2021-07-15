//main.js 是项目js入口文件
//1.es6导入jquery模块
import $ from 'jquery'
$(function(){
	$('li:odd').css('backgroundColor', 'lightblue')
	$('li:even').css('backgroundColor', function(){
		return '#'+'D97634'
	})
})