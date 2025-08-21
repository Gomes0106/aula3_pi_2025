const express = require('express');
const mongoose = require('mongoose');
const port = 3000;
const dotenv = require('dotenv');
const app = express();
const conectaDB = require('./db');

app.use(express.json())

dotenv.config();

conectaDB();

app.get('/', (req,res) =>{
    res.json({message: "Hello World"});
});

app.listen(port, () => {
    console.log(`Servidos rodando na porta ${port}`);
})

//aaaaa