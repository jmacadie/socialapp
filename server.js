var express = require('express')
var bodyParser= require('body-parser')
var Post = require('./models/post')

var app = express()
app.use(bodyParser.json())

app.use('/', require('./controllers/static'))
app.use('/api/posts', require('./controllers/api/posts'))

app.listen(5000, function() {
  console.log('Server listenting on', 5000)
})
