const mongoose = require("mongoose")
const validator = require('validator');

const colaboradorSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    rg: String,
    telefone: String,
    dataNascimento: Date,
    genero: {
        type: String,
        enum: ['Masculino', 'Feminino']
    },
})

colaboradorSchema.statics.modelIsValid = function(colaborador) {

    if (Object.values(colaborador).some(value => value === null || value === undefined || value === "")) {
        return new Error('Todos os campos devem ser preenchidos.');
    }

    if (colaborador.cpf.length !== 11) {
        return new Error('CPF inválido.');
    }

    if (colaborador.rg.length !== 8) {
        return new Error('RG inválido.');
    }

    if (!validator.isMobilePhone(colaborador.telefone, 'pt-BR')) {
        return new Error('O telefone inserido é inválido.');
    }

    return true;
}

const Colaborador = mongoose.model('Colaboradores', colaboradorSchema)

module.exports = Colaborador