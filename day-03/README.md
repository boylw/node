# Node.js 第三天课堂笔记

## 知识点
- 《深入浅出 NODE.JS》
- 模块系统
   + 核心模块
   + 第三方模块
   + 自己写的模块
- npm
  - package.json
  - Express
    + 第三方Web开发框架
    + 高度封装了`http` 模块
    + 更专注与业务
    + 知其所以然
- 增删改查
  + 使用文件来保存数据(锻炼异步操作)
- MongoDB
  + (所有方法都封装好啦)

## Day-03
### Node.js中的模块系统
- 使用Node编写应用程序主要是使用模块：
    + ECMAstript
    + 核心模块
      - 已经学的核心模块
        + http
        + url
        + fs
        + path
        + os
    + 第三方模块
       - 已经学的核心模块
        + art-template
        + 必须通过npm下载才可以使用
    + 咱们自己写的模块
       - 自己创建的文件 (require / exports / imports)

- 什么是模块化
    + 文件作用于
    + 通信柜子
      - 加载require
      - 导出
- CommonJs 模块规范
  在 Node 中的javascript还有一个重要概念:模块系统
    - 模块作用域
    - 使用require方法用来加载模块
    - 使用exports接口对象用来导出模块中成员

- 加载 `require` 

 ```javascript
    var exports = require('path')
```
- 加载规则
 + 优先从缓存加载，可以拿到借口对象，但是不会重复加载
 + 路径形式的模块
   - / 表示当前文件模块所属的磁盘跟目录
   - ./ or ../ or /xxx 
   - D:/a/foo.js  ----> 几乎不用
- 导出`exports`
  ```javascript
    exports.a = 'abc'
    exports.b = 123
    exports.add = function add (x, y){return x+y}
  ```
  + 导出单个类型
  - Node 中是模块作用域，默认文件中所有的成员只在当前文件模块有效
  - 这里得到的不是exports对象，而是成员本身
  - 这里后者会覆盖前者
  ```javascript
     导出单个成员
     module.exports = 'hello'
     module.exports = function (x, y){return x+y}

     导出多个成员
     exports.hello = 'hello'
     exports.add = add
     exports.fun = function(){}
     exports.foo = { foo : bar }

     导出多个成员2
     module.exports = {
     	foo : 'hello',
     	add : function (){
     		var a = 's'
     	}.......
     }
  ```
  - 解析原理
  exports 和 `module.exports` 两者是一样的
  ```javascript
     所有的模块系统内部都有
     module = {
     	exports = {
     		...
     	}
     }
     var exports = module.exports
     最后有一个
     return module.exports
  ```

  - each 和 forEach 的区别
    + forEach ECMAstript 5 提供的
       * 不兼容 IE 8 一下
    + jQuery 的each 由 jQuery 第三方库提供
       * jQuery 2 一下版本不支持
       * 它的 each 方法主要用来遍历jQuery对象
       * jQuery 的实例对象不能使用forEach方法，因为jQuery中的数组是伪数组
       * 要使用需要:`[].slice.call(wArray).forEach(function (){....})`
       ```javascript
       slice 函数的内置原理：
       Array.prototype.mySlice = function (){
	       	var start = 0
	       var end = arguments.length
	       var tem = []
	       if (end === 1 ){
	       	tem [0] = arguments[0]
	       } else if (end === 2) {
	       	tem[0] = arguments[0],
	       	tem[1] = arguments[1]
	       } else {
	       	  for (var i=0;i<end;i++){
	       	  	 tem.push(this[i])
	       	  }
	       }
	       return tmp
       }
       ```
### exports 和 module.exports 的区别
   + 在Node中 每一个模块都有一个module 对象
   + module 对象中有一个对象 exports
   + 所有的导出成员都挂载到module.exports上面
   + 例如：`module.exports.xxx = xxx`但是一直这样写太麻烦了
   + 所以node为我们方便书写，提供了一个成员叫做`exports`
   + `exports` 其实相当于是`module.exports` 的一次引用
   + 注意不要使用 `exports = xxx` 这样是不管用的，因为会断开与 module.exports的关系
   + 但是有一种赋值就没有 `exports = module.exports` 这样就重新建立了链接关系

### 第三方模块引入调用顺序
   + 一个项目有且仅有一个node_modules 而且是存放在项目的根目录
   - node_modules/art-template/
   - node_modules/art-template/pakeage.json
   - node_modules/art-template/pakeage.json/main
   - main里没有写:   index.js 备选项
   - 再没有进入上一级查找，知道磁盘根目录还是找不到，就报错

## npm
包管理工具
 `npm install xxx --save 会保存依赖项 `
 - npm网站 www.npmjs.com
 - npm命令行工具
 ```npm
	 npm -version // 查询版本号
	 npm install --global npm // 自己升级自己
	 npm init -y 可以快速生成，跳过想到
	 npm install 包名  -- 只下载
	 npm install --save 报名 --- 下载并保存依赖项(pakeage.json 文件中的dependencise)
	 npm uninstall 报名  -----只删除，但是依赖项还是在的 简写(npm un)
	 npm uninstall --save 报名 ----删除整个包，包括依赖项 (npm un -S 包名)
	 npm help  -----查看帮助
	 npm 命令 --help  -------查看固定命令的详细帮助
	 npm install   -------可以下载所有依赖包
<<<<<<< HEAD
=======
   例如：react-router已经更新到4.x版本，想要下载2.x版本，可以通过下面命令
   npm install --save xx@2.8.1
>>>>>>> node.js
 ```
 ### 解决npm 被墙问题
 npm 存储包文件的服务器在国外，速度很慢
 - https://npm.taobao.org/ 淘宝镜像
 - 解决方案
 ```javascript
    # 在任意位置都可以
    # --global不能省略
    # -- 表示安装到全局
    npm install -- global cnpm
 ```
 接下来安装包时都吧nmp替换成cnpm
 举个例子
 ```shell
	#国外
	npm install jQuery
	#淘宝镜像
	cnpm install jQuery
 ```
- 不项安装cnpm，但是使用淘宝镜像元
```shell
    npm config set registry https://registry.npm.taobao.org
    # 产看 npm 配置信息
    npm config list
```

## pakeage.json
我们建议每一个项目都要有一个package.json文件，(包括项目描述)
目前最有效的就是dependencies 用来保存依赖包
  `npm init ------这个文件可以使用这个初始化`
  ```shell
  PS D:\PHPTutorial\WWW\node.js\day-03\npm-dome> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (npm-dome)
version: (1.0.0) 0.0.1
description: 这是一个测试项目npm-dome
entry point: (index.js) main.js
test command:
git repository:
keywords:
author: lww
license: (ISC)
About to write to D:\PHPTutorial\WWW\node.js\day-03\npm-dome\package.json:

{
  "name": "npm-dome",
  "version": "0.0.1",
  "description": "这是一个测试项目npm-dome",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "lww",
  "license": "ISC"
}


Is this OK? (yes) yes
```

## Express
原声的http 在某些方面不足以应对我们的开发效率，所哟我们就使用框架
+ Express学习
  - expressjs.com 这是官网