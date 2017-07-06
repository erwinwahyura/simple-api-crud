var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodSchema = new Schema({
  name:  String,
  price: Number
});
var food = mongoose.model('Food', foodSchema);

module.exports = food
