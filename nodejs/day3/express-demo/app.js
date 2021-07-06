var express = require('express')
var app = express();
//开放静态资源路径
app.use('/public', express.static('./public/'))
app.use('/static', express.static('./static/'))
app.get('/', function(req, res){
	res.send("hello express")
})
app.get('/about', function(req, res){
	res.send("hello about")
})
app.get('/html', function(req, res){
	res.send(`<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>微信滑动门</title>
	<style type="text/css">
		body {
			background: url('./images/wx.jpg') repeat-x;
		}

		li{
			list-style: none;
		}

		.nav li {
			float: left;
			margin: 0 15px;
		}

		.nav a {
			height: 33px;
			line-height: 33px;
			color: #fff;
			text-decoration: none;
			background: url('./images/to.png') no-repeat;
			display: inline-block;
			padding-left: 15px;
		}

		.nav a span {
			height: 33px;
			background: url('./images/to.png') no-repeat right;
			display: inline-block;
			padding-right: 15px;
		}

		.nav a:hover {
			background: url('./images/ao.png');
		}

		.nav a:hover span {
			background: url('./images/ao.png');
		}
	</style>
</head>
<body>
	<ul class="nav">
		<li>
			<a href="">
				<span>
					首页
				</span>
			</a>
		</li>

		<li>
			<a href="">
				<span>
					首页12
				</span>
			</a>
		</li>
		<li>
			<a href="">
				<span>
					首页233
				</span>
			</a>
		</li>
		<li>
			<a href="">
				<span>
					首页233332
				</span>
			</a>
		</li>
	</ul>
</body>
</html>`)
})
app.listen(3000, function(){
	console.log('app is running 3000')
})