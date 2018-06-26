var http = require('http')
var template = require('art-template')
var url = require('url')
var fs = require('fs')

var comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]

http
	.createServer(function(req,res){
		// 讲url转换为对象
		var urlObj = url.parse(req.url,true)
		// 获取url路径
		var pathname = urlObj.pathname

		if (pathname === '/') {
			fs.readFile('./View/index.html',function(err,data){
				if (err) {
					// data  ----> 404
					fs.readFile('./View/404.html',function(err,data){
						return res.end(data)
					})
				}
				// data -> index

				data = template.render(data.toString(),{
					comments:comments
				})
				res.end(data)
			})
		}
		else if (pathname.indexOf('/public/') === 0){
			//当成路径来读取文件，.很重要 ----- data -> public
			fs.readFile('.'+pathname,function(err,data){
				if (err) {
					// data  ----> 404
					fs.readFile('./View/404.html',function(err,data){
					return res.end(data)
					})
				}
				res.end(data)
			})
		} else if (pathname ==='/pinglun') {
			/*
				1.第一个当请求评论时需要获取它的form表单的内容
				2.第二个 comments里没有时间数据，添加时间数据
				3.服务器的网络重定向问题，当status.Code 为302时，会自动寻找Location
				4.设置Location页面自动跳转到主页 '/' ：setHeader('Location','/')
			*/
			var comment = urlObj.query
			console.log(comment)
			comment.dateTime = '2018-6-7 12:32:25'
			comments.unshift(comment)

			// 302 临时重定向 浏览器没记住,会重新请求
			// 301 永久重定向 浏览器会记住
			res.statusCode = 302
			res.setHeader('Location','/')

			res.end()
		}else if (pathname.indexOf('/View/') === 0) {
			// ---------视图层
			fs.readFile('.'+ pathname,function(err,data){
				if (err) {
					// data  ----> 404
					fs.readFile('./View/404.html',function(err,data){
					return res.end(data)
					})
				}
				res.end(data)
			})
		} else {
			// data  ----> 404
			fs.readFile('./View/404.html',function(err,data){
			return res.end(data)
			})
		}
	})
	.listen('3000',function(){
		console.log('Server is run');
	})