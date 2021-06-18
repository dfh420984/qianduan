window.onload = function() {
	// 向下滚动背景颜色渐变
	search();
	// 轮播图
	banner();
	//倒计时
	downTime();
}

var search = function() {
	var searchBox = document.querySelector(".jd_search_box");
	var banner = document.querySelector(".jd_banner");
	var height = banner.offsetHeight;
	//监听页面滚动事件
	window.onscroll = function() {
		/*console.log(document.body.scrollTop);
         console.log(document.documentElement.scrollTop);
         console.log(window.pageYOffset);*/
		//var scrollTop = document.body.scrollTop;
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
		//console.log(scrollTop);
		/*默认的透明度*/
        var opacity = 0;
        if (scrollTop < height) {
        	opacity = scrollTop / height * 0.85;
        } else {
        	opacity = 0.85;
        }
        //console.log(opacity);
        searchBox.style.background = 'rgba(201,21,35,' + opacity + ')';
	}
}

var banner = function() {

}

var downTime = function() {

}