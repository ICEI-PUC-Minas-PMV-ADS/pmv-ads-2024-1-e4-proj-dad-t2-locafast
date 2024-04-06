const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secrets = require("../config/constants/secrets")

const ColaboradorRepository = require('../repository/ColaboradorRepository')
const ColaboradorException = require('../exceptions/colaboradorException')
const httpStatus = require('../config/constants/httpstatus')


const colaboradorRepository = new ColaboradorRepository()

class LoginService {

    async findByCpf(req) {
        try {
            const { cpf } = req.body;
            this.validadeRequestData(cpf);
            let colaborador = await colaboradorRepository.findByCpfAndRg(cpf);
            this.validadeColaboradorNotFound(colaborador)
            let acessToken = await this.getAcessToken(req)
            return {
                status: httpStatus.SUCCESS,
                colaborador: {
                    id: colaborador.id,
                    nome: colaborador.nome,
                    cpf: colaborador.cpf
                },
                acessToken
            }
        } catch (error) {
            throw new ColaboradorException(error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR, error.message)
        }
    }

    validadeRequestData(cpf) {
        if (!cpf) {
            throw new ColaboradorException(httpStatus.BAD_REQUEST, "CPF não foi informado");
        }
    }

    validadeColaboradorNotFound(colaborador) {
        if (!colaborador) {
            throw new ColaboradorException(httpStatus.BAD_REQUEST, "Colaborador não encontrado")
        }
    }

    async getAcessToken(req) {
        try {
            const { cpf, senha } = req.body
            this.validadeAcessTokenData(cpf, senha)
            let user = await colaboradorRepository.findByCpfAndRg(cpf)
            await this.validadePassword(senha, user.senha)
            const authUser = { id: user.id, nome: user.nome, cpf: user.cpf }
            const acessToken = jwt.sign({ authUser }, "YXV0aC1hcGktc2VjcmV0LWRldi0xMjM0NTY=", { expiresIn: "1d" })
            return {
                status: httpStatus.SUCCESS,
                acessToken,
            }
        } catch (error) {
            throw new ColaboradorException(error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR, error.message)
        }
    }

    validadeAcessTokenData(cpf, password) {
        if (!cpf || !password) {
            throw new ColaboradorException(httpStatus.UNAUTHORIZED, "CPF e senha devem ser informados.")
        }
    }

    async validadePassword(password, hashPassword) {
        if (!await bcrypt.compare(password, hashPassword)) {
            throw new ColaboradorException(httpStatus.UNAUTHORIZED, "Senha incorreta.")
        }
    }

}

module.exports = LoginService;
