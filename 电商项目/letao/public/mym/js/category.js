$(function() {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    // 获取一级分类数据
    $.ajax({
        url: '/category/queryTopCategory',
        type: 'get',
        success: function(response) {
            //console.log(response);
            // 所谓模板引擎 作用就是用来帮我们将数据和html拼接好 将拼接好的结果 返回给我们

            // 将数据和html做拼接
            // 1) html模板ID
            // 2) 数据
            // 3) 告诉模板引擎 html模板和数据怎样进行拼接
            var html = template('category-first', { result: response.rows });
            //console.log(html);
            $("#links").html(html);
            //展示一级分类默认数据
            if (response.rows.length > 0) {
            	$("#links").find('a').eq(0).addClass('active');
            	var id = response.rows[0].id;
            	getSecondCategory(id);
            }
        }
    });

    /*
    	点击一级分类获取二级分类的数据

    		1.一级分类添加点击事件
    		2.在事件处理函数中获取到一级分类的ID
    		3.调用二级分类的接口获取对应的数据
    		4.将数据展示到对应的位置中
    		5.如果接口中没有数据 要在页面中显示暂无数据
    */

    $("#links").on('click', 'a', function() {
        var id = $(this).attr('data-id');
        // 给当前点击的一级分类添加选中状态
        $(this).addClass('active').siblings().removeClass('active');
        //调用接口获取数据
        getSecondCategory(id);
        
    });
});

// 根据一级分类ID获取二级分类
function getSecondCategory(id) {
    $.ajax({
        url: '/category/querySecondCategory',
        type: 'get',
        data: {
            id: id
        },
        success: function(response) {
            //console.log(response);
            var html = template('category-second', { result: response.rows });
            $(".brand-list").html(html);
        }
    });
}