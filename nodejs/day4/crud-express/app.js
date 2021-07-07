
/**
 * 入口模块
 * 启动服务，做一些配置
 */
var express = require('express')
var router = require('./router')
var bodyParser = require('body-parser')
var app = express()

app.engine('html', require('express-art-template'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))

//router(app)
//把路由容器挂载到app
app.use(router)

app.listen(3000, function() {
    console.log('server 3000 is running')
})

module.exports = app