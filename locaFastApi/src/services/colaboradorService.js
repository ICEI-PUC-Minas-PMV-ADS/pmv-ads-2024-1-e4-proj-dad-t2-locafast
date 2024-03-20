const Colaborador = require('../models/Colaborador')


class ColaboradorService {
    
    async GetColaboradorAll() {
        try {
            const colaboradores = await Colaborador.find();
            return colaboradores;
        } catch (error) {
            throw error;
        }
    }

    async postColaborador(colaborador) {
        try {

            const conditions = {
                $or: [
                    { cpf: colaborador.cpf },
                    { rg: colaborador.rg },
                ]
            }

            const colaboradorExists = await Colaborador.findOne(conditions)

            if (colaboradorExists) {
                throw new Error('colaborador já possui um cadastro.');
            }

            const validacaoModelo = Colaborador.modelIsValid(colaborador);
            if (validacaoModelo !== true) {
                throw new Error(validacaoModelo.message);
            }

            const newColaborador = await Colaborador.create(colaborador);
            return newColaborador;

        } catch (error) {
            throw error;
        }
    }

    async GetColaboradorId(id) {
        try {
            const colaborador = await Colaborador.findOne({ _id: id })
            if (colaborador) {
                return colaborador
            } else {
                return false
            }

        } catch (error) {
            throw error
        }
    }

    async PutColaborador(colaborador, id) {
        try {
            const usuario = await Colaborador.findById(id);

            if (!usuario) {
                throw new Error("Colaborador não existe.");
            }

            const validacaoModelo = Colaborador.modelIsValid(colaborador);
            if (validacaoModelo !== true) {
                throw new Error(validacaoModelo.message);
            }

            Object.assign(usuario, colaborador);
            const colaboradorAtualizado = await usuario.save();
            return colaboradorAtualizado;

        } catch (error) {
            throw error;
        }
    }

    async deleteColaborador(id) {
        try {
            const usuario = await Colaborador.findById(id)

            if (!usuario) {
                throw new Error("Colaborador não existe.");
            }

            await Colaborador.deleteOne({_id: id})

        } catch (error) {
            throw error
        }
    }
}

module.exports = ColaboradorService;
