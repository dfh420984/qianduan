/**
 * 路由模块，专门处理路由
 */

var fs = require('fs')

//自己封装的不太方便，用express更好的方式，专门包装路由
// module.exports = function(app) {
//     app.get('/students', function(req, res) {
//         fs.readFile('./db.json', 'utf8', function(err, data) {
//             if (err) {
//                 return res.status(500).send('server error')
//             }
//             res.render('index.html', {
//                 fruits: [
//                     '香蕉',
//                     '苹果',
//                     '梨子'
//                 ],
//                 students: JSON.parse(data).students
//             })
//         })
//     })

//     app.get('/students/new', function(req, res) {

//     })

// }

var express = require('express')
//1.创建路由容器
var router = express.Router()
//2.挂载路由进入容器
router.get('/students', function(req, res) {
    fs.readFile('./db.json', 'utf8', function(err, data) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.render('index.html', {
            fruits: [
                '香蕉',
                '苹果',
                '梨子'
            ],
            students: JSON.parse(data).students
        })
    })
})

router.get('/students/new', function(req, res) {
    res.render('new.html')
})

router.post('/students/new', function(req, res) {
    console.log(req.body)
})

router.get('/students/edit', function(req, res) {

})

router.post('/students/edit', function(req, res) {

})

router.get('/students/delete', function(req, res) {

})

//3.把router导出
module.exports = router
