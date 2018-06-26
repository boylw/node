var express = require('express')
var url = require('url')
<<<<<<< HEAD
=======
var bodyParser = require('body-Parser')
>>>>>>> node.js

var app = express()

var comments = [{
		name : '小木那个',
		message : '遗产小和尚',
		dateTime : '2018/5/12'
	}]

var comment = []
// express中的模板引擎配置
app.engine('html',require('express-art-template'))

<<<<<<< HEAD
=======
// 配置body-parser中间件，处理post请求数据
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

>>>>>>> node.js
app.use('/public/',express.static('./public'))
app.use('/node_modules/bootstrap/',express.static('./node_modules/bootstrap/'))

app.get('/',function (req,res){
	res.render('index.html',{
		comments : comments
	})
})

app.get('/post',function (req,res){
	res.render('post.html')
})

<<<<<<< HEAD
=======
/*
>>>>>>> node.js
app.get('/pinglun',function (req,res){
    comment = url.parse(req.url,true).query
    comment.dateTime = '2018/5/14'
    comments.unshift(comment)

<<<<<<< HEAD
    res.statusCode = 302
    res.setHeader('Location','/')
    res.send()
=======
    res.redirect('/')
    // res.statusCode = 302
    // res.setHeader('Location','/')
})
*/

// express 处理 post  提交
app.post('/pinglun',function (req,res){
	console.log(req.body);
	comment = req.body
    comment.dateTime = '2018/5/14'
    comments.unshift(comment)

    res.redirect('/')
>>>>>>> node.js
})

app.listen('3000',function() {
	console.log('server is run');
})
