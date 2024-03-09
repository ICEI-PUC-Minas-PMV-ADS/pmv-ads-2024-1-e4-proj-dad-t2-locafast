const mongoose = require("mongoose")

const Cliente = mongoose.model('Cliente', {
    numeroCnh: String,
    validadeCnh: Date,
    estadoEmissor: String,
    nome: String,
    cpf: String,
    rg: String,
    telefone: String,
    email: String,
    dataNascimento: Date,
    status: String,
    genero: String,
})

module.exports = Cliente