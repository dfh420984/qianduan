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
			if (index == 2 && nextIndex == 3) {
				$(".section").eq(index-1).addClass('leaved');
			} else if (index == 3 && nextIndex == 4) {
				$(".section").eq(index-1).addClass('leaved');
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
		}
	});
});