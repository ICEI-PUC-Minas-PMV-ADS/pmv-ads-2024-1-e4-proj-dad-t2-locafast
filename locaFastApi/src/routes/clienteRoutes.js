const router = require('express').Router()

const ClienteService = require('../services/clienteService')

const clienteService = new ClienteService();

router.post('/', async (req, res) => {

    try {

        await clienteService.postCliente(req.body);

        res.status(201).json({ message: "Cliente cadastrado com sucesso!" })

    } catch (error) {
        let statusCode = 500;
        switch (error.message) {
            case 'Todos os campos devem ser preenchidos.':
            case 'número da CNH inválido.':
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

        const clientes = await clienteService.GetClienteAll();

        res.status(200).json(clientes)

    } catch (error) {
        res.status(500).json({ error: error })
    }

})

router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {

        const cliente = await clienteService.GetClienteId(id)

        if (!cliente) {
            res.status(422).json({ message: "Cliente não encontrado." })
            return
        }

        res.status(200).json(cliente)
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

router.put('/:id', async (req, res) => {

    try {

        await clienteService.PutCliente(req.body, req.params.id)

        res.status(200).json({ message: "Cliente atualizado com sucesso!" })

    } catch (error) {
        if (error.message === "Cliente não existe.") {
            res.status(404).json({ error: error.message });
        } else if (error.message === "Todos os campos devem ser preenchidos." ||
                   error.message === "número da CNH inválido." ||
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

        await clienteService.deleteCliente(id)

        res.status(200).json({ message: "Cliente removido com sucesso!" })

    } catch (error) {
        if (error.message === "Cliente não existe.") {
            res.status(404).json({ error: error.message });
        } else {
            res.status(500).json({ error: error })
        }
    }

})

module.exports = router