const router = require('express').Router()

const ColaboradorService = require('../services/colaboradorService')

const colaboradorService = new ColaboradorService();

router.post('/', async (req, res) => {

    try {
        await colaboradorService.postColaborador(req)
        return res.status(colaboradorService.status).json(colaboradorService.message)
    } catch (error) {
        return {
            status: error.status,
            message: error.message
        }
    }
})

router.get('/', async (_, res) => {

    try {
        const colaboradores = await colaboradorService.GetColaboradorAll();
        return res.status(colaboradores.status).json(colaboradores.colaboradores)
    } catch (error) {
        return {
            status: error.status,
            message: error.message
        }
    }
})

router.get('/:id', async (req, res) => {

    try {
        const colaborador = await colaboradorService.GetColaboradorId(req.params.id)
        return res.status(colaborador.status).json(colaborador.user)
    } catch (error) {
        return {
            status: error.status,
            message: error.message
        }
    }
})

router.put('/:id', async (req, res) => {

    try {
        const colaboradorAtualizado = await colaboradorService.PutColaborador(req, req.params.id)
        return res.status(colaboradorAtualizado.status).json({ message: colaboradorAtualizado.message, colaborador: colaboradorAtualizado.user })
    } catch (error) {
        return {
            status: error.status,
            message: error.message
        }
    }
})

router.delete('/:id', async (req, res) => {

    try {
        const colaboradorDeletado = await colaboradorService.deleteColaborador(req.params.id)
        return res.status(colaboradorDeletado.status).json({ message: colaboradorDeletado.message, colaborador: colaboradorDeletado.user })
    } catch (error) {
        return {
            status: error.status,
            message: error.message
        }
    }
})

module.exports = router
