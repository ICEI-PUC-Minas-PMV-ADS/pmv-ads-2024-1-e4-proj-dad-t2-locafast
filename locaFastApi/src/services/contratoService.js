const Contrato = require("../models/Contrato");

class ContratoService {
    async postContrato(dadosDoContrato) {
        try {
            console.log("Recebido para criar contrato: ", dadosDoContrato); // Log para debug

            // Verificar se todos os campos obrigatórios estão presentes
            const camposObrigatorios = ['carroId', 'reservaId', 'colaboradorId', 'clienteId', 'status', 'dataRetirada', 'dataDevolucao', 'agenciaRetirada', 'agenciaDevolucao'];
            for (const campo of camposObrigatorios) {
                if (!dadosDoContrato[campo]) {
                    throw new Error(`O campo ${campo} é obrigatório.`);
                }
            }

            // Verificar se a data de devolução é posterior à data de retirada
            const dataRetirada = new Date(dadosDoContrato.dataRetirada);
            const dataDevolucao = new Date(dadosDoContrato.dataDevolucao);
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
            console.log("Contrato criado com sucesso: ", novoContrato); // Log para debug
            return novoContrato;
        } catch (error) {
            console.error("Erro ao criar contrato: ", error); // Log para debug
            throw error;
        }
    }

    async getContrato() {
        try {
            const contratos = await Contrato.find();
            console.log("Contratos recuperados: ", contratos); // Log para debug
            return contratos;
        } catch (error) {
            console.error("Erro ao buscar contratos: ", error); // Log para debug
            throw error;
        }
    }

    async getContratoById(id) {
        try {
            const contrato = await Contrato.findById(id);
            console.log("Contrato recuperado por ID: ", contrato); // Log para debug
            return contrato;
        } catch (error) {
            console.error("Erro ao buscar contrato por ID: ", error); // Log para debug
            throw error;
        }
    }

    async putContrato(contratoData, id) {
        try {
            const contratoAtualizado = await Contrato.findByIdAndUpdate(id, contratoData, { new: true });
            if (!contratoAtualizado) {
                throw new Error("Contrato não existe.");
            }
            console.log("Contrato atualizado: ", contratoAtualizado); // Log para debug
            return contratoAtualizado;
        } catch (error) {
            console.error("Erro ao atualizar contrato: ", error); // Log para debug
            throw error;
        }
    }

    async deleteContrato(id) {
        try {
            const contratoExcluido = await Contrato.findByIdAndDelete(id);
            if (!contratoExcluido) {
                throw new Error("Contrato não existe.");
            }
            console.log("Contrato deletado: ", contratoExcluido); // Log para debug
        } catch (error) {
            console.error("Erro ao deletar contrato: ", error); // Log para debug
            throw error;
        }
    }
}

module.exports = ContratoService;
