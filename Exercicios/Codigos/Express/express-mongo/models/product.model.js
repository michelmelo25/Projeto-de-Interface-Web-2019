var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema(
    {
        name: {type:String, required:true, max:100},
        price: {type:Number, required:true, max:100},
        qty: {type:String, required:true, max:100}
    }
);

var ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;