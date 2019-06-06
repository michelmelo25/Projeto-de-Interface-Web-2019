var express = require('express');
var router = express.Router();
var userService = require('../services/user.service');

router.get('/list', function(req,res,next){
    userService.list(req,res);
});

router.post('/register', function(req,res,next){
    userService.register(req,res);
});

router.put('/update/:id', function(req,res,nex){
    userService.update(req,res);
});

router.delete('/delete/:id', function(req,res,nex){
    userService.delete(req,res);
});

router.get('/retrive/:id', function(req,res,next){
    userService.retrieve(req,res);
});

router.get('/retrive/login/:login', function(req,res,next){
    userService.retrieveByLogin(req,res);
});

module.exports = router;