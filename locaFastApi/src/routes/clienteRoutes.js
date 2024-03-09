const router = require('express').Router()

const Cliente = require('../models/Cliente')

router.post('/', async (req, res) => {

    const {
        numeroCnh,
        validadeCnh,
        estadoEmissor,
        nome,
        cpf,
        rg,
        telefone,
        email,
        dataNascimento,
        status,
        genero,
    } = req.body

    const cliente = {
        numeroCnh,
        validadeCnh,
        estadoEmissor,
        nome,
        cpf,
        rg,
        telefone,
        email,
        dataNascimento,
        status,
        genero,
    }

    try {

        await Cliente.create(cliente)

        res.status(201).json({ message: "Cliente cadastrado com sucesso!" })

    } catch (error) {
        res.status(500).json({ error: error })
    }

})

router.get('/', async (req, res) => {

    try {

        const cliente = await Cliente.find()

        res.status(200).json(cliente)

    } catch (error) {
        res.status(500).json({ error: error })
    }

})

router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {

        const cliente = await Cliente.findOne({ _id: id })

        if (!cliente) {
            res.status(422).json({ message: "Cliente não encontrado." })
            return
        }

        res.status(200).json(cliente)
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

router.patch('/:id', async (req, res) => {

    const id = req.params.id

    const {
        numeroCnh,
        validadeCnh,
        estadoEmissor,
        nome,
        cpf,
        rg,
        telefone,
        email,
        dataNascimento,
        status,
        genero,
    } = req.body

    const cliente = {
        numeroCnh,
        validadeCnh,
        estadoEmissor,
        nome,
        cpf,
        rg,
        telefone,
        email,
        dataNascimento,
        status,
        genero,
    }

    try {

        const updatedClient = await Cliente.updateOne({ _id: id }, cliente)

        if (updatedClient.matchedCount === 0) {
            res.status(422).json({ message: "Cliente não encontrado." })
            return
        }

        res.status(200).json({ message: "Cliente atualizado com sucesso!" })
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

router.delete('/:id', async (req, res) => {

    const id = req.params.id
    const cliente = await Cliente.findOne({ _id: id })

    if (!cliente) {
        res.status(422).json({ message: "Cliente não encontrado." })
        return
    }

    try {

        await Cliente.deleteOne({ _id: id })

        res.status(200).json({ message: "Cliente removido com sucesso!" })

    } catch (error) {
        res.status(500).json({ error: error })
    }

})

module.exports = router