/**
 * promise的封装
 * 用于异步编程
 * 防止回调地狱
 */

var fs = require('fs')


function pReadFile(filePath){
	return new Promise(function(resolve,reject) {	

		fs.readFile(filePath,'utf-8',function (err,data) {
			if (err) {
				reject(err)
			} else {
				resolve(data)
			}
		})

	})
}

pReadFile('./test/a.txt')
	.then(function (data) {
		console.log(data)
		return pReadFile('./test/b.txt')
	})
	.then(function (data) {
		console.log(data)
		return pReadFile('./test/c.txt')
	})
	.then(function (data) {
		console.log(data)
	})