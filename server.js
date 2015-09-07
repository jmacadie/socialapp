var express = require('express')
var app = express()

app.use('/', require('./controllers/static'))
app.use('/api/posts', require('./controllers/api/posts'))

app.listen(5000, function() {
  console.log('Server listenting on', 5000)
})
