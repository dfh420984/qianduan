var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema

var userSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	nickname: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
		default: '/public/img/avatar-default.png'
	},
	bio: {
		type: String,
		default: ''
	},
	bio: {
		type: Number,
		enum: [-1, 0, 1],
		default: -1
	},
	birthday: {
		type: Date
	},
	status: {
		type: Number,
		//0: 没有权限限制，1.不可以评论，2.不可以登录
		enum: [0, 1, 2],
		default: 0
	},
	created_time: {
		type: Date,
		default: Date.now
	},
	last_modified_time: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('User', userSchema)