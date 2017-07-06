var express = require('express')
var router = express.Router()
var c_food = require('../controllers/c_food.js')

router.get('/', function (req, res) {
  res.send('Hi Erwin')
})

router.get('/api/foods', c_food.getAll)
router.post('/api/foods', c_food.add)
router.get('/api/foods/:_id', c_food.getById)
router.put('/api/foods/:_id', c_food.edit)
router.delete('/api/foods/:_id', c_food.remove)

module.exports = router
