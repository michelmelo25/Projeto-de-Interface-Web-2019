const ProductModel = require('../models/product.model');

let products = [];
let id = 0;

class ProductService{

    static register(data){
        let product = new ProductModel(id++, data.name, data.price, data.qty);
        products.push(product);
        return product;
    }

    static list(){
        return products;
    }

    static update(id,data){
        for (let p of products){
            if(p.id == id){
                p.name = data.name;
                p.price = data.price;
                p.qty = data.qty;
                return p;
            }
        }
        return null;
    }

    static delete(id){
        for (let i = 0; i < products.length; i++){
            if(products[i].id == id){
                products.splice(i,1);
                return true;
            }
        }
        return false;
    }

    static retrieve(id){
        for(let p of products){
            if(p.id == id){
                return p;
            }
        }
        return {};
    }
}
module.exports = ProductService;