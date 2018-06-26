# DAY-04 学习笔记
## 学习任务
   + Express框架的使用和熟悉
   + 解决代码书写完成后的服务器重启问题
   + app留言本的重写
   + 文件操作路径和模块操作路径


## 文件操作路径和模块操作路径

  - 文件操作路径

  ```shell
    ./data/a.txt 相对于当前目录
    data/a.txt  相对与磁盘根目录
    /data/a.txt  绝对路径，当前文件所在的磁盘根目录
    c:/xxx/xxx.. 绝对路径
  ```

  - 模块操作路径
  ```txt
    require('./data/a.txt') 相对与当前目录下的
    require('/data/a.txt)   相对于磁盘根目录  http://127.0.0.1:3000/data/a.txt
  ```

## Express框架的使用和熟悉
```javascript
   // 模块下载
   npm install express --save
   // 模块导入
   var express = require('express')
   // 创建服务
   var app = express()
   // 服务监听
   app.listen('端口号',function(){.....})
   // 响应请求处理
   app.get('请求url地址解析',function(req,res){})
   // 发送响应消息
   res.send(.....)   //相当于 res.write(..)  res.end()
```
### 1. 基本路由
  - router.js
     + 路由其实就是一张表
     + 表里有一定的映射关系
     + 只有映射了才能使用
```javascript
  app.get('/',function(req,res){...})  //一个分配/
  app.get('/about',function(req,res){...}) // 另一个分配 /about
```
### 2. use的url路径标示
```javascript
   app.use('/public',express.static('public')) //---public/index.html
   app.use('/a',express.static('public'))  // ----/a/index.html
   app.use(express.static('public'))  // ----直接访问public里面的资源
```

## app留言本的重写

### 在Express 中配置art-template
  + 注意的内容
      - 首先我们不需要引art-template这个包
      - 但是我们都得下载，因为express-art-template依赖了它
      - 使用时 在engine中设置了什么结尾的类型，我们使用的文档，就应该是什么类型
      - express 为我们提供了一个方法，reader('文件名',{对象数据}),这里的文件名默认是 views 下的文件，所以直接写文件名就好
      - 这里的views是一定的，但是路径可以自己定，这样render就会在我们制定的路径里寻找 `app.set('views','路径')`

<<<<<<< HEAD
=======
  + express中如何获取post请求体数据
    - 在Express 中没有内置获取表单POST 请求体的API，我们需要使用第三方包`body-parser`
    ```javascript
    1. 安装方式
    npm install --save body-parser

    2. 配置
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended:false}))
    // parse application/json
    app.use(bodyParser.json())
    ```
>>>>>>> node.js
  - install
    ```javascript
    npm install --save art-template
    npm install --save express-art-template
    ```

  - Expample
    ```javascript
    var express = require('express');
    var app = express();
    // 这里就是express 中的art-template配置关键语句
    app.engine('art', require('express-art-template'));
    app.get('/', function (req, res) {
        res.render('index.art', {
            user: {
                name: 'aui',
                tags: ['art', 'template', 'nodejs']
            }
        });
    });
    ```

- code

  ```javascript
  var express = require('express')
  var url = require('url')
  
  var app = express()
  
  var comments = [{
  		name : '小木那个',
  		message : '遗产小和尚',
  		dateTime : '2018/5/12'
  	}]
  
  var comment = []
  // express中的模板引擎配置
  app.engine('html',require('express-art-template'))
  
  app.use('/public/',express.static('./public'))
  app.use('/node_modules/bootstrap/',express.static('./node_modules/bootstrap/'))
  
  app.get('/',function (req,res){
  	res.render('index.html',{
  		comments : comments
  	})
  })
  
  app.get('/post',function (req,res){
  	res.render('post.html')
  })
  
  app.get('/pinglun',function (req,res){
      comment = url.parse(req.url,true).query
      comment.dateTime = '2018/5/14'
      comments.unshift(comment)
  
      res.statusCode = 302
      res.setHeader('Location','/')
      res.send()
  })
  
  app.listen('3000',function() {
  	console.log('server is run');
  })
  
  ```

<<<<<<< HEAD
  

=======
>>>>>>> node.js
## 解决代码书写完成后的服务器重启问题

我们这里使用了一个第三方命名工具：`nodemon` 来帮我们解决频繁修改代码重启服务器的事情
### 使用方法
```shell
# 安装方法
npm install --global nodemon
# 使用方法
nodemon app.js

```
<<<<<<< HEAD
=======

## 学生管理案例
  + 需要的模块
  `express`,`art-template`,`express-art-template`
  + 下载网页模板
  + 从文件中读取数据


>>>>>>> node.js
