console.log('a start');

//  require有返回值，是对应的加载文件的导出对象。
var bExports = require('./b');
console.log(bExports.foo);

console.log('a end');