var comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]

var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// 当渲染.art结尾文件时，使用express-art-template模版引擎
//app.engine('art', require('express-art-template'));
app.engine('html', require('express-art-template'));

// 修改默认views的路径
// app.set('views', '渲染的render目录路径')

//配置中间件插件解析表单post请求体
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//设置静态文件目录
app.use('/public', express.static('public'))
app.use('/views', express.static('views'))

//页面渲染相对views目录
app.get('/', function(req, res){
  res.render('index.html', {
    comments: comments
  })
})
app.get('/admin', function(req, res){
  res.render('admin/index.html', {title:'管理系统'})
})

app.get('/page', function(req, res){
  res.send('page')
})

app.get('/post', function(req, res){
  res.render('post.html')
})

app.post('/post', function(req, res){
  var comment = req.body
  comment.dateTime = '2021-10-16'
  comments.unshift(comment)
  res.redirect('/')
})

// app.post('/pinglun', function(req, res){
//   console.log(req.query)
//   var comment = req.query
//   comment.dateTime = '2021-10-16'
//   comments.unshift(comment)
//   res.redirect('/')
// })

app.listen(3000, function(){
  console.log('server 3000 is running')
})