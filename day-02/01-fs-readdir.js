var fs = require('fs')

fs.readdir('D:/PHPTutorial/WWW/node.js/day-02/resource',function(err,files){
	if (err){
		return console.log(err)
	} else {
		console.log(files);
	}
})