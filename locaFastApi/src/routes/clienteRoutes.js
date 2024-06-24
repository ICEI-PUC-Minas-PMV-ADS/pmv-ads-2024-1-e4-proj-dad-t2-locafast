const express = require('express');
const router = express.Router();
const ClienteService = require('../services/clienteService');
const clienteService = new ClienteService();

router.post('/', async (req, res) => {
    try {
        const novoCliente = await clienteService.postCliente(req.body); 
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const clientes = await clienteService.GetClienteAll();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const cliente = await clienteService.GetClienteById(req.params.id);
        if (!cliente) {
            res.status(404).json({ error: 'Cliente não encontrado.' });
        } else {
            res.status(200).json(cliente);
        }
        return res.status(cliente.status).json(cliente.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const clienteAtualizado = await clienteService.putCliente(req.body, req.params.id);
        res.status(200).json(clienteAtualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await clienteService.deleteCliente(req.params.id) 
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
