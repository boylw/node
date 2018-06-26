// node中的写文件

var fs = require('fs');

fs.writeFile('./hello1.txt','大家好，我是node写文件',function(error){
	//第一个参数是文件路径，第二个是内容,第三个是回调函数
	// error是错误对象 ： 成功是null，错误是错误对象
	if (error){
		console.log('写入失败');
		return;
	}else{
		console.log('写入成功');
	}
	
})