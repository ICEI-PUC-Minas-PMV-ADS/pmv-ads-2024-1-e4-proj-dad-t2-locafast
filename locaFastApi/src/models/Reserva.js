const mongoose = require("mongoose")
const validator = require('validator');

const reservaSchema = new mongoose.Schema({
    reservaId: String,
    clientId: String,
    dateRetirada: Date,
    agenciaDevolucao: {
        type: String,
        enum: [
            'Ag. Matriz',
            'Ag. Filial Cardec'
        ]
    },
    tarifaId: String,
    categoriaVeiculo: {
        type: String,
        enum: [
            'A', 
            'B',
            'C',
            'D',
            'E'
        ]
    },
    valorDiaria: String,
    colaboradorId: String,

})


reservaSchema.statics.modelIsValid = function(reserva) {

    if (Object.values(reserva).some(value => value === null || value === undefined || value === "")) {
        return new Error('Todos os campos devem ser preenchidos.');
    }

    if (reserva.dateRetirada <=  Date.now()) {
        return new Error('Data inválida.');
    }

    if (reserva.valorDiaria < 0) {
        return new Error('Valor de diária inválida.');
    }

    return true;
}

const Reserva = mongoose.model('Reserva', reservaSchema)

module.exports = Reserva
