var productServise = require('../services/product.service.mongo');
var express = require('express');
var router = express.Router();

router.get('/list', function(req,res){
    productServise.list(req,res);
});

router.post('/register', function(req,res){
    productServise.register(req,res);
});

router.put('/update/:_id', function(req,res){
    productServise.update(req,res);
});

router.get('/retrieve/:_id', function(req,res){
    productServise.retrieve(req,res);
});

router.delete('/delete/:_id', function(req,res){
    productServise.delete(req,res);
});

module.exports = router;