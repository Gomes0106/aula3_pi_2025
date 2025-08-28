const express = require('express');
const Aluno = require('../models/Aluno');

const router = express.Router();

//Post 
router.post('/', async (req, res, next) => {
    try {
        const aluno = await Aluno.create(req.body);
        return res.status(201).json(aluno);
    }catch (error) {
        next(error);
    }
});



router.get('/', async (req, res, next) => {
    try {
        const { nome } = req.query;
        const filtro = {};
        if (nome) {
            filtro.nome = new RegExp(nome, "i");
        }
        const alunos = await Aluno.find(filtro).sort({ createdAt: -1 });
        return res.json(alunos);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async (req,res ,next) =>{
    try {
        const aluno = await Aluno.findById(req.params.id);
        if(!aluno){
            return res.status(404).json({erro: "Registro não encontrado."});
        }
        return res.json(aluno);
    } catch (error) {
        next(error);
    }
});

//update



//delete


module.exports = router;