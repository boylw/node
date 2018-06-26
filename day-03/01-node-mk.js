// 这里fooExports 是一个对象，只有点出来才能获取里面的成员
/*
   有时候我们只想得到对象里的一个东西
**/ 
var fooExports = require('./01-foo.js')
/*
  只能访问给的内容
*/

console.log(fooExports)