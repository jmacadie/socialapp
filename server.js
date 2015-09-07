var app = require('express')()
var rp = require('./lib/root-path')

app.use(require('body-parser').json())
app.use(require('./lib/auth'))

app.use('/', require('./controllers/static'))
app.use('/api/posts', require('./controllers/api/posts'))
app.use('/api/sessions', require('./controllers/api/sessions'))
app.use('/api/users', require('./controllers/api/users'))

app.listen(5000, function() {
  console.log('Server listenting on', 5000)
})
