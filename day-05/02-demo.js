var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test')

var userSchema = new Schema({
	username : {
		type : String,
		required : true
	},
	password : {
		type : String,
		required : true
	},
	email : {
		type : String
	}
})
var User = mongoose.model('User',userSchema)

var admin = new User({
	username : 'admin',
	password : '12346',
	email : 'admin@admin.com'
})

/**
 * 新增数据
 */
// admin.save(function(err,ret){
// 	if (err) {
// 		console.log('保存失败');
// 	} else {
// 		console.log('保存成功');
// 	}
// })

/**
 * 查询数据
 */
User.find({
   password : '123'
},function (err,ret){
	if (err) {
		console.log('查询出错');
	} else {
		console.log('查询成功');
		console.log(ret);
	}
})
