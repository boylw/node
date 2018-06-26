/**
 * 支持promise and callback 格式的ajax——get请求函数封装
 * @param {[type]}   url      [请求路径]
 * @param {Function} callback [回调函数，err,data->String]
 */
	function Get(url,callback){
		return new Promise(function(resolve,reject){
			if (window.XMLHttpRequest) {
			xml = new XMLHttpRequest()
			} else {
				xml = new ActiveXObject('Microsft.XMLHTTP')
			}
			xml.open('get',url,true)
			xml.send()
			xml.onreadystatechange = function(){
				if (xml.readyState == 4 && xml.status == 200){
					var data = xml.responseText
					callback && callback(null , data)
					resolve(data)
				}
			}
			xml.onerror = function(err) {
				callback(err)
			}
		})
	}
	