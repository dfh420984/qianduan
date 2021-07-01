var fs = require('fs');
// 读文件
fs.readFile('./helloworld.js', function(error, data){
	if (error) {
		console.log('读取错误');
		return;
	}
	console.log(data.toString());
});
//写文件
fs.writeFile('test.txt', 'helloworld', function(error){
	if (error) {
		console.log('写入错误');
		return;
	}
	console.log('文件写入成功');
});