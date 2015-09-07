var express = require('express')
var router = express.Router()

router.use(express.static(__dirname + '/../assets'))
router.use(express.static(__dirname + '/../templates'))

sendApp = function(req, res) {
  res.sendFile('layouts/app.html', { root: __dirname + '/..' })
}

router.get('/', sendApp)
router.get('/register', sendApp)
router.get('/login', sendApp)

module.exports = router
