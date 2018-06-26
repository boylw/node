var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')
var router = require('./router-02.js')


var app = express()
// 配置
// art-template is running in express engine
app.engine('html',require('express-art-template'))
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.use('/public/',express.static('./public'))
app.use('/node_modules/',express.static('./node_modules'))

// 讲router挂载到服务器上
app.use(router)

app.listen(3000, function (){
	console.log('Server is running');
})