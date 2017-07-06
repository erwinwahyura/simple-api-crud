var express = require('express')
var router = express.Router()
var c_food = require('../controllers/c_food.js')
var c_restaurant = require('../controllers/c_restaurant.js')

router.get('/', function (req, res) {
  res.send('Hi Erwin')
})

router.get('/api/foods', c_food.getAll)
router.post('/api/foods', c_food.add)
router.get('/api/foods/:_id', c_food.getById)
router.put('/api/foods/:_id', c_food.edit)
router.delete('/api/foods/:_id', c_food.remove)

router.get('/api/restaurants', c_restaurant.getAll)
router.post('/api/restaurants', c_restaurant.add)
router.get('/api/restaurants/:_id', c_restaurant.getById)
router.put('/api/restaurants/:_id', c_restaurant.edit)
router.delete('/api/restaurants/:_id', c_restaurant.remove)

module.exports = router
