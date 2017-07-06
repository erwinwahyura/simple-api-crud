var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var cors = require('cors')

mongoose.connect('mongodb://localhost/simple-crud-erwin');
var app = express()
app.use(cors())

var index = require('./routes/index')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('koneksi sukses');
});

app.use('/', index)
// app.get('/', function (req, res) {
//   res.send('Hello Erwin')
// })

app.listen(3000)
