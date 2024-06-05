const router = require('express').Router()

const LoginService = require('../services/loginService')

const loginService = new LoginService()

router.post("/", async (req, res) => {
    try {
        const colaborador = await loginService.findByCpf(req)
        return res.status(colaborador.status).json(colaborador);
    } catch (error) {
      console.error(error);
      return res.status(error.status).json({ message: error.message });
    }
  });
module.exports = router
