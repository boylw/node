# mongoDB -- 非关系型数据库
## Navicat Premium
### 关系型数据库的可视化软件


## 下载地址
`www.mongoDB.com`

### 环境变量配置
  - path 环境下：`C:\Program Files\MongoDB\Server\3.6\bin` 
  - 版本检查 `mongod --version`
  - 服务启动 `services.msc`

### 启动和关闭数据库服务
  - 启动
    它会自动去找安装盘符c盘找一个叫/data/db的目录
  ```javascript
  mongod敲回车

  # 修改目录
  mongod --dbpath=数据存储目录路径
  ```
  - 停止
    `ctrl + c` 或者直接关闭

### 链接数据库
  - 这里输入`mongo`就会默认链接本地数据库
  - 在连接状态退出`exit`

### 基本命令
- `show dbs`
  + 查看显示所有数据库
-db
  + 查看当前操作的数据库
-`use 数据库名字`
  + 切换到指定的数据，如果没有就会再插入数据后新建
- `db.students.insertOne`
  + students为集合(数组)
  + insertOne 插入一个对象
- `show collections`
  + 查看当前数据库里的集合
- `db.study.find()`
  + 查找指定集合中的元素

## 在node中如何操作Mongodb数据
### 使用官方Mondodb包进行操作
   + 使用网址:https://www.npmjs.com/package/mongodb
### 使用第三方mongoose来操作，对官方进行了进一步封装
   + www.mongoosejs.com
   ```javascript
  const mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/test');

	const Cat = mongoose.model('Cat', { name: String });

	const kitty = new Cat({ name: 'Zildjian' });
	kitty.save().then(() => console.log('meow'));
   ```
## MongoDb数据库的基本概念
  + 可以有多个数据库
  + 一个数据库中可以有多个集合(表)
  + 一个集合可以有多个文档(表记录)
  + 文档结构很灵活，没有任何限制
  + MongoDb很灵活，不需要Mysql先建数据库，在建表
    - 这里只需要制定往那个表里插如数据就可以了
    - 一切都是有Mongodb动态建立的
  ```json
  {
  	qq : {
  		user:[
	  		{name:'张三',age:15},
	  		{name:'张三',age:15},
	  		{name:'张三',age:15},
	  		{name:'张三',age:15},
	  		....
  		],
  		products:[
  		],
  		.....
  	}
  }
  ```
### MongoDb数据库的基本类型
  + 数据类型
  1. `String`
  2. `Date`
  3. `Number`
  4. `Boolean`
  5. `Buffer`
  6. `Mixed`
  7. `ObjectId`
  8. `Array`
  9. `Decimal128`
  10. `Map`

  +约束
  1. `enum:[0,1]`枚举

  + 表的设计

  ```javascript
      var mogoose = require('mongoose')
  	//1. 连接数据库 
  	var Schema = mongoose.connect('mongodn://http:localhost/test')
  	//2. 建表 
  	var userSchema = new Schema({
  	username : {
  		type : String,
  		required : true //约束 , 必须有
  	},
  	password : {
  		type : String,
  		required : true
  	}
  })
      // mongoose.model 方法就是用来将一个架构发布为model 
          // 第一个参数 ： 传入一个大写名词单数字符串 
          // mongoose会自动转为小写复数  example：user -> users 
          // 第二个参数就是架构Schema
      //3. 返回值是模型构造函数
      var User = mogoose.model('User',userSchema)
      // 4. 有了这个构造函数模型，我们需要实例化
      var admin = new User({
           // 数据
           username : 'zh',
           password : 123456
        })
  ```

+ 存储数据

  ```javascript
  admin.save({
      username : 'admin',
      password : '12346'
  },function(err,ret){
      if (err) {
          console.log('存储失败')
      } else {
          console.log('存储成功')
          console.log(ret)
      }
  })
  ```

  

+ 查询数据
```javascript
  // 查询所有
  User.find({
    username : 'admin'
  },function(err,ret) {
      if (err) {
          console.log('查询失败')
      } else {
          console.log('查询成功')
          console.log(ret)
      }
  })
  // 查询一个
  User.findOne({
    username : 'admin'
  },function(err,ret) {
      if (err) {
          console.log('查询失败')
      } else {
          console.log('查询成功')
          console.log(ret)
      }
  })
```
+ 删除数据
```javascript
  User.remove({
    id : '5b2262514d66db2624ae11f2'
    },function(err,ret){
       if (err) {
          console.log('删除失败')
      } else {
          console.log('删除成功')
          console.log(ret)
      }
  })
```
+ 更新数据
```javascript
// 根据id更新数据
User.findByIdAndUpdate('5b2262918b73682830309d1e',{
  password : 123
},function(err,ret) {
  if (err) {
        console.log('更新失败')
    } else {
        console.log('更新成功')
        console.log(ret)
    }
})
// 自定义选择条件更新数据
User.update({username:'admin'},{password : 123456789},function(err){
  if (err) {
    console.log('更新失败');
  }
})
```

## Promise
   + 简介
     - Promise是Ecmascript 6 中的一个API
     - Promise是一个存放`异步任务`的容器
   + 它里面有三种状态
     - pending 正在进行的任务，随后转为下面两种状态
     - resolved 成功
     - rejected 失败
   + 回调地狱
   ```javascript

var fs = require('fs')

fs.readFile('./test/a.txt','utf-8',function(err,data){
  if (err) {
    console.log('读取失败'+err)
  } else {
    fs.readFile('./test/b.txt','utf-8',function(err,data){
      if (err) {
        console.log('读取失败'+err)
      } else {
        fs.readFile('./test/c.txt','utf-8',function(err,data){
            if (err) {
              console.log('读取失败'+err)
            }
            console.log(data)
          })
        console.log(data)
      }
      
    })
    console.log(data)
  } 
})
   ```
   + promise 基本代码
   ```javascript
   /**
 * promise 是一个构造函数
 * 我们在使用是要先new一个Promise容器
 * 在容器内部写入异步操作
 *
 * promise 承诺是同步的
 * 承诺里的任务是异步的
 */

var fs = require('fs')

// console.log(1)
var p1 = new Promise(function(resolve,reject){
  // console.log(2)
  fs.readFile('./test/a.txt','utf-8',function(err,data){
    // console.log(3)
    if (err) {
      // 承诺中的容器失败了
      // console.log(err)
      reject(err)
    } else {
      // console.log(data)
      resolve(data)
    }
  })
  // console.log(4)
})

var p2 = new Promise(function(resolve,reject){
  // console.log(2)
  fs.readFile('./test/b.txt','utf-8',function(err,data){
    // console.log(3)
    if (err) {
      // 承诺中的容器失败了
      // console.log(err)
      reject(err)
    } else {
      // console.log(data)
      resolve(data)
    }
  })
  // console.log(4)
})

var p3 = new Promise(function(resolve,reject){
  // console.log(2)
  fs.readFile('./test/c.txt','utf-8',function(err,data){
    // console.log(3)
    if (err) {
      // 承诺中的容器失败了
      // console.log(err)
      reject(err)
    } else {
      // console.log(data)
      resolve(data)
    }
  })
  // console.log(4)
})

/**
 *  p1 就是那个承诺
 *  当p1成功后做指定的操作
 *  then 方法接受的function就是容器中的resolve()和reject()
 *  return 的东西在下面then的时候funtion(data)中的
 *  data 就是 return对象的第一个参数函数
 */

p1.then(function (data) {
   console.log(data)
   // 当p1 读取成功的时候
   return p2
},function (err) {
   console.log('读取失败了'+err)
})
  .then(function (data) {
    console.log(data)
    return p3
  })
  .then(function (data) {
    console.log(data)
    console.log('end')
  })

   ```
   + promise的函数封装
   ```javascript
   /**
 * promise的封装
 * 用于异步编程
 * 防止回调地狱
 */

var fs = require('fs')


function pReadFile(filePath){
  return new Promise(function(resolve,reject) { 

    fs.readFile(filePath,'utf-8',function (err,data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })

  })
}

pReadFile('./test/a.txt')
  .then(function (data) {
    console.log(data)
    return pReadFile('./test/b.txt')
  })
  .then(function (data) {
    console.log(data)
    return pReadFile('./test/c.txt')
  })
  .then(function (data) {
    console.log(data)
  })
   ```

  ## 其他
  + json-server
    - 按装
    `npm install json-server --global`
    - 开启服务
    `json-server --watch xxx.json`
  + http-server
    - 安装
    `npm install http-server --global`
    - 开启http请求服务
    `hs -c-l -o`