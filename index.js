const express = require('express');
const mongoose = require('mongoose');
const port = 3000;
const dotenv = require('dotenv');
const app = express();

app.use(express.json())

dotenv.config();

const uri = process.env.MONGODB_URI;

mongoose.connect(uri)
   .then(() => {
       console.log(`Conectando ao mongo Atlas`);
   })
   .catch((err) =>{
       console.error(`Erro ao conectar ${err}`);
   });


app.get('/', (req,res) =>{
    res.json({message: "Hello World"});
});

app.listen(port, () => {
    console.log(`Servidos rodando na porta ${port}`);
})

