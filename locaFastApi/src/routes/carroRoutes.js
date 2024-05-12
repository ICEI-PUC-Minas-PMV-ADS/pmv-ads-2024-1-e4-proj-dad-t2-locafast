const express = require('express');
const z = require('zod');
const router = express.Router();

// Importar o serviço de carro
const CarroService = require('../services/carroService');
const carroService = new CarroService();

const carroCreateBodySchema = z.object({
  placa: z.string().regex(/^([A-Z]{3}\d{1}[A-Z0-9]{1}\d{2})$/, { message: "Placa inválida." }),
  chassi: z.string().regex(/^[A-HJ-NPR-Z0-9]{17}$/, { message: "Chassi inválido." }),
  modelo: z.string().min(1, { message: "Modelo é obrigatório e deve ter pelo menos 1 caractere." }).max(255),
  marca: z.string().min(1, { message: "Marca é obrigatória e deve ter pelo menos 1 caractere." }).max(255),
  anoFabricacao: z.number().int().min(1900, { message: "Ano de fabricação deve ser um número inteiro válido a partir de 1900." }),
  cor: z.string().min(1, { message: "Cor é obrigatória e deve ter pelo menos 1 caractere." }).max(50),
  categoria: z.string().min(1, { message: "Categoria é obrigatória e deve ter pelo menos 1 caractere." }).max(50),
});

// Rota para criar um novo carro
router.post('/', async (req, res) => {
  try {
    const carroInput = carroCreateBodySchema.parse(req.body);
    const novoCarro = await carroService.postCarro(carroInput);
    res.status(201).json(novoCarro);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors });
    } else {
      res.status(500).json({ message: "Erro interno no servidor." });
    }
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
router.patch('/:id', async (req, res) => {
  try {
    const carroInput = carroCreateBodySchema.partial().parse(req.body);
    const carroAtualizado = await carroService.putCarro(carroInput, req.params.id);
    if (!carroAtualizado) {
      res.status(404).json({ message: "Carro não encontrado." });
    } else {
      res.status(200).json(carroAtualizado);
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors });
    } else {
      res.status(500).json({ message: "Erro interno no servidor." });
    }
  }
});

// Rota para excluir um carro pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const carroExcluido = await carroService.deleteCarro(req.params.id);
    if (!carroExcluido) {
      res.status(404).json({ message: "Carro não encontrado." });
    } else {
      res.status(200).json({ message: "Carro removido com sucesso." });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro interno no servidor." });
  }
});

module.exports = router;
