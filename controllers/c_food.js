const m_food = require('../model/foods.js')

var getAll = function (req, res) {
  m_food.find({}, function(err,result) {
    err ? res.status(400).send(err) : res.status(200).send(result)
  })
}

var add = function (req, res) {
  var food = new m_food({
    name: req.body.name,
    price: req.body.price
  })
  food.save(function(err, result) {
    err ? res.status(400).send(err) : res.status(200).send(result)
  })
}

var getById = function(req, res) {
  m_food.findOne({_id:req.params._id}, function(err, result) {
    err ? res.status(400).send(err) : res.status(200).send(result)
  })
}

var edit = function(req, res) {
  m_food.findOne({_id:req.params._id}, function(err, resultFind) {
    if (err) {
      res.status(400).send(err)
    } else {
      console.log('resultFind: ',resultFind);
      m_food.findOneAndUpdate({_id:req.params._id}, {$set : {name: req.body.name || resultFind.name, price: req.body.price || resultFind.price }}, function(err, result) {
        err ? res.status(400).send(err) : res.status(200).send(result)
      })
    }
  })
}

var remove = function(req, res) {
  m_food.deleteOne({_id:req.params._id}, function(err, result) {
    err ? res.status(400).send(err) : res.status(200).send(result)
  })
}

module.exports = {
  getAll,
  add,
  getById,
  edit,
  remove

}
