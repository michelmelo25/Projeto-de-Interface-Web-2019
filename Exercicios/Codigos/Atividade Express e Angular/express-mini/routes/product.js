var express = require('express');
var router = express.Router();
var ProductServise = require('../services/product.service');

router.post('/register', function(req,res){
    const product = ProductServise.register(req.body);
    res.json(product);
});

router.get('/list', function(req,res){
    res.json(ProductServise.list());
});

router.put('/update/:id',function(req,res){
    const product = ProductServise.update(req.params.id,req.body);
    res.json(product);
});

router.delete('/delete/:id',function(req,res){
    const ok = ProductServise.delete(req.params.id);
    if(ok) res.json({"sucess":true});
    else res.json({"sucess":false});
});

router.get('/retrive/:id',function(req,res){
    const product = ProductServise.retrieve(req.params.id);
    res.json(product);
});

module.exports = router;