var mongoose = require('mongoose');

var UserSchema = mongoose.Schema(
    {
        nome: {type:String, required:true, max:100},
        sobrenome: {type:String, required:true, max:100},
        login: {type:String, required:true, max:100},
        email: {type:String, required:true, max:100},
        avatar: {type:String, required:true, max:10},
        senha: {type:String, required:true, max:20},
        amigos: {type:Array, required:false},
        solicitacoes: {type:Array, required:false}
    }
);

var UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;