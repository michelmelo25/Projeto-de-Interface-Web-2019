class User{
    constructor(id,nome,sobrenome,login,email,senha,avatar, amigos){
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.login = login;
        this.email = email;
        this.senha = senha;
        this.avatar = avatar;
        this.amigos = amigos;
    }
}
module.exports = User;