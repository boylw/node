var express      = require('express');
var cookieParser = require('cookie-parser');
 
var app = express();
app.use(cookieParser());
app.get('/', function(req, res) {

 req.cookies.foo = 'foo'
 res.send(req.cookies)
  console.log('Cookies: ', req.cookies)
})

app.listen(80);