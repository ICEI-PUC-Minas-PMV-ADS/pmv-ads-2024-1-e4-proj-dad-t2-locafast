const router = require('express').Router();

const ClienteService = require('../services/clienteService');
const httpStatus = require('../config/constants/httpstatus');

const clienteService = new ClienteService();

router.post('/', async (req, res) => {
    try {
        await clienteService.postCliente(req.body);
        return res.status(httpStatus.CREATED).json({ message: "Cliente cadastrado com sucesso!" });
    } catch (error) {
        const status = error.status
        return res.status(status).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const clientes = await clienteService.GetClienteAll();
        return res.status(clientes.status).json(clientes.data);
    } catch (error) {
        const status = error.status
        return res.status(status).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const cliente = await clienteService.GetClienteId(id);
        if (!cliente) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "Cliente não encontrado." });
        }
        return res.status(cliente.status).json(cliente.data);
    } catch (error) {
        const status = error.status
        return res.status(status).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await clienteService.PutCliente(req.body, id);
        return res.status(httpStatus.SUCCESS).json({ message: "Cliente atualizado com sucesso!" });
    } catch (error) {
        const status = error.status
        return res.status(status).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await clienteService.deleteCliente(id);
        return res.status(httpStatus.SUCCESS).json({ message: "Cliente removido com sucesso!" });
    } catch (error) {
        const status = error.status
        return res.status(status).json({ error: error.message });
    }
});

module.exports = router;
