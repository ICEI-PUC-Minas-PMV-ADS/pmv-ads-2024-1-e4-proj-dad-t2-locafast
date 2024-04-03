const router = require('express').Router()

const LoginService = require('../services/loginService')

const loginService = new LoginService()

router.post('/', async (req, res) => {

    let colaborador = await loginService.findByCpf(req)
    return res.status(colaborador.status).json(colaborador);

})


module.exports = router
