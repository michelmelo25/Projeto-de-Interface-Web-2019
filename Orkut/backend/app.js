var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var firebase = require("firebase");

var users = require('./routes/users');

var app = express();

const firebaseConfig = {
    apiKey: "AIzaSyCZML8IbuCd2Sgdyf_tt6KfoEHDX6inYVI",
    authDomain: "fir-22d5d.firebaseapp.com",
    databaseURL: "https://fir-22d5d.firebaseio.com",
    projectId: "fir-22d5d",
    storageBucket: "fir-22d5d.appspot.com",
    messagingSenderId: "434104911832",
    appId: "1:434104911832:web:61c79a71b29532a1"
  };
firebase.initializeApp(firebaseConfig);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Oringin","");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods","GET,POST,OPTIONS,PUT,DELETE");
  next();
});


app.use('/users', users);

module.exports = app;
