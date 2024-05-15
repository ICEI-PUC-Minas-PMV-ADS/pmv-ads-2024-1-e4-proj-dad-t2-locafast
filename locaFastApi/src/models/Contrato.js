const mongoose = require("mongoose");

const contratoSchema = new mongoose.Schema({
    contratoId: {
        type: String,
        required: true
    },
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
    status: {
        type: String,
        enum: ['ativo', 'inativo', 'cancelado'],
        required: true
    },
    dataRetirada: {
        type: Date,
        required: true
    },
    dataDevolução: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value > this.dataRetirada; // Garante que a data de devolução seja posterior à data de retirada
            },
            message: 'A data de devolução deve ser posterior à data de retirada.'
        }
    },
    agenciaRetirada: {
        type: String,
        required: true
    },
    agenciaDevolução: {
        type: String,
        required: true
    }
});

const Contrato = mongoose.model('Contrato', contratoSchema);

module.exports = Contrato;
