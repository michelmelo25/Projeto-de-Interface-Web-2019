var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require('./db/mongo.connection');

var users = require('./routes/user.routes.mongo');
var addresses = require('./routes/address.routes.mongo');
var products = require('./routes/product.routes.mongo');
var carts = require('./routes/cart.routes.mongo');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use('/users', users);
app.use('/addresses', addresses);
app.use('/products', products);
app.use('/carts', carts);

module.exports = app;
