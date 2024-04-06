const Colaborador = require('../models/Colaborador')

class ColaboradorRepository {

    async findAll() {
        try {
            return await Colaborador.find()
        } catch (error) {
            throw error
        }
    }

    async findById(id) {
        try {
            return await Colaborador.findOne({ _id: id })
        } catch (error) {
            throw error
        }
    }

    async findByCpfAndRg(cpf, rg = null) {
        try {
            let query = { cpf: cpf };
            if (rg) {
                query.rg = rg;
            }
            return await Colaborador.findOne(query)
        } catch (error) {
            throw error
        }
    }

    async create(colaborador) {
        try {
            return await Colaborador.create(colaborador)
        } catch (error) {
            throw error
        }
    }

    async deleteById(id) {
        try {
            return await Colaborador.deleteOne({ _id: id })
        } catch (error) {
            throw error
        }
    }

    modelStateIsValid(colaborador){
        try {
            return Colaborador.modelStateIsValid(colaborador)
        } catch (error) {
            throw error
        }
    }

}

module.exports = ColaboradorRepository
