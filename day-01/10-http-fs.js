var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request',function(request,response){
	// url就是所谓的标示路径，不是文件路径
	var url = request.url;


	// 默认文件读取内容
	if (url === '/'){

		//读取文件内容，err和data两个参数
		fs.readFile('./resource/index.html',function(err,data){
			if (err){
				response.setHeader('Content-Type','text/plain; charset=utf-8')
				response.end('文件读取失败')
			} else {
				//设置响应头文件格式
				response.setHeader('Content-Type','text/html; charset=utf-8');
				//响应返回数据的两种格式，Buffer和String
				// 这里的data就是二进制格式
				response.end(data);
			}
		})
	} else if (url === '/login'){

		//读取文件内容，err和data两个参数
		fs.readFile('./resource/login.html',function(err,data){
			if (err){
				console.log('文件读取失败')
			} else {
				//设置响应头文件格式
				response.setHeader('Content-Type','text/html; charset=utf-8');
				//响应返回数据的两种格式，Buffer和String
				// 这里的data就是二进制格式
				response.end(data)
			}
		})
	} else if (url === '/hello'){
		fs.readFile('./resource/hello.txt',function(err,data){
			if (err){
				console.log('文件读取失败')
			} else {
				//设置响应头文件格式
				response.setHeader('Content-Type','text/plain; charset=utf-8');
				//响应返回数据的两种格式，Buffer和String
				// 这里的data就是二进制格式
				response.end(data)
			}
		})
	} else {
		response.end('<h1>404</h1>');
	}
})

server.listen(3000,function(){
	console.log('Server is runing');
})