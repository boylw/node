var express = require('express')
var fs = require('fs')
var template = require('art-template')
var url = require('url')


var app = express()

var comments = [
    {
    	name:'张三',
    	message : 'alldaldja',
    	dateTime : '2018/12/3'
    },
    {
    	name:'张三',
    	message : 'alldaldja',
    	dateTime : '2018/12/3'
    },
    {
    	name:'张三',
    	message : 'alldaldja',
    	dateTime : '2018/12/3'
    },
    {
    	name:'张三',
    	message : 'alldaldja',
    	dateTime : '2018/12/3'
    },
    {
    	name:'张三',
    	message : 'alldaldja',
    	dateTime : '2018/12/3'
    }
]

//  这里接收用户提交的留言
var comment = []
// 获取用户提交的url对象


app.use('/node_modules/bootstrap/',express.static('./node_modules/bootstrap/'))
app.use('/View/',express.static('./View/'))



app.get('/',function(req,res){
	fs.readFile('./View/index.html',function(err,data){
		if (err) {
			// 返回错误页面
			fs.readFile ('./View/404.html',function(err,data){
				res.end(data)
			})
		}

		data = template.render(data.toString(),{
			comments : comments
		})
		res.end(data)
	})
})

app.get('/pinglun',function(req,res){
	comment = url.parse(req.url,true).query
	comment.dateTime = '2018/12/4'
	comments.unshift(comment)

	// 定义重定向
	res.statusCode = 302
	res.setHeader('Location','/')
	res.end()
})

app.listen('3000',function(){
	console.log('server is run');
})