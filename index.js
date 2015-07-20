

var express     = require('express');
var fs          = require('fs');

var env             = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config          = require('./config/config');
var db              = require('./config/sequelize');
var passport        = require('./config/passport');

var app = express();

//Initialize Express
require('./config/express')(app, passport);

//Initialize Routes
require('./config/routes').init(app, passport, auth);

//Start the app by listening on <port>
var port = process.env.PORT || config.port;
app.listen(port);
console.log('Express app started on port ' + port);

//expose app
exports = module.exports = app;
