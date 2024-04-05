const express = require('express');
const z = require('zod')
const router = express.Router();

// Importar o serviço de carro
const CarroService = require('../services/carroService');
const carroService = new CarroService();

const carroCreateBodySchema = z.object({
  placa: z.string().regex(/^([A-Z]{3}\d{1}[A-Z0-9]{1}\d{2})$/), // Expressão regular para validar a placa
  chassi: z.string().regex(/^[A-HJ-NPR-Z0-9]{17}$/), // Expressão regular para validar o chassi
  modelo: z.string().min(1).max(255), // Mínimo de 1 caractere e máximo de 255 caracteres
  marca: z.string().min(1).max(255), // Mínimo de 1 caractere e máximo de 255 caracteres
  anoFabricacao: z.number().min(4), // Expressão regular para validar o ano de fabricação (formato YYYY)
  cor: z.string().min(1).max(50), // Mínimo de 1 caractere e máximo de 50 caracteres
  categoria: z.string().min(1).max(50), // Mínimo de 1 caractere e máximo de 50 caracteres
});

// Rota para criar um novo carro
router.post('/', async (req, res) => {
    try {
        const carroInput = carroCreateBodySchema.parse(req.body)
        const novoCarro = await carroService.postCarro(carroInput);
        res.status(201).json(novoCarro);
    } catch (error) {
        res.status(400).json({ error: error.format() });
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
const carroUpdateBodySchema = z.object({
  placa: z.string().regex(/^([A-Z]{3}\d{1}[A-Z0-9]{1}\d{2})$/).optional(), // Expressão regular para validar a placa
  chassi: z.string().regex(/^[A-HJ-NPR-Z0-9]{17}$/).optional(), // Expressão regular para validar o chassi
  modelo: z.string().min(1).max(255).optional(), // Mínimo de 1 caractere e máximo de 255 caracteres
  marca: z.string().min(1).max(255).optional(), // Mínimo de 1 caractere e máximo de 255 caracteres
  anoFabricacao: z.number().min(4).optional(), // Expressão regular para validar o ano de fabricação (formato YYYY)
  cor: z.string().min(1).max(50).optional(), // Mínimo de 1 caractere e máximo de 50 caracteres
  categoria: z.string().min(1).max(50).optional(), // Mínimo de 1 caractere e máximo de 50 caracteres
});

router.patch('/:id', async (req, res) => {
    try {
        const carroInput = carroUpdateBodySchema.parse(req.body)
        const carroAtualizado = await carroService.putCarro(carroInput, req.params.id);
        res.status(200).json(carroAtualizado);
    } catch (error) {
        res.status(400).json({ error: error.format() });
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
