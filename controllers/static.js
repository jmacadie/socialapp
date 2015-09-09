var express = require('express')
var router = express.Router()

router.use(express.static(rootPath('assets')))
router.use(express.static(rootPath('templates')))

sendApp = function(req, res) {
  res.sendFile('layouts/app.html', { root: rootPath('') })
}

router.get('/', sendApp)
router.get('/test', sendApp)
router.get('/register', sendApp)
router.get('/login', sendApp)

module.exports = router
