const Cliente = require('../models/Cliente');

class ClienteService {

    async postCliente(cliente) {
        try {
            console.log("Recebido para cadastrar cliente: ", cliente); // Log para debug

            const camposObrigatorios = ['numeroCnh', 'validadeCnh', 'estadoEmissor', 'nome', 'cpf', 'rg', 'telefone', 'email', 'dataNascimento', 'status', 'genero'];
            for (const campo of camposObrigatorios) {
                if (!cliente[campo]) {
                    throw new Error(`O campo ${campo} é obrigatório.`);
                }
            }

            const statusValidos = ['ativo', 'inativo'];
            if (!statusValidos.includes(cliente.status)) {
                throw new Error('O status do cliente deve ser ativo ou inativo.');
            }

            const generoValido = ['masculino', 'feminino']; // Corrigido o array de gêneros válidos
            if (!generoValido.includes(cliente.genero)) {
                throw new Error('O gênero do cliente deve ser masculino ou feminino.');
            }

            const novoCliente = await Cliente.create(cliente);
            console.log("Cliente cadastrado com sucesso: ", novoCliente);
            return novoCliente; 
        } catch (error) {
            console.error("Erro ao cadastrar cliente: ", error); // Log para debug
            throw error;
        }
    }

    async GetClienteAll() {
        try {
            const clientes = await Cliente.find();
            console.log("Clientes recuperados: ", clientes); // Log para debug
            return clientes;
        } catch (error) {
            console.error("Erro ao buscar clientes: ", error); // Log para debug
            throw error;
        }
    }

    async GetClienteById(id) {
        try {
            const cliente = await Cliente.findById(id);
            console.log("Cliente recuperado por ID: ", cliente); // Log para debug
            return cliente;
        } catch (error) {
            console.error("Erro ao buscar cliente por ID: ", error); // Log para debug
            throw error;
        }
    }

    async PutCliente(clienteData, id) {
        try {
            const usuarioAtualizado = await Cliente.findByIdAndUpdate(id, clienteData, { new: true });
            if (!usuarioAtualizado) {
                throw new Error("Cliente não existe.");
            }
            console.log("Usuario atualizado: ", usuarioAtualizado); // Log para debug
            return usuarioAtualizado;
        } catch (error) {
            console.error("Erro ao atualizar usuario: ", error); // Log para debug
            throw error;
        }
} 

    async deleteCliente(id) {
        try {
            const usuarioExcluido = await Cliente.findByIdAndDelete(id);
            if (!usuarioExcluido) {
                throw new Error("Cliente não existe.");
            }
            console.log("Cliente deletado: ", usuarioExcluido); // Log para debug
        } catch (error) {
            console.error("Erro ao deletar cliente: ", error); // Log para debug
            throw error;
        }
    }
}

module.exports = ClienteService;
