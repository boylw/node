function fn (callback){
	setTimeout(function(){
		var data = 'hello'
		callback(data)
		//return data   ----undefined
	},2000)
	// return data  ----报错
}

var data = fn(function(data){
	console.log(data)
})

