/*
  0. 安装
  1. 引包
  2. 创建服务
  3.监听端口
  4.响应处理
*/

// 0
// 1
var express = require('express')
// 2
var app = express()
// 4
app.get('/',function(req,res){
		res.end('hello world')
	})
app.get('/about',function(req,res){
	    res.setHeader('Content-Type','text/plain;charset=utf-8')
		res.end('关于我')
	})
app.get('/html',function(req,res){
	    res.setHeader('Content-Type','text/html;charset=utf-8')
	    var contents = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><title>Document</title></head><body><h1>你好啊 express</h1></body></html>`
		res.end(contents)
	})
//  公开一个文件夹，是的外部可以访问
app.use('/public/',express.static('./public/'))
// 3
app.listen('3000',function(){
	console.log('server port 3000 is runing');
})
