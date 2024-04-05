const router = require('express').Router()

const LoginService = require('../services/loginService')

const loginService = new LoginService()

router.post('/', async (req, res) => {

    await loginService.findByCpf(req)
    let acessToken = await loginService.getAcessToken(req)

    return res.status(acessToken.status).json(acessToken);

})


module.exports = router
