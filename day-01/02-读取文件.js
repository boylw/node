//浏览器的javascript没有文件操作的能力
// 但是在node中的js有

//fs 就是 file-system的简写，文件系统的简写
// node中想要进行文件操作就必须引入  fs这个核心模块


// 1.使用require方法加载fs文件

var fs = require('fs');

// 2.读取文件


fs.readFile('./hello.txt',function(error,data){

//    第一个参数就是尧都区的文件路径
//    第二个参数是一个回调函数
//    error data
//    成功  data 数据 error null
//    失败  data null error 错误对象
        if (error) {
        	console.log('读取失败');
        	console.log(error);
        } else {	
		console.log(data.toString());
        }
		/*
		<Buffer 76 61 72 20 66 6f 6f 20 3d 20 22 68 65 6c 6c 6f 77 6f 72 6c 64 22 3b 0d 0a 0d 0a 63 6f 6e 73 6f 6c 65 2e 6c 6f 67 28 66 6f 6f 29 3b>
		结果是二进制字符串转为了16进制
		*/
});