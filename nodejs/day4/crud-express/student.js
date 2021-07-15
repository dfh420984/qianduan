/**
 * 数据操作文件模块，只处理数据
 */
var fs = require('fs')

var dbPath = './db.json'

//获取学生
//需要通过回掉函数获取异步数据
exports.find = function(callback) {
	fs.readFile(dbPath, 'utf8', function(err, data){
		if (err) {
			return callback(err)
		}
    	callback(null, JSON.parse(data).students)
	});
}

//查询单个学生
exports.findById = function(id, callback) {
	fs.readFile(dbPath, 'utf8', function(err, data){
		if (err) {
			return callback(err)
		}
		var students = JSON.parse(data).students
		var stu = students.find(function(item){
    		return item.id === parseInt(id)
    	})
    	callback(null, stu)
	});
}



//保存学生
exports.save = function(student, callback) {
	fs.readFile(dbPath, 'utf8', function(err, data){
		if (err) {
			return callback(err)
		}
    	var students = JSON.parse(data).students
    	student.id = students[students.length - 1].id + 1
    	students.push(student)
    	var fileData = JSON.stringify({
    		students: students
    	})
    	fs.writeFile(dbPath, fileData, function(err){
    		if (err) {
    			return callback(err)
    		}
    		callback(null)
    	});
	});
}

//更新学生
exports.updateById = function(student, callback) {
	fs.readFile(dbPath, 'utf8', function(err, data){
		if (err) {
			return callback(err)
		}
    	var students = JSON.parse(data).students
    	//es6数组遍历方法，返回符合条件数据
    	var stu = students.find(function(item){
    		return item.id === parseInt(student.id)
    	})
    	for (var k in student) {
    		stu[k] = student[k]
    	}
    	var fileData = JSON.stringify({
    		students: students
    	})
    	fs.writeFile(dbPath, fileData, function(err){
    		if (err) {
    			return callback(err)
    		}
    		callback(null)
    	});
	});
}

//删除学生
exports.deleteById = function(id, callback) {
	fs.readFile(dbPath, 'utf8', function(err, data){
		if (err) {
			return callback(err)
		}
		var students = JSON.parse(data).students
		var index = students.findIndex(function(item){
    		return item.id === parseInt(id)
    	})
    	students.splice(index, 1)
    	var fileData = JSON.stringify({
    		students: students
    	})
    	fs.writeFile(dbPath, fileData, function(err){
    		if (err) {
    			return callback(err)
    		}
    		callback(null)
    	})
	});
}