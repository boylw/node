// 干一件使用node很有成就感的事
// 用node构建web服务器
// 在node中提供了一个核心模块:http


// 1.先引入http核心模块

var http = require('http');

// 2.使用http.createServer()方法创建一个web服务器
//  返回一个Server实例

var server = http.createServer();

//3.服务器干嘛？
//  提供服务 、 发送请求 、 接受请求 、 处理请求

//这里是请求处理，首先收到客户端的请求，就会自动触发第二和函数，然后执行第二个函数。回调处理函数

server.on('request',function(request,response){

	console.log('收到客户端的请求啦'+ request.url);

	//设置响应数据时要用到response.write()方法
	// 但是注意，可以写多个write方法，但是必须要有end方法结束
	response.write('hello');
	response.write(' node.js');
	response.end();
})

// request的处理响应的两个对象：request，response。

//  4.绑定端口号，启动服务器
//  -----绑定端口号，防止数据窃取
//  ------3000这里只要不被占用就可以
server.listen(3000,function(){
	console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/进行访问');
})

