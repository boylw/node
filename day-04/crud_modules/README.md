# Express - curd

## 起步

- 初始化
- 模板处理

#### 1. 路由表

| 请求方法 |     请求路径      | get 参数 | post 参数 |            作用            |     备注     |
| :------: | :---------------: | :------: | :-------: | :------------------------: | :----------: |
|   GET    |     /studens      |          |           |      渲染学生管理页面      |   主页渲染   |
|   GET    |   /students/new   |          |           |        渲染添加学生        |   添加学生   |
|   POST   |     /studens      |          |           |  gender,age,name,hobbies   | 处理添加学生 |
|   GET    |   /studens/edit   |    id    |           |        渲染编辑页面        |   编辑页面   |
|   POST   |  /students/edit   |          |           | id,gender,age,name,hobbies |   处理编辑   |
|   GET    | /studentss/delete |    id    |           |          删除学生          |   删除处理   |

### 2. 文件读取
创建db.json，写入数据
- 载入fs核心模块
- readFile(err,data){。。。}
- 对数据读取，data是字符串的，转为对象JSON.parse()，然后再`.`数组

- express的路由模块
```javascrpit
var router = express.Router()
// 讲请求挂载到router对象上
module.exports = router 
```
- app.js上挂载路由模块到服务器
```javascrpit
app.use(roture)
```

