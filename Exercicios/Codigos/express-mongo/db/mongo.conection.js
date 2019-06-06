var mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

var mongoDB_URI = 'mongodb://127.0.0.1:27017/piw';

mongoose.connect(mongoDB_URI,{useNewUrlParser:true});

var db = mongoose.connection;

db.on('connected',()=>{
    console.log('Mongo connected');
});

db.on('disconnected',()=>{
    console.log('Mongo discconected');
});

db.on('error',(erro)=>{
    console.log('Mongoose! Erro: ' + erro);
});