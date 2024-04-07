const mongoose = require("mongoose");
const validator = require('validator');

const carroSchema = new mongoose.Schema({
    placa: {
        type: String,
        required: true
    },
    chassi: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    anoFabricacao: {
        type: Number,
        required: true
    },
    cor: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    }
});

carroSchema.statics.modelIsValid = function(carro) {
    if (Object.values(carro).some(value => value === null || value === undefined || value === "")) {
        return new Error('Todos os campos devem ser preenchidos.');
    }

    if (carro.placa.length !== 7) {
        return new Error('Placa inválida.');
    }

    if (carro.chassi.length !== 17) {
        return new Error('Chassi inválido.');
    }

    return true;
};

const Carro = mongoose.model('Carro', carroSchema);

module.exports = Carro;
