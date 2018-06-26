var fs = require('fs')

var express = require('express')

var router = express.Router()

var Student = require('./Date-02')

/**
 * 主頁渲染
 * @param  {[type]} req                   [description]
 * @param  {[type]} res){	Student.find} [description]
 * @return {[type]}                       [description]
 */
router.get('/studens',function(req,res){
	Student.find(function(err,data){
		if (err) {
			res.send('Server is error')
		} else {
			res.render('index.html',{
				fruits: [
				'橘子',
				'橙子',
				'苹果',
				'香蕉'
			],
			students : data
			})
			console.log(data)
		}
	})
})

/**
 * 新增學生頁面渲染
 * @param  {[type]} req                              [description]
 * @param  {[type]} res){	res.render('post.html')} [description]
 * @return {[type]}                                  [description]
 */
router.get('/students/new',function(req,res){
	res.render('post.html')
})

/**
 * 新增學生保存跳轉
 * @param  {[type]}  req        [請求體]
 * @param  {Student} res){	var student       [響應體]
 * @return {[type]}             [description]
 */
router.post('/students/new',function(req,res){
	new Student(req.body).save(function(err,data){
		if (err) {
			console.log(err)
			res.send('Server is error')
		} else {
			res.redirect('/studens')
		}
	})
})


router.get('/students/edit',function(req,res){

	Student.findById(req.query.id,function(err,data){
		if (err) {
			return res.send('Server is error')
		}
		res.render('edit.html',{
			student : data
		})
	})
})

/**
 * 編輯處理
 * @param  {[type]} req                                                                  [description]
 * @param  {[type]} res){	Student.findOneAndRemove(req.body.id,function(err,data){		if (err)         {			return res.send('Server is error,刪除錯誤')		}	})	new Student(req.body).save(function(err,data){		if (err) {			console.log(err)			return res.send('Server is error')		}		res.redirect('/studens')	})} [description]
 * @return {[type]}                                                                      [description]
 */
router.post('/students/edit',function(req,res){

	Student.findByIdAndUpdate(req.body.id,{
		name : req.body.name,
		gender : req.body.gender,
		hobbies : req.body.hobbies,
		age : req.body.age
	},function(err,data){
		if (err) {
			return res.send('Server is error')
		}
		res.redirect('/studens')
	})

	// Student.findOneAndRemove(req.body.id,function(err,data){
	// 	if (err) {
	// 		return res.send('Server is error,刪除錯誤')
	// 	}
	// })

	// new Student(req.body).save(function(err,data){
	// 	if (err) {
	// 		console.log(err)
	// 		return res.send('Server is error')
	// 	}
	// 	res.redirect('/studens')
	// })
})

/**
 * 刪除處理
 * @param  {[type]} req                                                              [description]
 * @param  {[type]} res){	Student.findOneAndRemove(req.query.id,function(err){		if (err)         {			return res.send('Server is error')		}		res.redirect('/studens')	})} [description]
 * @return {[type]}                                                                  [description]
 */
router.get('/students/delete',function(req,res){

	Student.findOneAndRemove(req.query.id,function(err){
		if (err) {
			return res.send('Server is error')
		}
		res.redirect('/studens')
	})
})

module.exports = router
