const express = require('express');
const mongoose = require('mongoose');
const port = 3000;
const dotenv = require('dotenv');
const app = express();
const conectaDB = require('./db');
const alunosRouter = require('./routes/alunos.routes');


app.use(express.json())

dotenv.config();

conectaDB();

app.get('/', (req,res) =>{
    res.json({message: "Hello World"});
});

app.use('/alunos', alunosRouter)

app.use((err, req, res, next) =>{
    console.error('Erro: ${err}');
    if (err.name === "CastError"){
        res.status(400).json({ erro: "ID inválido" });
    }


    if (err.name === "ValidationError"){
        return res.status(400).json({ erro: "Validação falhou", detalhes: err.errors});
    }

    res.status(500).json({ erro: "Erro interno do servidor" });
});

app.listen(port, () => {
    console.log(`Servidos rodando na porta ${port}`);
})

//aaaaasddsds