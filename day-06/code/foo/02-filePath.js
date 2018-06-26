var fs = require('fs')
var path = require('path')

module.exports = function(callback){
	// ./a.txt是相对于执行node命令所处的终端路径
fs.readFile(path.join(__dirname,'./a.txt'),'utf-8',function (err, data){
	if (err) {
		return callback(err)
	} else {
	    return callback(null,data)
	}
})
}
