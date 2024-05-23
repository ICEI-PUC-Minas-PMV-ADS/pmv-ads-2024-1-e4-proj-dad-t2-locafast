const jwt = require('jsonwebtoken');
const Reserva = require('../models/Reserva')
const ReservaDTO = require('../Dtos/reservaDto')
const Cliente = require('../models/Cliente')
const Colaborador = require('../models/Colaborador')


class ReservaService {

    async GetReservaAll() {
        try {
            const reservas = await Reserva.find();
            const reservasDTO = reservas.map(reserva => new ReservaDTO(reserva));
            return reservasDTO;
        } catch (error) {
            throw error;
        }
    }

    async postReserva(req) {
        try {

            const token = req.headers.authorization.split(' ')[1];
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const colaboradorId = decodedToken.authUser.id;

            const reserva = {
                ...req.body,
                colaboradorId
            };

            const cliente_check = await Cliente.findById(reserva.clienteId);

            if (!cliente_check) {
                throw new Error("Cliente não existe.");
            }

            const colaborador_check = await Colaborador.findById(reserva.colaboradorId);

            if (!colaborador_check) {
                throw new Error("Colaborador não existe.");
            }

            const validacaoModelo = Reserva.modelIsValid(reserva);

            if (validacaoModelo !== true) {
                throw new Error(validacaoModelo.message);
            }

            const newReserva = await Reserva.create(reserva);
            return new ReservaDTO(newReserva);

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

            await Reserva.deleteOne({ _id: id })

        } catch (error) {
            throw error
        }
    }
}

module.exports = ReservaService;
