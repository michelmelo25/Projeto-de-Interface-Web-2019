const ProductModel = require('../models/product.model');




class ProductService{

    static register(req,res){
        ProductModel.create(req.body).then(
            (product)=>{
                res.status(201).json(product);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static list(req,res){
        ProductModel.find().then(
            (products)=>{
                res.status(201).json(products);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );    
    }

    static update(req,res){
        ProductModel.findByIdAndUpdate(req.params._id, req.body, {'new':true}).then(
            (product)=>{
                res.status(201).json(product);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static delete(req,res){
        ProductModel.findByIdAndRemove(req.params._id).then(
            (product)=>{
                res.status(201).json(product);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static retrieve(req,res){
        ProductModel.findById(req.params._id).then(
            (product)=>{
                res.status(201).json(product);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }
}

module.exports = ProductService