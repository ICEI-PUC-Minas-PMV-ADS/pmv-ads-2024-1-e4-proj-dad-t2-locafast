const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secrets = require("../constants/secrets")

const Colaborador = require('../models/Colaborador')

class LoginService {

    async findByLogin(colaborador) {
        try {
            let baseColaborador = new Colaborador()

            if (colaborador !== null && colaborador.cpf.trim() !== "") {

                const conditions = {
                    $and: [
                        { cpf: colaborador.cpf },
                        { senha: colaborador.senha },
                    ]
                }

                baseColaborador = await Colaborador.findOne(conditions)

                token = this.getAcessToken(colaborador)

                if (baseColaborador === null) {
                    return null
                } else {
                    return {
                        message: "Colaborador logado!",
                        acessToken: token.acessToken,
                        colaborador: {
                            id: baseColaborador.id,
                            cpf: baseColaborador.cpf
                        }
                    }
                }
            } else {
                return null
            }
        } catch (error) {
            throw error
        }
    }

    async getAcessToken(req){
        try {
            const {cpf, password} = req
            this.validadeAcessTokenData(cpf, password)
            let user = await Colaborador.findOne({cpf: cpf})
            await this.validadePassword(password, user.senha)
            const authUser = {id: user.id, nome: user.nome, cpf: user.cpf}
            const acessToken = jwt.sign({authUser}, secrets.API_SECRET,{expiresIn: "1d"})
            return acessToken
        } catch (error) {
            throw error
        }
    }

    validadeAcessTokenData(cpf, password){
        if(!cpf|| !password){
            throw new Error("CPF e senha são obrigatórios!")
        }
    }

    async validadePassword(password, hashPassword){
        if(!await bcrypt.compare(password, hashPassword)){
            throw new Error("Senhas não coincidem")
        }
    }

}

module.exports = LoginService;