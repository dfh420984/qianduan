var express = require('express')
var User = require('./models/user')
var md5 = require('blueimp-md5')
var router = express.Router()

router.get('/', function(req, res){
	res.render('index.html', {
		user: req.session.user
	})
})

router.get('/login', function(req, res){
	res.render('login.html')
})

router.post('/login', function(req, res){
	//console.log(req.body)
	var body = req.body
	User.findOne({
		email: body.email,
		password: md5(md5(body.password))
	}, function(err, user){
		if (err) {
			return res.status(500).json({
				err_code: 500,
				message: err.message
			})
		}
		if (!user) {
			return res.status(200).json({
				err_code: 1,
				message: 'email or password is wrong'
			})
		}

		//登录成功后记录session状态
		req.session.user = user

		return res.status(200).json({
				err_code: 0,
				message: 'ok'
		})
	})
})

router.get('/register', function(req, res){
	res.render('register.html')
})

router.post('/register', function(req, res){
	var body = req.body
	User.findOne({
		$or: [
				{
					email: body.email
				},
				{
					nickname: body.nickname
				}
			]
	}, function(err, data){
		if (err) {
			return res.status(500).json({
				err_code: 500,
				message: 'server error'
			})
		}
		if (data) {
			return res.status(200).json({
				err_code: 1,
				message: 'email or nickname already exists'
			})
		}
		body.password = md5(md5(body.password))
		new User(body).save(function(err, user){
			if (err) {
				return res.status(500).json({
					err_code: 500,
					message: 'server error'
				})
			}
			//注册成功后记录session状态
			req.session.user = user

			return res.status(200).json({
				err_code: 0,
				message: 'ok'
			})
		})
	})
})

router.get('/logout', function(req, res){
	req.session.user = null
	res.redirect('/login')
})

module.exports = router

