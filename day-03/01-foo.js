var foo = 'bar'

function add (x,y){
	return x+y
}

// exports.add = add

// exports 是一个对象
// 我们可以通过多次添加成员

// exports.str = foo

// 既然exports是对象，那么我就在每个模块的最后 return 了这个方法
module.exports = add 

// 这里要想给exports指定一种我们想要的类型，只能挂起，使用module.exports = xxx 才可以