class Post{
    constructor(texto,altor,dataPostagem,dataEdit,likes){
        this.texto = texto;
        this.altor = altor;
        this.dataPostagem = dataPostagem;
        this.dataEdit = dataEdit;
        this.likes = likes;
    }
}
module.exports = Post;