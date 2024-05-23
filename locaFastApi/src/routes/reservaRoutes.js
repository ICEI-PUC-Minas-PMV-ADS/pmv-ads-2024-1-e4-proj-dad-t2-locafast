const router = require('express').Router()

const ReservaService = require('../services/reservaService')

const reservaService = new ReservaService();

router.post('/', async (req, res) => {

    try {

        await reservaService.postReserva(req)

        res.status(201).json({ message: "Reserva cadastrada com sucesso!" })

    } catch (error) {
        let statusCode = 500;
        switch (error.message) {
            case 'Todos os campos devem ser preenchidos.':
            case 'Data inválida.':
            case 'Valor de diária inválida.':
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

        const reservas = await reservaService.GetReservaAll();

        res.status(200).json(reservas)

    } catch (error) {
        res.status(500).json({ error: error })
    }

})

router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {

        const reserva = await reservaService.GetReservaId(id)

        if (!reserva) {
            res.status(422).json({ message: "Reserva não encontrado." })
            return
        }

        res.status(200).json(reserva)
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

router.put('/:id', async (req, res) => {

    try {

        await reservaService.PutReserva(req.body, req.params.id)

        res.status(200).json({ message: "Reserva atualizada com sucesso!" })

    } catch (error) {
        if (error.message === "Reserva não existe.") {
            res.status(404).json({ error: error.message });
        } else if (error.message === "Todos os campos devem ser preenchidos." ||
                   error.message === "Data inválida." ||
                   error.message === "Valor de diária inválida.") {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }

})

router.delete('/:id', async (req, res) => {

    const id = req.params.id

    try {

        await reservaService.deleteReserva(id)

        res.status(200).json({ message: "Reserva removida com sucesso!" })

    } catch (error) {
        if (error.message === "Reserva não existe.") {
            res.status(404).json({ error: error.message });
        } else {
            res.status(500).json({ error: error })
        }
    }

})

module.exports = router
