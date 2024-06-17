const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // Keep for future use
const secrets = require("../config/constants/secrets"); // Keep for future use

const ColaboradorRepository = require("../repository/ColaboradorRepository");
const ColaboradorException = require("../exceptions/colaboradorException");
const httpStatus = require("../config/constants/httpstatus");

const colaboradorRepository = new ColaboradorRepository();

class LoginService {
  async findByCpf(req) {
    try {
      const { cpf, senha } = req.body;

      if (!cpf || !senha) {
        throw new ColaboradorException(
          httpStatus.UNAUTHORIZED,
          "CPF e senha devem ser informados."
        );
      }

      let colaborador = await colaboradorRepository.findByCpfAndRg(cpf);
      this.validateColaboradorNotFound(colaborador);

      await this.validatePassword(senha, colaborador.senha);

      let acessToken = await this.getAcessToken(req)
      return {
        status: httpStatus.SUCCESS,
        colaborador: {
          id: colaborador.id,
          nome: colaborador.nome,
          cpf: colaborador.cpf,
        },
        acessToken

      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  validateColaboradorNotFound(colaborador) {
    if (!colaborador) {
      throw new ColaboradorException(
        httpStatus.BAD_REQUEST,
        "Colaborador não encontrado"
      );
    }
  }

  async validatePassword(password, hashPassword) {
    if (!await bcrypt.compare(password, hashPassword)) {
      throw new ColaboradorException(
        httpStatus.UNAUTHORIZED,
        "Senha ou CPF incorretos."
      );
    }
  }

  async getAcessToken(req) {
    try {
      const { cpf, senha } = req.body;
      // Removed the call to validadeAcessTokenData
      let user = await colaboradorRepository.findByCpfAndRg(cpf);
      await this.validadePassword(senha, user.senha);
      const authUser = { id: user.id, nome: user.nome, cpf: user.cpf };
      const acessToken = jwt.sign({ authUser }, "YXV0aC1hcGktc2VjcmV0LWRldi0xMjM0NTY=", { expiresIn: "1d" });
      return {
        status: httpStatus.SUCCESS,
        acessToken,
      };
    } catch (error) {
      throw new ColaboradorException(error.status ? error.status : httpStatus.INTERNAL_SERVER_ERROR, error.message);
    }
  }

  async validadePassword(password, hashPassword) {
    if (!await bcrypt.compare(password, hashPassword)) {
        throw new ColaboradorException(httpStatus.UNAUTHORIZED, "Senha ou CPF incorretos.")
    }
}

}


module.exports = LoginService;
