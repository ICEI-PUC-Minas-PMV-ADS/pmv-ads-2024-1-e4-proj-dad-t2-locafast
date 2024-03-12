const mongoose = require("mongoose")
const validator = require('validator');
const estadosEnum = require('../Enums/estado')

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
        return new Error('Todos os campos devem ser preenchidos.');
    }

    if (cliente.numeroCnh.length !== 9) {
        return new Error('número da CNH inválido.');
    }

    if (cliente.cpf.length !== 11) {
        return new Error('CPF inválido.');
    }

    if (cliente.rg.length !== 8) {
        return new Error('RG inválido.');
    }

    if (!validator.isMobilePhone(cliente.telefone, 'pt-BR')) {
        return new Error('O telefone inserido é inválido.');
    }

    if (!validator.isEmail(cliente.email)) {
        return new Error('O email inserido é inválido.');
    }

    return true;
}

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente