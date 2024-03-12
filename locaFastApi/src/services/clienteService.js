const Cliente = require('../models/Cliente')


class ClienteService {
    async GetClienteAll() {
        try {
            const clientes = await Cliente.find();
            return clientes;
        } catch (error) {
            throw error;
        }
    }

    async postCliente(cliente) {
        try {

            const conditions = {
                $or: [
                    { numeroCnh: cliente.numeroCnh },
                    { cpf: cliente.cpf },
                    { rg: cliente.rg },
                    { email: cliente.email }
                ]
            }

            const clienteExists = await Cliente.findOne(conditions)

            if (clienteExists) {
                throw new Error('Cliente já possui um cadastro.');
            }

            const validacaoModelo = Cliente.modelIsValid(cliente);
            if (validacaoModelo !== null) {
                throw new Error(validacaoModelo.message);
            }

            const newCliente = await Cliente.create(cliente);
            return newCliente;

        } catch (error) {
            throw error;
        }
    }

    async GetClienteId(id) {
        try {
            const cliente = await Cliente.findOne({ _id: id })
            if (cliente) {
                return cliente
            } else {
                return false
            }

        } catch (error) {
            throw error
        }
    }

    async PutCliente(cliente, id) {
        try {
            const usuario = await Cliente.findById(id);

            if (!usuario) {
                throw new Error("Cliente não existe.");
            }

            const validacaoModelo = Cliente.modelIsValid(cliente);
            if (validacaoModelo !== true) {
                throw new Error(validacaoModelo.message);
            }

            Object.assign(usuario, cliente);
            const clienteAtualizado = await usuario.save();
            return clienteAtualizado;

        } catch (error) {
            throw error;
        }
    }

    async deleteCliente(id) {
        try {
            const usuario = await Cliente.findById(id)

            if (!usuario) {
                throw new Error("Cliente não existe.");
            }

            await Cliente.deleteOne({_id: id})

        } catch (error) {
            throw error
        }
    }
}

module.exports = ClienteService;
