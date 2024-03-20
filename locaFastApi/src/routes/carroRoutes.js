const express = require('express');
const router = express.Router();

// Importar o serviço de carro
const CarroService = require('../services/carroService');
const carroService = new CarroService();

// Rota para criar um novo carro
router.post('/', async (req, res) => {
    try {
        const novoCarro = await carroService.postCarro(req.body);
        res.status(201).json(novoCarro);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para obter todos os carros
router.get('/', async (req, res) => {
    try {
        const carros = await carroService.getCarros();
        res.status(200).json(carros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para obter um carro pelo ID
router.get('/:id', async (req, res) => {
    try {
        const carro = await carroService.getCarroById(req.params.id);
        if (!carro) {
            res.status(404).json({ message: "Carro não encontrado." });
            return;
        }
        res.status(200).json(carro);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para atualizar um carro pelo ID
router.put('/:id', async (req, res) => {
    try {
        const carroAtualizado = await carroService.putCarro(req.body, req.params.id);
        res.status(200).json(carroAtualizado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Rota para excluir um carro pelo ID
router.delete('/:id', async (req, res) => {
    try {
        await carroService.deleteCarro(req.params.id);
        res.status(200).json({ message: "Carro removido com sucesso." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
