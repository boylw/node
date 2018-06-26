var fs = require('fs')

var express = require('express')

var Student = require('./Date')

//  express中提供了一个路由方法，用于提取路由模块
// 模块化开发，方便后期维护
var router = express.Router()

// 主页渲染
router.get('/studens',function (req,res){

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

	
})

// 添加学生页面渲染
router.get('/students/new',function(req,res){
	res.render('post.html')
})

// 添加学生页面处理
router.post('/students/new',function(req,res){
	// fs.readFile('./db.json',function(err,data){
	// 	var students = JSON.parse(data).students
	// 	//id处理
	// 	console.log(students.length)
	// 	req.body.id = students[students.length-1].id + 1

	// 	students.push(req.body)
	// 	students = JSON.stringify({students})

	// res.send(req.body)
	// 	// console.log(typeof students,students)
	// 	fs.writeFile('./db.json',students,function(err){
	// 		if (err) {
	// 			console.log('写入失败');
	// 		}
	// 	})
	// })
	Student.save(req.body,function(err){
		if (err) {
			return res.send('Server is error')
		}
		res.redirect('/studens')
	})
})

// 渲染学生信息
router.get('/students/edit',function(req,res){

	Student.findOne(req.query.id,function(err,data){
		if (err) {
			return res.send('Server is error')
		}
		res.render('edit.html',{
			student : data
		})
	})
})

// 更新学生信息
router.post('/students/edit',function(req,res){

	Student.update(req.body,function(err) {
		if (err) {
			return res.send('Server is error')
		}
		
		res.redirect('/studens')
		
	})
})

router.get('/students/delete',function(req,res){

	Student.delete(req.query.id,function(err){
		if (err) {
			return res.send('Server is error')
		}
		res.redirect('/studens')
	})
})


module.exports = router 