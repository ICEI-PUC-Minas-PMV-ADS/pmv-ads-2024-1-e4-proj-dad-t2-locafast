const express = require('express');
const router = express.Router();

//Importar serviço de contrato.
const ContratoService = require("../services/contratoService")
const contratoService = new ContratoService();

// Rota para criar um novo contrato
router.post('/', async (req, res) => {
    try {
        const novoContrato = await contratoService.postContrato(req.body);
        res.status(201).json(novoContrato);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para obter todos os contratos
router.get('/', async (req, res) => {
    try {
        const contratos = await contratoService.getContrato();
        res.status(200).json(contratos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para obter um contrato por ID
router.get('/:id', async (req, res) => {
    try {
        const contrato = await contratoService.getContratoById(req.params.id);
        if (!contrato) {
            res.status(404).json({ error: 'Contrato não encontrado.' });
        } else {
            res.status(200).json(contrato);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um contrato
router.put('/:id', async (req, res) => {
    try {
        const contratoAtualizado = await contratoService.putContrato(req.body, req.params.id);
        res.status(200).json(contratoAtualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para excluir um contrato
router.delete('/:id', async (req, res) => {
    try {
        await contratoService.deleteContrato(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;