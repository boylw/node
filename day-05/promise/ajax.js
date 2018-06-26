
/**
 * ajax 异步请求封装
 * path 请求路径
 * callback 回调函数
 */

function M_Ajax_Get(url,callback){

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
			callback(null , data)
			
		}

	}
}
