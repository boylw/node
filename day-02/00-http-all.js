;
var http = require('http')
var fs = require('fs')

var server = http.createServer()

//  请求绑定
server.on('request',function(request,response){
	var url = request.url;
	var resource = 'D:/PHPTutorial/WWW/node.js/day-02/resource'
	var filePath = '/index.html'
	
	if (url === '/') {
		console.log(resource + filePath)
		fs.readFile(resource + filePath,function (err,data) {
			if (err) {
				response.setHeader('Content-Type','text/plain; charset=utf-8')
				response.end('文件读取失败!')
			} else {
				response.setHeader('Content-Type','text/html; charset=utf-8')
				response.end(data)
			}
		})
	} else {
		// 获取用户想要访问的路径
		filePath = url
		// 对其进行文件读操作
		fs.readFile(resource + filePath,function (err,data) {
			if (err) {
				// 如果出错，说明不存在文件
				response.setHeader('Content-Type','text/plain; charset=utf-8')
				response.end('404')
			} else {
				// 这里对用户访问类型进行判断，设置响应类型
				if (url !== '/favicon.ico'){	
					var species = url.substr(url.lastIndexOf('.'))
					if (species === '.txt'){
						response.setHeader('Content-Type','text/plain; charset=utf-8')
					} else if (species === '.html') {
						response.setHeader('Content-Type','text/html; charset=utf-8')
					} else if (species === '.jpg') {
						response.setHeader('Content-Type','image/jpeg')
					}
				}
				// 返回响应体内容
				response.end(data)
			}
		})
	}
	
})
// 服务监听,端口
server.listen('3000',function(){
	console.log('Server is Runing');
})
