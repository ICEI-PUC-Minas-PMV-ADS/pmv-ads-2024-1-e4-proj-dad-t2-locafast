const mongoose = require("mongoose")
const validator = require('validator');

const estadosEnum = require('../Enums/estado')
const ClienteException = require('../exceptions/clienteExcepton')
const httpStatus = require('../config/constants/httpstatus')

const clienteSchema = new mongoose.Schema({
    numeroCnh: String,
    validadeCnh: Date,
    estadoEmissor: {
        type: String,
        enum: estadosEnum,
    },
    nome: String,
    cpf: String,
    rg: String,
    telefone: String,
    email: String,
    dataNascimento: Date,
    status: String,
    genero: {
        type: String,
        enum: ['Masculino', 'Feminino']
    },
})

clienteSchema.statics.modelIsValid = function(cliente) {

    if (Object.values(cliente).some(value => value === null || value === undefined || value === "")) {
        return new ClienteException(httpStatus.BAD_REQUEST, 'Todos os campos devem ser preenchidos.');
    }

    if (cliente.numeroCnh.length !== 9) {
        return new ClienteException(httpStatus.BAD_REQUEST, 'número da CNH inválido.');
    }

    if (cliente.cpf.length !== 11) {
        return new ClienteException(httpStatus.BAD_REQUEST, 'CPF inválido.');
    }

    if (cliente.rg.length !== 8) {
        return new ClienteException(httpStatus.BAD_REQUEST, 'RG inválido.');
    }

    if (!validator.isMobilePhone(cliente.telefone, 'pt-BR')) {
        return new ClienteException(httpStatus.BAD_REQUEST, 'O telefone inserido é inválido.');
    }

    if (!validator.isEmail(cliente.email)) {
        return new ClienteException(httpStatus.BAD_REQUEST, 'O email inserido é inválido.');
    }
}

const Cliente = mongoose.model('Clientes', clienteSchema);

module.exports = Cliente
