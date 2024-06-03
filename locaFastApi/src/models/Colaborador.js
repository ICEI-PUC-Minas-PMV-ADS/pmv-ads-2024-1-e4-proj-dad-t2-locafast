const mongoose = require("mongoose")
const validator = require('validator');

const ColaboradorException = require('../exceptions/colaboradorException')
const httpStatus = require('../config/constants/httpstatus')

const colaboradorSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
    rg: String,
    telefone: String,
    dataNascimento: Date,
    senha: String,
    genero: {
        type: String,
        enum: ['Masculino', 'Feminino']
    },
})

colaboradorSchema.statics.modelIsValid = function(colaborador) {

    if (Object.values(colaborador).some(value => value === null || value === undefined || value === "")) {
        return new ColaboradorException(httpStatus.BAD_REQUEST, 'Todos os campos devem ser preenchidos.');
    }

    if (colaborador.cpf.length !== 11) {
        return new ColaboradorException(httpStatus.BAD_REQUEST, 'CPF inválido.');
    }

    if (colaborador.rg.length !== 8) {
        return new ColaboradorException(httpStatus.BAD_REQUEST, 'RG inválido.');
    }

    if (!validator.isMobilePhone(colaborador.telefone, 'pt-BR')) {
        return new ColaboradorException(httpStatus.BAD_REQUEST, 'O telefone inserido é inválido.');
    }
}

const Colaborador = mongoose.model('Colaboradores', colaboradorSchema)

module.exports = Colaborador