const router = require('express').Router()

const LoginService = require('../services/loginService')

const loginService = new LoginService();

router.post('/', async (req, res) => {

    try {
        let colaborador = await loginService.findByLogin(req.body)

        if (colaborador) {
            return res.status(200).json(colaborador)
        } else {
            res.status(404).json({ message: "Login inválido." })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

})


module.exports = router