
// 加载进去http
var http = require('http');

//创建一个服务
var server = http.createServer();

//使用服务进行响应处理,绑定端口号
server.on('request',function(request,response){
	console.log('请求客户端的地址是:'+request.url.substr(1));
	console.log('请求的客户端的端口号是： '+request.socket.remotePort);
	console.log('当前请求的客户端ip是:'+request.socket.remoteAddress);
	// switch(request.url) {
	// 	case :
			
	// 		break;
	// 	case :
			
	// 		break;
	// }

	// response.write('hello');
	// response.end();

	//发送数据的同时结束响应
	response.end(request.url.substr(1));
})

//绑定端口号,启动服务
server.listen(3000,function(){
	console.log('服务器启动成功');
})



