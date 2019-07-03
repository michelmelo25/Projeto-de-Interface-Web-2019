var express = require('express');
var router = express.Router();
var AlunoService = require('../services/aluno.service.mongo');

router.get('/listar', function(req,res,next) {
    AlunoService.list(req,res);
});

router.post('/registrar', function(req,res,next) {
    AlunoService.regiter(req,res);
});

router.put('/editar/:id', function(req,res,next) {
    AlunoService.update(req,res);
});

router.get('/recuperar/:id', function(req,res,next) {
    AlunoService.retrive(req,res);
});

router.delete('/apagar/:id', function(req,res,next) {
    AlunoService.delete(req,res);
})
  
module.exports = router;