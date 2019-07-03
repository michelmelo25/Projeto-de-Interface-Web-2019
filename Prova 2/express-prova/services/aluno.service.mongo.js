const alunoModel = require("../models/aluno");

class AlunoServise{

    static list(req,res){
        alunoModel.find().then(
            (alunos) => {
                res.status(201).json(alunos);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        )

    }

    static regiter(req,res){
        alunoModel.create(req.body).then(
            (aluno)=>{
                res.status(201).json(aluno);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        )
    }

    static update(req,res){
        alunoModel.findByIdAndUpdate(req.params.id, req.body, {'new':true}).then(
            (aluno) => {
                res.status(201).json(aluno);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        )
    }

    static retrive(req,res){
        alunoModel.findById(req.params.id).then(
            (aluno) => {
                res.status(201).json(aluno);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        )
    }

    static delete(req,res){
        alunoModel.findByIdAndRemove(req.params.id).then(
            (aluno) => {
                res.status(201).json(aluno);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
            }
        )
    }
}
module.exports = AlunoServise;