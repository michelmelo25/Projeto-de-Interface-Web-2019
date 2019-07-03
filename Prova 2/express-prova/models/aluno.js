var mongoose = require('mongoose');

var AlunoSchema = mongoose.Schema(
    {
        nome: {type:String, required:true, max:100},
        ap1: {type:Number, required:true, max:10},
        ap2: {type:Number, required:true, max:10},
    }
);

var AlunoModel = mongoose.model('alunos', AlunoSchema);

module.exports = AlunoModel;