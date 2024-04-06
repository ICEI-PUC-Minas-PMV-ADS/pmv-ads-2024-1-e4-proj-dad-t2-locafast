const Cliente = require('../models/Cliente');
const ClienteException = require('../exceptions/clienteExcepton');
const httpStatus = require('../config/constants/httpstatus');

class ClienteService {

    async validadeClientExists(cnh, cpf, rg, id = null, message) {
        const conditions = {
            $or: [
                { numeroCnh: cnh },
                { cpf: cpf },
                { rg: rg },
            ]
        };
    
        const clienteExists = await Cliente.findOne(conditions);
    
        if (id && clienteExists && clienteExists._id.toString() !== id) {
            throw new ClienteException(httpStatus.BAD_REQUEST, message);
        }
    
        if (!id && clienteExists) {
            throw new ClienteException(httpStatus.BAD_REQUEST, message);
        }
    }

    async GetClienteAll() {
        try {
            const clientes = await Cliente.find();
            return {
                status: httpStatus.SUCCESS,
                data: clientes
            };
        } catch (error) {
            throw new ClienteException(httpStatus.INTERNAL_SERVER_ERROR, error.message);
        }
    }

    async postCliente(cliente) {
        try {
            this.validadeClientExists(cliente.cnh, cliente.cpf, cliente.rg, "Cliente já existe")
            Cliente.modelIsValid(cliente);

            const newCliente = await Cliente.create(cliente);
            return {
                status: httpStatus.CREATED,
                data: newCliente
            };

        } catch (error) {
            throw new ClienteException(error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR, error.message);
        }
    }

    async GetClienteId(id) {
        try {
            const cliente = await Cliente.findOne({ _id: id });
            if (cliente) {
                return {
                    status: httpStatus.SUCCESS,
                    data: cliente
                };
            } else {
                return {
                    status: httpStatus.NOT_FOUND,
                    message: "Cliente não encontrado."
                };
            }

        } catch (error) {
            throw new ClienteException(httpStatus.INTERNAL_SERVER_ERROR, error.message);
        }
    }

    async PutCliente(cliente, id) {
        try {
            const usuario = await Cliente.findById(id);

            if (!usuario) {
                throw new ClienteException(httpStatus.NOT_FOUND, "Cliente não existe.");
            }

            this.validadeClientExists(cliente.cnh, cliente.cpf, cliente.rg, cliente.id, "Um dos dados informados (cpf ou rg ou cnh) já está em outro cadastro")
            Cliente.modelIsValid(cliente);

            Object.assign(usuario, cliente);
            const clienteAtualizado = await usuario.save();
            return {
                status: httpStatus.SUCCESS,
                message: "Cliente atualizado",
                data: clienteAtualizado
            };

        } catch (error) {
            throw new ClienteException(error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR, error.message);
        }
    }

    async deleteCliente(id) {
        try {
            const usuario = await Cliente.findById(id);

            if (!usuario) {
                throw new ClienteException(httpStatus.NOT_FOUND, "Cliente não existe.");
            }

            await Cliente.deleteOne({ _id: id });
            return {
                status: httpStatus.SUCCESS,
                message: "Cliente deletado."
            };

        } catch (error) {
            throw new ClienteException(error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR, error.message);
        }
    }
}

module.exports = ClienteService;
