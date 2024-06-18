const mongoose = require("mongoose");
const agencias = require("../Enums/agencias")

const reservaSchema = new mongoose.Schema({
    clienteId: String,
    dateRetirada: Date,
    dateDevolucao: Date,
    agenciaRetirada: {
        type: String,
        enum: agencias
    },
    agenciaDevolucao: {
        type: String,
        enum: agencias
    },
    categoriaVeiculo: {
        type: String,
        enum: [
            'A', 
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'I',
            'J',
            'K',
            'L',
            'P',
            'SP'
        ]
    },
    valorDiaria: String,
    nomeRequisitante: String,
    telefoneRequisitante: String,
    colaboradorId: String,

})

reservaSchema.statics.modelIsValid = function(reserva) {

    if (Object.values(reserva).some(value => value === null || value === undefined || value === "")) {
        return new Error('Todos os campos devem ser preenchidos.');
    }

    if (reserva.valorDiaria < 0) {
        return new Error('Valor de diária inválida.');
    }

    return true;
}

const Reserva = mongoose.model('Reserva', reservaSchema)

module.exports = Reserva
