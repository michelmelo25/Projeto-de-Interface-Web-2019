const UserModel = require('../models/user.models');

class UserService{
    static register(req,res){
        UserModel.find({'login':req.params.login}).then(
            (user) => {
                res.status(500).json('Usuario existente');
            }
        ).catch(
            (error) => {
                UserModel.create(req.body).then(
                    (user)=>{
                        res.status(201).json(user);
                    }
                ).catch(
                    (error)=>{
                        res.status(500).json(error);
                    }
                );
            }
        );

        
    }

    static list(req,res){
        UserModel.find().then(
            (users)=>{
                res.status(201).json(users);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );    
    }

    static update(req,res){
        UserModel.findByIdAndUpdate(req.params.id, req.body, {'new':true}).then(
            (user)=>{
                res.status(201).json(user);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static delete(req,res){
        UserModel.findByIdAndRemove(req.params.id).then(
            (user)=>{
                res.status(201).json(user);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static retrieve(req,res){
        UserModel.findById(req.params.id).then(
            (user)=>{
                res.status(201).json(user);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static retrieveByLogin(req,res){
        UserModel.find({'login':req.params.login}).then(
            (user)=>{
                res.status(201).json(user);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

    static retiveFriends(req,res){
        UserModel.find({'login':req.params.login}).then(
            (user)=>{
                UserModel.find({'login':{'$in':user.amigos}}).then(
                    (users) => {
                        res.status(201).json(users);
                    }
                ).catch(
                    (error) => {
                        res.status(500).json(error);
                    }
                )
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        );
    }

}
module.exports = UserService;