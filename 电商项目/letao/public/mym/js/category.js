$(function(){
	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});

	// 获取一级分类数据
	$.ajax({
		url: '/category/queryTopCategory',
		type: 'get',
		success: function(response){
			//console.log(response);
			// 所谓模板引擎 作用就是用来帮我们将数据和html拼接好 将拼接好的结果 返回给我们

			// 将数据和html做拼接
			// 1) html模板ID
			// 2) 数据
			// 3) 告诉模板引擎 html模板和数据怎样进行拼接
			var html = template('category-first', {result: response.rows});
			//console.log(html);
			$("#links").html(html);
		}
	});
});