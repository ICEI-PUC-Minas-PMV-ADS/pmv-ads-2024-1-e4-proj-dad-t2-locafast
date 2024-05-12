const mongoose = require("mongoose");
const validator = require('validator');

const carroSchema = new mongoose.Schema({
    placa: {
        type: String,
        required: [true, 'A placa é obrigatória'],
        validate: {
            validator: function(v) {
                return /^[A-Z]{3}\d{1}[A-Z0-9]{1}\d{2}$/.test(v);
            },
            message: props => `${props.value} não é uma placa válida!`
        }
    },
    chassi: {
        type: String,
        required: [true, 'O chassi é obrigatório'],
        validate: {
            validator: function(v) {
                return /^[A-HJ-NPR-Z0-9]{17}$/.test(v);
            },
            message: props => `${props.value} não é um chassi válido!`
        }
    },
    modelo: {
        type: String,
        required: [true, 'O modelo é obrigatório'],
        minlength: [1, 'O modelo deve ter pelo menos 1 caractere'],
        maxlength: [255, 'O modelo não pode exceder 255 caracteres']
    },
    marca: {
        type: String,
        required: [true, 'A marca é obrigatória'],
        minlength: [1, 'A marca deve ter pelo menos 1 caractere'],
        maxlength: [255, 'A marca não pode exceder 255 caracteres']
    },
    anoFabricacao: {
        type: Number,
        required: [true, 'O ano de fabricação é obrigatório'],
        min: [1900, 'O ano de fabricação deve ser maior ou igual a 1900']
    },
    cor: {
        type: String,
        required: [true, 'A cor é obrigatória'],
        minlength: [1, 'A cor deve ter pelo menos 1 caractere'],
        maxlength: [50, 'A cor não pode exceder 50 caracteres']
    },
    categoria: {
        type: String,
        required: [true, 'A categoria é obrigatória'],
        minlength: [1, 'A categoria deve ter pelo menos 1 caractere'],
        maxlength: [50, 'A categoria não pode exceder 50 caracteres']
    }
});

const Carro = mongoose.model('Carro', carroSchema);

module.exports = Carro;
