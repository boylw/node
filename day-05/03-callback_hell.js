
var fs = require('fs')

fs.readFile('./test/a.txt','utf-8',function(err,data){
	if (err) {
		console.log('读取失败'+err)
	} else {
		fs.readFile('./test/b.txt','utf-8',function(err,data){
			if (err) {
				console.log('读取失败'+err)
			} else {
				fs.readFile('./test/c.txt','utf-8',function(err,data){
						if (err) {
							console.log('读取失败'+err)
						}
						console.log(data)
					})
				console.log(data)
			}
			
		})
		console.log(data)
	}	
})