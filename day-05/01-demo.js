var mongoose = require('mongoose')

var Schema = mongoose.Schema
/**
 * [mongodb连接]
 * @type {[Schema：返回一个数据库操作对象]}
 */

mongoose.connect('mongodb://localhost/test')

/**
 * [实例化，创造一个表结构]
 * @type {Schema}
 */
var userSchema = new Schema({
	username : {
		type : String,
		required : true
	},
	password : {
		type : String,
		required : true
	}
})

/**
 * [mongoose.model方法就是将一个架构发布到model上]
 * @type {[返回一个模型构造函数]}
 */
var User = mongoose.model('User',userSchema)

/**
 * 有了构造函数就可以，就可以实例化这个构造函数
 * @type {User}
 */
var admin = new User({
    username : 'admin',
    password : '12346'
})

/**
 * 存储数据
 * @param  {[存储对象]}
 * @param  {[灰调函数]}
 * @return {[返回结果]}
 */

// admin.save(function(err,ret){
//     if (err) {
//         console.log('存储失败')
//     } else {
//         console.log('存储成功')
//         console.log(ret)
//     }
// })

/**
 * @param  {查询数据}
 * @param  {[回调函数]}
 * @return {[查询结果]}
 */
User.find({
	username : 'admin'
},function(err,ret) {
    if (err) {
        console.log('查询失败')
    } else {
        console.log('查询成功')
        console.log(ret)
    }
})

// User.findOne({
// 	username : 'admin'
// },function(err,ret) {
//     if (err) {
//         console.log('查询失败')
//     } else {
//         console.log('查询成功')
//         console.log(ret)
//     }
// })

/**
* @param  {删除数据}
 * @param  {[回调函数]}
 * @return {[查询结果]}
 */
// User.remove({
//     _id : '5b2262514d66db2624ae11f2'
//     },function(err,ret){
//        if (err) {
//           console.log('删除失败')
//       } else {
//           console.log('删除成功')
//           console.log(ret)
//       }
//   })

/**
 * [更新操作ById]
 * @param  {[type]} 第一个参数  [id]
 * @param  {[type]} 第二个参数 [改成]
 * @return {[type]} [description]
 */
User.findByIdAndUpdate('5b2262918b73682830309d1e',{
	password : 123
},function(err,ret) {
	if (err) {
        console.log('更新失败')
    } else {
        console.log('更新成功')
        console.log(ret)
    }
})

User.update({username:'admin'},{password : 123456789},function(err){
	if (err) {
		console.log('更新失败');
	}
})