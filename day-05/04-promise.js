/**
 * promise 是一个构造函数
 * 我们在使用是要先new一个Promise容器
 * 在容器内部写入异步操作
 *
 * promise 承诺是同步的
 * 承诺里的任务是异步的
 */

var fs = require('fs')

// console.log(1)
var p1 = new Promise(function(resolve,reject){
	// console.log(2)
	fs.readFile('./test/a.txt','utf-8',function(err,data){
		// console.log(3)
		if (err) {
			// 承诺中的容器失败了
			// console.log(err)
			reject(err)
		} else {
			// console.log(data)
			resolve(data)
		}
	})
	// console.log(4)
})

var p2 = new Promise(function(resolve,reject){
	// console.log(2)
	fs.readFile('./test/b.txt','utf-8',function(err,data){
		// console.log(3)
		if (err) {
			// 承诺中的容器失败了
			// console.log(err)
			reject(err)
		} else {
			// console.log(data)
			resolve(data)
		}
	})
	// console.log(4)
})

var p3 = new Promise(function(resolve,reject){
	// console.log(2)
	fs.readFile('./test/c.txt','utf-8',function(err,data){
		// console.log(3)
		if (err) {
			// 承诺中的容器失败了
			// console.log(err)
			reject(err)
		} else {
			// console.log(data)
			resolve(data)
		}
	})
	// console.log(4)
})

/**
 *  p1 就是那个承诺
 *  当p1成功后做指定的操作
 *  then 方法接受的function就是容器中的resolve()和reject()
 *  return 的东西在下面then的时候funtion(data)中的
 *  data 就是 return对象的第一个参数函数
 */

p1.then(function (data) {
   console.log(data)
   // 当p1 读取成功的时候
   return p2
},function (err) {
   console.log('读取失败了'+err)
})
  .then(function (data) {
  	console.log(data)
  	return p3
  })
  .then(function (data) {
  	console.log(data)
  	console.log('end')
  })
