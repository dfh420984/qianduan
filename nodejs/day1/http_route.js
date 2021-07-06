var http = require('http');
var server = http.createServer();
server.on('request',function(req, res){
	console.log('收到客户端请求, 请求路径:'+req.url);
	// res.write("hello");
	// res.end();
	
	//res.end("hello nodejs");
	var url = req.url;
	if (url == "/") {
		res.end("index page");
	} else if (url == "/login") {
		res.end("login page");
	} else if (url == "/user") {
		res.end("user page");
	} else if (url == "/product") {
		var product = [
			{
				name: "apple 13",
				price: 8888
			},
			{
				name: "mate 40",
				price: 9999
			}
		];
		res.end(JSON.stringify(product));
	} else {
		res.end("404 not found");
	}
});
//绑定端口号，启动服务器
server.listen(3000, function(){
	console.log('服务器启动成功');
});
