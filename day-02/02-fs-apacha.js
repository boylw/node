var http = require('http')

var fs = require('fs')

var server = http.createServer()

server.on('request',function (req,res){
	var wwwDir = 'D:/PHPTutorial/WWW/node.js/day-02/resource'
	var url = req.url
	var filePath = '/template.html'
	if (url === '/'){

		// 读文件
		fs.readFile(wwwDir + filePath,function (err,data){
			// 文件读取错误
			if (err) {
				return res.end('文件读取错误')
			}

			// 获取文件列表
			fs.readdir(wwwDir, function (err, files){
				// 内容替换量
				var content = ''
				// files => ['index.html','template.html','text.txt']
				files.forEach(function (item){
					content += `
			          <tr>
			            <td data-value="apple/"><a class="icon dir" href="/${item}">${item}/</a></td>
			            <td class="detailsColumn" data-value="0"></td>
			            <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
			          </tr>
			        `
				})

				// 替换
				data = data.toString()
				data = data.replace('.....',wwwDir)
				data = data.replace('^_^',content)
				// 发送解析替换过后的响应数据
				res.end(data)
			})
			
		})
	} else {
		filePath = url
		fs.readFile(wwwDir + filePath,function (err,data){
			if (err) {
				return res.end('NOT found 404')
			}
			res.end(data)
		})
	}
})

server.listen('3000',function (){
	console.log('Server is start');
})