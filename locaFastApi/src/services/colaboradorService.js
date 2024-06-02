const bcrypt = require('bcrypt')

const ColaboradorException = require('../exceptions/colaboradorException')
const ColaboradorRepository = require('../repository/ColaboradorRepository')
const httpStatus = require('../config/constants/httpstatus')

const colaboradorRepository = new ColaboradorRepository()

class ColaboradorService {

    validadeUserNotFound(colaborador) {
        if (!colaborador) {
            throw new ColaboradorException(httpStatus.NOT_FOUND, 'Colaborador não encontrado.')
        }
    }

    async validadeUserExists(cpf, rg){
        const colaboradorExists = await colaboradorRepository.findByCpfAndRg(cpf, rg)
        if (colaboradorExists) {
            throw new ColaboradorException(httpStatus.BAD_REQUEST, 'Número de cpf ou rg informados já existentes');
        }
    }

    async hashPassword(password) {
        return await bcrypt.hash(password, 10);
    }

    async GetColaboradorAll() {
        try {
            const colaboradores = await colaboradorRepository.findAll()
            return {
                status: httpStatus.SUCCESS,
                colaboradores
            };
        } catch (error) {
            throw new ColaboradorException(error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR, error.message)
        }
    }

    async postColaborador(req) {
        try {

            this.validadeUserExists(req.body.cpf, req.body.rg)
            const validacaoModelo = colaboradorRepository.modelIsValid(req.body);

            req.body.senha = hashPassword(req.body.senha)

            await colaboradorRepository.create(req.body);
            return {
                status: httpStatus.CREATED,
                message: "Colaborador cadastrado com sucesso!"
            };

        } catch (error) {
            throw new ColaboradorException(error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR, error.message)
        }
    }

    async GetColaboradorId(id) {
        try {
            const colaborador = await colaboradorRepository.findById(id)
            this.validadeUserNotFound(colaborador)
            return {
                status: httpStatus.SUCCESS,
                user: colaborador
            }
        } catch (error) {
            throw new ColaboradorException(error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR, error.message)
        }
    }

    async PutColaborador(req, id) {
        try {
            const colaborador = await colaboradorRepository.findById(id);

            this.validadeUserNotFound(colaborador)
            colaboradorRepository.modelIsValid(req.body);
            this.validadeUserExists(req.body.cpf, req.body.rg)

            req.body.senha = hashPassword(req.body.senha)
            Object.assign(colaborador, req.body);
            const colaboradorAtualizado = await colaborador.save();
            return {
                status: httpStatus.SUCCESS,
                message: "Colaborador atualizado",
                user: colaboradorAtualizado
            };
        } catch (error) {
            throw new ColaboradorException(error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR, error.message)
        }
    }

    async deleteColaborador(id) {
        try {
            const colaborador = await colaboradorRepository.findById(id)
            this.validadeUserNotFound()
            await colaboradorRepository.deleteById(id)
            return {
                status: httpStatus.SUCCESS,
                message: "Colaborador deletado.",
                user: colaborador
            }
        } catch (error) {
            throw new ColaboradorException(error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR, error.message)
        }
    }
}

module.exports = ColaboradorService;
