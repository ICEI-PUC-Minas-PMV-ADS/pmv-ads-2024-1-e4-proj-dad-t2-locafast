const Colaborador = require('../models/Colaborador')

class LoginService {

    async findByLogin(colaborador) {

        let baseColaborador = new Colaborador()

        if(colaborador !== null && colaborador.cpf.trim() !== ""){

            const conditions = {
                $and: [
                    { cpf: colaborador.cpf },
                    { rg: colaborador.senha },
                ]
            }

            baseColaborador = await Colaborador.findOne(conditions)
            if(baseColaborador === null){
                return null
            } else {
                return baseColaborador
            }
        } else {
            return null
        }
    }
}

module.exports = LoginService;