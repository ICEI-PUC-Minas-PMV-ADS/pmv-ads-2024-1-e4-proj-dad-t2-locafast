const router = require('express').Router()

const ColaboradorService = require('../services/colaboradorService')

const colaboradorService = new ColaboradorService();

router.post('/', async (req, res) => {

    try {

        await colaboradorService.postColaborador(req.body)

        res.status(201).json({ message: "Colaborador cadastrado com sucesso!" })

    } catch (error) {
        let statusCode = 500;
        switch (error.message) {
            case 'Todos os campos devem ser preenchidos.':
            case 'CPF inválido.':
            case 'RG inválido.':
            case 'O telefone inserido é inválido.':
            case 'O email inserido é inválido.':
                statusCode = 400;
                break;
            default:
                statusCode = 500;
        }

        res.status(statusCode).json({ error: error.message });
    }

})

router.get('/', async (req, res) => {

    try {

        const colaboradores = await colaboradorService.GetColaboradorAll();

        res.status(200).json(colaboradores)

    } catch (error) {
        res.status(500).json({ error: error })
    }

})

router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {

        const colaborador = await colaboradorService.GetColaboradorId(id)

        if (!colaborador) {
            res.status(422).json({ message: "Colaborador não encontrado." })
            return
        }

        res.status(200).json(colaborador)
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

router.put('/:id', async (req, res) => {

    try {

        await colaboradorService.PutColaborador(req.body, req.params.id)

        res.status(200).json({ message: "Colaborador atualizado com sucesso!" })

    } catch (error) {
        if (error.message === "Colaborador não existe.") {
            res.status(404).json({ error: error.message });
        } else if (error.message === "Todos os campos devem ser preenchidos." ||
                   error.message === "CPF inválido." ||
                   error.message === "RG inválido." ||
                   error.message === "O telefone inserido é inválido." ||
                   error.message === "O email inserido é inválido.") {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }

})

router.delete('/:id', async (req, res) => {

    const id = req.params.id

    try {

        await colaboradorService.deleteColaborador(id)

        res.status(200).json({ message: "Colaborador removido com sucesso!" })

    } catch (error) {
        if (error.message === "Colaborador não existe.") {
            res.status(404).json({ error: error.message });
        } else {
            res.status(500).json({ error: error })
        }
    }

})

module.exports = router