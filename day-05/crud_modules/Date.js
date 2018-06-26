/**
   数据处理模块
   实现数据增删改查
*/

var fs = require('fs')
var dbPath = './db.json'
/**
    查询数据
    @param  
******************
	example:
	Student.findAll(function (err,data){
		if (err) {
			return res.status(500).send('Server is error')
		}
		res.render('index.html',{
			fruits: [
				'橘子',
				'橙子',
				'苹果',
				'香蕉'
			],
			students : data
		})
	})
*/
exports.findAll = function(callback){
	// 这里文件读取为异步操作，要想获取里面的数据或对象，只能采用异步操作callback
	fs.readFile(dbPath,function(err,data) {
		if (err) {
			return callback(err)
		}
		data = JSON.parse(data).students
		return callback(null,data)
	})
}

/**
    查询单条数据
    @param 传入学生id
    @param return []
*/
exports.findOne = function(id,callback){
	
	fs.readFile(dbPath,'utf8',function(err,data){
		if (err) {
			return callback(err)
		}

		var students = JSON.parse(data).students

		var student = students.find(function(item){
			return item.id === parseInt(id)
		})
		return callback(null,student)
	})
}
/**
    添加并保存
******************
	example : 
	Student.save({'name':'xxx'},function(err){
		if (err) {
		return console.log('err');
		}
		console.log('success');
	})
*/

exports.save = function(wData,callback){
	fs.readFile(dbPath,function(err,data){
		// 这里先拿文件数据
		if (err) {
			return callback(err)
		}
		// 获取文件数组
		var students = JSON.parse(data).students

		// 处理文件里的id，增加1，确保不重复
		wData.id = students[students.length - 1].id + 1
		students.push(wData)

		// 转为字符串保存进文件内 
		students = JSON.stringify({students})

		// 再写入文件内部
		fs.writeFile(dbPath,students,function(err){
			if (err) {
				return callback(err)
			}
			return callback(null)
		})
	})
}

/**
  更新信息
******************
*/

exports.update = function(obj,callback){

	fs.readFile(dbPath,'utf8',function(err,data){
		if (err) {
			return callback(err)
		}
		var students = JSON.parse(data).students

		// 这里使用一个es6的方法，find方法，用于查找对像
		// 使用方法，传一个遍历的对象，和一个函数，函数ruturn 一个boolean值
		var student = students.find(function(item){
			return item.id === parseInt(obj.id)
		})

		// 进行更新
		for (var stu in obj) {
			student[stu] = obj[stu]
		}

		// 更新完后再写入文件中
		students = JSON.stringify({students})

		fs.writeFile(dbPath,students,function(err){
			if (err) {
				return callback(err)
			}
			return callback(null)
		})
	})
}


/**
  删除信息
******************
*/

exports.delete = function(id,callback){

fs.readFile(dbPath,'utf8',function(err,data){
		if (err) {
			return callback(err)
		}
		var students = JSON.parse(data).students

		// 这里使用一个es6的方法，find方法，用于查找对像
		// 使用方法，传一个遍历的对象，和一个函数，函数ruturn 一个boolean值
		students.splice(parseInt(id),1)

		fs.writeFile(dbPath,JSON.stringify({students}),function(err){
			if (err) {
			return callback(err)
			}
			return callback(null)
		})
	})
}