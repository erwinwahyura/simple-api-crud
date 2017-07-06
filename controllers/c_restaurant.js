const m_restaurant = require('../model/restaurants.js')

var getAll = function (req, res) {
  m_restaurant.find({}, function(err,result) {
    err ? res.status(400).send(err) : res.status(200).send(result)
  })
}

var add = function (req, res) {
  var restaurant = new m_restaurant({
    name: req.body.name,
    owner: req.body.owner,
    address: req.body.address
  })
  restaurant.save(function(err, result) {
    err ? res.status(400).send(err) : res.status(200).send(result)
  })
}

var getById = function(req, res) {
  m_restaurant.findOne({_id:req.params._id}, function(err, result) {
    err ? res.status(400).send(err) : res.status(200).send(result)
  })
}

var edit = function(req, res) {
  m_restaurant.findOne({_id:req.params._id}, function(err, resultFind) {
    if (err) {
      res.status(400).send(err)
    } else {
      console.log('resultFind: ',resultFind);
      m_restaurant.findOneAndUpdate({_id:req.params._id}, {$set : {name: req.body.name || resultFind.name, owner: req.body.owner || resultFind.owner, address: req.body.address || resultFind.address }}, function(err, result) {
        err ? res.status(400).send(err) : res.status(200).send(result)
      })
    }
  })
}

var remove = function(req, res) {
  m_restaurant.deleteOne({_id:req.params._id}, function(err, result) {
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
