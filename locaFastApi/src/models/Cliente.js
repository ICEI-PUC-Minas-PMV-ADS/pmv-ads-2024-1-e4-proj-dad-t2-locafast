const mongoose = require("mongoose")

const clienteSchema = new mongoose.Schema({
    numeroCnh: {
        type: String,
        required: true
    },
    validadeCnh: {
        type: Date,
        required: true
    },
    estadoEmissor: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    rg: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dataNascimento: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['ativo', 'inativo'],
        required: true
    },
    genero: {
        type: String,
        enum: ['masculino', 'feminino'],
        required: true
    },
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente
