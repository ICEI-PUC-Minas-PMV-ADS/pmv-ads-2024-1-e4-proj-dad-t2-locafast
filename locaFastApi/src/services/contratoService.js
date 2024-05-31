const Contrato = require("../models/Contrato")
const validator = require('validator');

class ContratoService {
    async postContrato(dadosDoContrato) {
        try {
            // Verificar se todos os campos obrigatórios estão presentes
            const camposObrigatorios = ['contratoId', 'carroId', 'reservaId', 'colaboradorId', 'status', 'dataRetirada', 'dataDevolução', 'agenciaRetirada', 'agenciaDevolução'];
            for (const campo of camposObrigatorios) {
                if (!dadosDoContrato[campo]) {
                    throw new Error(`O campo ${campo} é obrigatório.`);
                }
            }
       
            // Verificar se a data de devolução é posterior à data de retirada
            const dataRetirada = new Date(dadosDoContrato.dataRetirada);
            const dataDevolucao = new Date(dadosDoContrato.dataDevolução);
            if (dataDevolucao <= dataRetirada) {
                throw new Error('A data de devolução deve ser posterior à data de retirada.');
            }
    
            // Verificar se o status é válido
            const statusValidos = ['ativo', 'inativo', 'cancelado'];
            if (!statusValidos.includes(dadosDoContrato.status)) {
                throw new Error('O status do contrato deve ser ativo, inativo ou cancelado.');
            }
    
            // Criar o contrato se todas as validações passarem
            const novoContrato = await Contrato.create(dadosDoContrato);
            return novoContrato;
        } catch (error) {
            throw error;
        }
    }

    async getContrato() {
        try {
            const contratos = await Contrato.find();
            return contratos;
        } catch (error) {
            throw error;
        }
    }

    async getContratoById(id) {
        try {
            const contrato = await Contrato.findById(id);
            return contrato;
        } catch (error) {
            throw error;
        }
    }

    async putContrato(contratoData, id) {
        try {
            const contratoAtualizado = await Contrato.findByIdAndUpdate(id, contratoData, { new: true });
            if (!contratoAtualizado) {
                throw new Error("Carro não existe.");
            }
            return contratoAtualizado;
        } catch (error) {
            throw error;
        }
    }

    async deleteContrato(id) {
        try {
            const contratoExcluido = await Contrato.findByIdAndDelete(id);
            if (!contratoExcluido) {
                throw new Error("Contrato não existe.");
            }
        } catch (error) {
            throw error;
        }
    }

}

module.exports = ContratoService;
