
var mongoose = require('mongoose')

var Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/student')

//{"id":"0","name":"小米黑科技","age":"18","gender":"女","hobbies":"乒乓球,篮球,足球"}
var studentSchema = new Schema({
	name : {
		type : String,
		required : true
	},
	age : {
		type : Number,
		required : true
	},
	gender : {
		type : Number,
		enum : [0,1],
		default : 0
	},
	hobbies : {
		type : String,
		required : true
	}
})

module.exports = mongoose.model('Student',studentSchema)

