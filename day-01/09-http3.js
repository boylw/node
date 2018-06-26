var http = require('http');

var server = http.createServer();

server.on('request',function(request,response){

	//设置中文格式，告诉浏览器我响应的文本类型是普通文本
	var url = request.url;
	if (url === '/'){
		response.setHeader('Content-Type','text/plain; charset=utf-8');
		response.end('hello 世界');
	}else if (url === '/plain'){
		response.setHeader('Content-Type','text/plain; charset=utf-8');
		response.end('hello 普通文本');
	} else if (url === '/html'){
		response.setHeader('Content-Type','text/html; charset=utf-8');
		response.end('<p><a href="#">你好，点我</a></p>');
	} else {
		response.end('404');
	}
});

server.listen(5000,function(){
	console.log('Server is runing');
})