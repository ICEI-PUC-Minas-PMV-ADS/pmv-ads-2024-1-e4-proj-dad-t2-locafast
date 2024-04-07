const Reserva = require('../models/Reserva')
const Cliente = require('../models/Cliente')
const Colaborador = require('../models/Colaborador')


class ReservaService {
    
    async GetReservaAll() {
        try {
            const reservas = await Reserva.find();
            return reservas;
        } catch (error) {
            throw error;
        }
    }

    async postReserva(reserva) {
        try {

            const conditions = {
                $or: [
                    { colaboradorId: reserva.colaboradorId },
                    { clientId: reserva.clientId },
                    { dataRetirada: reserva.dataRetirada },
                    { valorDiaria: reserva.valorDiaria },
                ]
            }

            const reservaExists = await Reserva.findOne(conditions)

            if (reservaExists) {
                throw new Error('Reserva já possui um cadastro.');
            }

            const cliente_check = await Cliente.findById(id);

            if (!cliente_check ) {
                throw new Error("Cliente não existe.");
            }

            const colaborador_check = await Colaborador.findById(id);

            if (!colaborador_check) {
                throw new Error("Colaborador não existe.");
            }

            const validacaoModelo = Reserva.modelIsValid(reserva);

            if (validacaoModelo !== true) {
                throw new Error(validacaoModelo.message);
            }

            const newReserva = await Reserva.create(reserva);
            return newReserva;

        } catch (error) {
            throw error;
        }
    }

    async GetReservaId(id) {
        try {
            const reserva = await Reserva.findOne({ _id: id })
            if (reserva) {
                return reserva
            } else {
                return false
            }

        } catch (error) {
            throw error
        }
    }

    async PutReserva(reserva, id) {
        try {
            const usuario = await Reserva.findById(id);

            if (!usuario) {
                throw new Error("Reserva não existe.");
            }

            const validacaoModelo = Reserva.modelIsValid(reserva);
            if (validacaoModelo !== true) {
                throw new Error(validacaoModelo.message);
            }

            Object.assign(usuario, reserva);
            const reservaAtualizada = await usuario.save();
            return reservaAtualizada;

        } catch (error) {
            throw error;
        }
    }

    async deleteReserva(id) {
        try {
            const usuario = await Reserva.findById(id)

            if (!usuario) {
                throw new Error("Reserva não existe.");
            }

            await Reserva.deleteOne({_id: id})

        } catch (error) {
            throw error
        }
    }
}

module.exports = ReservaService;
