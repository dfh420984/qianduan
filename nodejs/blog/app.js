var express = require('express')
var path = require('path')
var router = require('./router')

var app = express()

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/')) // 默认就是 ./views 目录

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname,'./node_modules/')))
//路由挂载到app中
app.use(router)

app.get('/', function(req, res){
	res.render('index.html')
})

app.listen(3000, function(){
	console.log('server 3000 is running')
})