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
	/*1. 自动轮播图且无缝   定时器，过渡*/
    /*2. 点要随着图片的轮播改变  根据索引切换*/
    /*3. 滑动效果  利用touch事件完成*/
    /*4. 滑动结束的时候    如果滑动的距离不超过屏幕的1/3  吸附回去   过渡*/
    /*5. 滑动结束的时候    如果滑动的距离超过屏幕的1/3  切换（上一张，下一张）根据滑动的方向，过渡*/

	// 1.轮播图定时无缝播放
	/*轮播图*/
    var banner = document.querySelector('.jd_banner');
    /*屏幕宽度*/
    var width = banner.offsetWidth;
    /*图片容器*/
    var imageBox = banner.querySelector('ul:first-child');
    /*点容器*/
    var pointBox = banner.querySelector('ul:last-child');
    /*所有的点*/
    var points = pointBox.querySelectorAll('li');
    var index = 1;
    //添加过渡
    var addTransition = function() {
    	imageBox.style.transition = 'all 0.2s';
    	imageBox.style.webkitTransition = 'all 0.2s';
    }
    //清楚过渡
    var removeTransition = function() {
    	imageBox.style.transition = 'none';
    	imageBox.style.webkitTransition = 'none';
    }
    //位移
    var setTranslateX = function (translateX) {
        imageBox.style.transform = 'translateX(' + translateX + 'px)';
        imageBox.style.webkitTransform = 'translateX(' + translateX + 'px)';
    }

    var timeId = setInterval(function(){
    	index++;
    	// 过度+位移
    	addTransition();
    	setTranslateX(-index*width);
    }, 3000);

    /*需要等最后一张动画结束去判断 是否瞬间定位第一张*/
    imageBox.addEventListener('transitionend', function(){
    	/*自动滚动的无缝*/
    	if (index >= 9) {
    		index = 1;
    		removeTransition();
    		setTranslateX(-index*width);
    	}
    	/*滑动的时候也需要无缝*/
        else if (index <= 0) {
            index = 8;
            /*瞬间定位*/
            /*清过渡*/
            removeTransition();
            /*做位移*/
            setTranslateX(-index * width);
        }
        setPoint();
    });

    var setPoint = function() {
    	//清除点样式
    	for (var i = 0; i < points.length; i++) {
    		var obj = points[i];
    		obj.classList.remove('now');
    	}
    	//添加当前点样式
    	points[index-1].classList.add('now');
    }

    //绑定touch事件
    var startX = 0;
    var distanceX = 0;
    var isMove = false;
    imageBox.addEventListener('touchstart', function(e){
    	//清除定时器
    	clearInterval(timeId);
    	//触摸点起开始坐标
    	startX = e.touches[0].clientX;
    });
    imageBox.addEventListener('touchmove', function(e){
    	//console.log(e);
    	var moveX = e.touches[0].clientX;
    	//手指移动的距离
    	distanceX = moveX - startX;
    	/*元素将要的定位=当前定位+手指移动的距离*/
    	var translateX = -index*width + distanceX;
    	setTranslateX(translateX);
    	isMove = true;
    });
    imageBox.addEventListener('touchend', function(e){
    	//console.log(e);
    	if (isMove) {
    		//判断移动距离有没有超过屏幕宽度1/3
	    	if (Math.abs(distanceX) < width/3) {
	    		//吸附效果
	    		addTransition();
	    		setTranslateX(-index*width);
	    	} else {
	    		//切换
	    		if (distanceX > 0) { 
	    			//右滑，上一张
	    			index--;
	    			if (index <= 0) {
            			index = 8;
        			}
	    		} else {
	    			//左滑，下一张
	    			index++
	    			if (index >= 9) {
    					index = 1;
					}
	    		}
	    		addTransition();
	    		setTranslateX(-index*width);
	    	}
    	}
    	//重置条件
    	startX = 0;
    	distanceX = 0; 
    	isMove = false;
    	//从新开始定时器
    	clearInterval(timeId);
    	timeId = setInterval(function(){
	    	index++;
	    	// 过度+位移
	    	addTransition();
	    	setTranslateX(-index*width);
    	}, 3000);
    });
}

var downTime = function() {
	/*1.每一秒改变当前的时间*/
    /*2.倒数计时  假设 4小时*/
    var time = 4 * 60 * 60;
    var spans = document.querySelectorAll('.time span');

    var timer = setInterval(function () {
        time --;
        /*格式化  给不同的元素html内容*/
        var h = Math.floor(time/3600);
        var m = Math.floor(time%3600/60);
        var s = Math.floor(time%60);

        spans[0].innerHTML = Math.floor(h/10);
        spans[1].innerHTML = h%10;
        spans[3].innerHTML = Math.floor(m/10);
        spans[4].innerHTML = m%10;
        spans[6].innerHTML = Math.floor(s/10);
        spans[7].innerHTML = s%10;

        if(time <= 0){
            clearInterval(timer);
        }

    }, 1000)
}