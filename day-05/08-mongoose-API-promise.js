
var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/test')

var user = new Schema({
	name : {
		type : String,
		required : true
	},
	password : {
		type : String,
		required : true
	}
})

var User = mongoose.model('Puser',user)

var admin = new User(
	{
		name : "张三",
		password : "123"
	}
)

// admin.save().then(() => console.log('meow'))

// User.find(function (err,ret){
// 	if (err) {
// 		console.log('查询出错');
// 	} else {
// 		console.log('查询成功');
// 		console.log(ret);
// 	}
// })
// 

/**
 * promise注册操作
 * @type {String}
 */
// User.findOne({name : '王五'})
// .then(function(date){
// 	// 已经注册过了
// 	if (date) {
// 		console.log('已经注册过了');
// 	} else {
// 		return new User({
// 			name : "王五",
// 			password : "456"
// 		}).save().then(() => console.log('save success'))
// 	}
// })


/**
 * 删除判断
 * @type {String}
 */
// User.find({
// 	username: 'admin'
// })
// .then(function(date){
// 	if (date !='') {
// 		User.remove({username : 'admin'})
// 		.then(() => console.log('删除成功'))
// 	} else {
// 		console.log('不存在这个用户');
// 	}
// })

/**
 * 查询所有
 */
User.find()
 .then(function(date){
 	console.log(date)
 })