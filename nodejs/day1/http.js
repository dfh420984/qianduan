var http = require('http');
//创建web 服务器
var server = http.createServer();
//监听客户请求
server.on('request', function(request, response){
	console.log('收到客户端请求, 请求路径:'+request.url);
	//响应客户端数据
	response.setHeader('Content-Type', 'text/plain; charset=utf-8');
	response.write("hello world\n");
	response.write("你好nodejs");
	response.end();
});
//绑定端口号，启动服务器
server.listen(3000, function(){
	console.log('服务器启动成功');
});