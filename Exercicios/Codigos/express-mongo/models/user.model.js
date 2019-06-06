var mongoose = require('mongoose');

var UserSchema = mongoose.Schema(
    {
        firstName: {type:String,require:true,max:100},
        lastName: {type:String,require:true,max:100},
        login: {type:String,require:true,max:100},
        email: {type:String,require:true,max:100},
        zipcode: {type:String,require:true,max:10},
        password: {type:String,require:true,max:20}   
    }
);

var UserModel = mongoose.model('users',UserSchema);

module.exports = UserModel;