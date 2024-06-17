const mongoose = require("mongoose");

const contratoSchema = new mongoose.Schema({
    carroId: {
        type: String,
        required: true
    },
    reservaId: {
        type: String,
        required: true
    },
    colaboradorId: {
        type: String,
        required: true
    },
    clienteId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['ativo', 'inativo', 'cancelado'],
        required: true
    },
    dataRetirada: {
        type: Date,
        required: true
    },
    dataDevolucao: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value > this.dataRetirada;
            },
            message: 'A data de devolução deve ser posterior à data de retirada.'
        }
    },
    agenciaRetirada: {
        type: String,
        required: true
    },
    agenciaDevolucao: {
        type: String,
        required: true
    }
});

const Contrato = mongoose.model('Contrato', contratoSchema);

module.exports = Contrato;
