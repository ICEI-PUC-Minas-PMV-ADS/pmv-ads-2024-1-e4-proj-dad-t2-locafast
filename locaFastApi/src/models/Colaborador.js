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
    genero: String
})

colaboradorSchema.statics.modelIsValid = function(colaborador) {

    if (Object.values(colaborador).some(value => value === null || value === undefined || value === "")) {
        return new ColaboradorException(httpStatus.BAD_REQUEST, 'Todos os campos devem ser preenchidos.');
    }


}

const Colaborador = mongoose.model('Colaboradores', colaboradorSchema)

module.exports = Colaborador
