const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secrets = require("../constants/secrets")

const ColaboradorRepository = require('../repository/ColaboradorRepository')
const ColaboradorException = require('../exceptions/colaboradorException')
const httpStatus = require('../constants/httpstatus')
const httpstatus = require("../constants/httpstatus")

class LoginService {

    async findByCpf(req){
        try {
            const { cpf } = req.params;
            this.validadeRequestData(cpf);
            let colaborador = await ColaboradorRepository.findByCpf(cpf);
            this.validadeColaboradorNotFound(colaborador)
            return {
                status: httpStatus.SUCCESS,
                colaborador: {
                    id: colaborador.id,
                    nome: colaborador.nome,
                    cpf: colaborador.cpf
                }
            }
        } catch (error) {
            return {
                status: error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR,
                message: error.message,
            }
        }
    }

    validadeAcessTokenData(cpf){
        if(!cpf){
            throw new ColaboradorException(httpStatus.BAD_REQUEST, "User cpf was not informed");
        }
    }

    validadeColaboradorNotFound(colaborador){
        if(!colaborador){
            throw new Error(httpStatus.BAD_REQUEST, "User was not found.")
        }
    }

    async getAcessToken(req){
        try {
            const {cpf, password} = req
            this.validadeAcessTokenData(cpf, password)
            let user = await ColaboradorRepository.findByCpf(cpf)
            await this.validadePassword(password, user.senha)
            const authUser = {id: user.id, nome: user.nome, cpf: user.cpf}
            const acessToken = jwt.sign({authUser}, secrets.API_SECRET,{expiresIn: "1d"})
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

    validadeAcessTokenData(cpf, password){
        if(!cpf|| !password){
            throw new ColaboradorException(httpstatus.UNAUTHORIZED, "CPF and password must be informed.")
        }
    }

    async validadePassword(password, hashPassword){
        if(!await bcrypt.compare(password, hashPassword)){
            throw new ColaboradorException(httpstatus.UNAUTHORIZED, "Password doesn't match.")
        }
    }

}

module.exports = LoginService;
