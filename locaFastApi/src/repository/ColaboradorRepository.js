const Colaborador = require('../models/Colaborador')

class ColaboradorRepository {

    async findByCpf(id) {
        try {
            return await Colaborador.findOne({_id: id})
        } catch (error) {
            console.log(error.message);
            return null
        }
    }

    async findByCpf(cpf) {
        try {
            return await Colaborador.findOne({cpf: cpf})
        } catch (error) {
            console.log(error.message);
            return null
        }
    }

}

module.exports = ColaboradorRepository
