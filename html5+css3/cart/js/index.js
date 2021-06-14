$(function(){
	$("#container").fullpage({
		sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
		verticalCentered: false,
		navigation: true,
		scrollingSpeed: 1000,
		// 滚动到某一屏后的回调函数
		afterLoad: function(link, index) {
			$(".section").eq(index-1).addClass('now');
		},
		//滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数
		onLeave: function(index, nextIndex, direction) {
			var currentSection = $(".section").eq(index-1);
			if (index == 2 && nextIndex == 3) {
				currentSection.addClass('leaved');
			} else if (index == 3 && nextIndex == 4) {
				currentSection.addClass('leaved');
			} else if (index == 5 && nextIndex == 6) {
				currentSection.addClass('leaved');
				$('.screen06 .box').addClass('show');
			} else if(index == 6 && nextIndex == 7){
                /*当前是从第6页到第7页*/
                $('.screen07 .star').addClass('show');
                $('.screen07 .text').addClass('show');
                $('.screen07 .star img').each(function (i, item) {
                    /*$(item) == $(this);*/
                    /*img display:none*/
                    /*$(this).delay(i*0.5*1000).fadeIn();*/
                    /*img opacity*/
                    $(this).css('transition-delay',i*0.5+'s');
                });
 
            }
		},
		// 页面结构生成后的回调函数，或者说页面初始化完成后的回调函数
		afterRender: function() {
			$(".more").on('click', function(){
				console.log($.fn.fullpage);
				$.fn.fullpage.moveSectionDown();
			});

			/*当第四屏的购物车动画结束之后执行收货地址的动画*/
            $('.screen04 .cart').on('transitionend',function () {
                /* :last :first :visible :hidden :checked :selected jquery扩展选择器*/
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });

            
            /*第八屏功能*/
            /*1.手要跟着鼠标移动*/
            $('.screen08').on('mousemove',function (e) {
                /*鼠标的坐标设置给手*/
                $(this).find('.hand').css({
                    left:e.clientX -190,
                    top:e.clientY - 20
                });
            }).find('.again').on('click',function () {
                /*2.点击再来一次重置动画跳回第一页*/
                /*动画怎么怎么进行的？*/
                /*2.1 加now  类*/
                /*2.2 加leaved  类*/
                /*2.3 加show 类*/
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                /*2.4 加css属性  后果：加一个style属性*/
                /*2.5 用jquery方法  show() fadeIn() 后果：加一个style属性*/
                $('.content [style]').removeAttr('style');
 
                /*跳回第一页*/
                $.fn.fullpage.moveTo(1);
            });
		}
	});
});