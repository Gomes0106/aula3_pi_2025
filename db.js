const mongoose = require('mongoose');

async function conectaDB(){
    const uri = process.env.MONGODB_URI;
    if(!uri){
        console.error(`MONGOBR_URI não configurada ou encontrada`);
        process.exit(1);
    }

    mongoose.set("strictQuery", true);

    try {
        await mongoose.connect(uri);
        console.log(`Conectando ao MONGOdb Atlas`);
    } catch (error) {
        console.error(`Erro ao conectar ao MongoDb Atlas ${error}`);
        process.exit(1);
    }
}

module.exports = conectaDB;

//aaaaaaa