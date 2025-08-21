/// schema para aluno
const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema(
    {
        nome:{
            type:String,
            require: [true, "este campo e obrigatorio"],
            minlength: [2, "Nome muito curto"],
            maxlength: [100, "Nome muito longo"]
        },
        idade:{
            type: Number,
            required: [true, "Este campo e obrigatorio"],
            min: [0, "idade não pode ser negativa"],
            max: [150, "idade invalida"],
        },
        curso:{
            type:String,
            required: [true, "Campo obrigatorio"],
            maxlength: [120, "Curso muito longo"] 
        },
        createAt:{
            type: Date,
            default: Date.now
        }

    },
    {versionKey: false }
);

const Aluno = mongoose.model("Aluno", alunoSchema);
module.exports = Aluno;