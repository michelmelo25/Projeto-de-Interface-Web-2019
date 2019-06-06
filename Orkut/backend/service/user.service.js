const UserModel = require('../models/user.models');
const admin = require('firebase-admin');
// const functions = require('firebase-functions');

// admin.initializeApp(functions.config().firebase);
admin.initializeApp({
    credential: admin.credential.applicationDefault()
  });

var db = admin.firestore();

id = 0;

class UserService{
    static register(data) {
        let user = new UserModel(id, data.firstName, data.lastName, data.login,
            data.email, data.zipcode, data.password,data.avatar, data.amigos);
        // var usuarios = db.collection('users');
        // usuarios.
        var usuario = db.collection('users').doc('usuarios').set(user);
        id++;
        return usuario;
    }
}
module.exports = UserService;