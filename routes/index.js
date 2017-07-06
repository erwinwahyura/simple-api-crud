var express = require('express')

var router = express.Router()

router.get('/', function (req, res) {
  res.send('Hi Erwin')
})

module.exports = router
