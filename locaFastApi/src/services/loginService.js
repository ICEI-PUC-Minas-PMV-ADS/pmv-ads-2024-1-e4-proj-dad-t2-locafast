const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secrets = require("../config/constants/secrets")

const ColaboradorRepository = require('../repository/ColaboradorRepository')
const ColaboradorException = require('../exceptions/colaboradorException')
const httpStatus = require('../config/constants/httpstatus')
const httpstatus = require("../config/constants/httpstatus")

const colaboradorRepository = new ColaboradorRepository()

class LoginService {

    async findByCpf(req) {
        try {
            const { cpf } = req.body;
            this.validadeRequestData(cpf);
            let colaborador = await colaboradorRepository.findByCpf(cpf);
            this.validadeColaboradorNotFound(colaborador)
            let acessToken = await this.getAcessToken(req)
            return {
                status: httpStatus.SUCCESS,
                colaborador: {
                    id: colaborador.id,
                    nome: colaborador.nome,
                    cpf: colaborador.cpf
                },
                acessToken: {
                    status: acessToken.status,
                    token: acessToken
                }
            }
        } catch (error) {
            return {
                status: error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            }
        }
    }

    validadeRequestData(cpf) {
        if (!cpf) {
            throw new ColaboradorException(httpStatus.BAD_REQUEST, "User cpf was not informed");
        }
    }

    validadeColaboradorNotFound(colaborador) {
        if (!colaborador) {
            throw new ColaboradorException(httpStatus.BAD_REQUEST, "User was not found.")
        }
    }

    async getAcessToken(req) {
        try {
            const { cpf, senha } = req.body
            this.validadeAcessTokenData(cpf, senha)
            let user = await colaboradorRepository.findByCpf(cpf)
            await this.validadePassword(senha, user.senha)
            const authUser = { id: user.id, nome: user.nome, cpf: user.cpf }
            const acessToken = jwt.sign({ authUser }, "YXV0aC1hcGktc2VjcmV0LWRldi0xMjM0NTY=", { expiresIn: "1d" })
            return {
                status: httpStatus.SUCCESS,
                acessToken,
            }
        } catch (error) {
            return {
                status: error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            }
        }
    }

    validadeAcessTokenData(cpf, password) {
        if (!cpf || !password) {
            throw new ColaboradorException(httpstatus.UNAUTHORIZED, "CPF and password must be informed.")
        }
    }

    async validadePassword(password, hashPassword) {
        if (!await bcrypt.compare(password, hashPassword)) {
            throw new ColaboradorException(httpstatus.UNAUTHORIZED, "Password doesn't match.")
        }
    }

}

module.exports = LoginService;
