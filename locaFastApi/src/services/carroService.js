const Carro = require('../models/Carro');

class CarroService {
    async postCarro(carroData) {
        try {
            const novoCarro = await Carro.create(carroData);
            return novoCarro;
        } catch (error) {
            throw new Error(`Erro ao criar o carro: ${error.message}`);
        }
    }

    async getCarros() {
        try {
            const carros = await Carro.find();
            return carros;
        } catch (error) {
            throw new Error(`Erro ao obter os carros: ${error.message}`);
        }
    }

    async getCarroById(id) {
        try {
            const carro = await Carro.findById(id);
            if (!carro) {
                throw new Error('Carro não encontrado');
            }
            return carro;
        } catch (error) {
            throw new Error(`Erro ao obter o carro: ${error.message}`);
        }
    }

    async putCarro(carroData, id) {
        try {
            const carroAtualizado = await Carro.findByIdAndUpdate(id, carroData, { new: true });
            if (!carroAtualizado) {
                throw new Error('Carro não encontrado');
            }
            return carroAtualizado;
        } catch (error) {
            throw new Error(`Erro ao atualizar o carro: ${error.message}`);
        }
    }

    async deleteCarro(id) {
        try {
            const carroExcluido = await Carro.findByIdAndDelete(id);
            if (!carroExcluido) {
                throw new Error('Carro não encontrado');
            }
            return carroExcluido;
        } catch (error) {
            throw new Error(`Erro ao deletar o carro: ${error.message}`);
        }
    }
}

module.exports = CarroService;
