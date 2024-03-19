const Carro = require('../models/Carro');

class CarroService {
    async postCarro(carroData) {
        try {
            const novoCarro = await Carro.create(carroData);
            return novoCarro;
        } catch (error) {
            throw error;
        }
    }

    async getCarros() {
        try {
            const carros = await Carro.find();
            return carros;
        } catch (error) {
            throw error;
        }
    }

    async getCarroById(id) {
        try {
            const carro = await Carro.findById(id);
            return carro;
        } catch (error) {
            throw error;
        }
    }

    async putCarro(carroData, id) {
        try {
            const carroAtualizado = await Carro.findByIdAndUpdate(id, carroData, { new: true });
            if (!carroAtualizado) {
                throw new Error("Carro não existe.");
            }
            return carroAtualizado;
        } catch (error) {
            throw error;
        }
    }

    async deleteCarro(id) {
        try {
            const carroExcluido = await Carro.findByIdAndDelete(id);
            if (!carroExcluido) {
                throw new Error("Carro não existe.");
            }
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CarroService;
