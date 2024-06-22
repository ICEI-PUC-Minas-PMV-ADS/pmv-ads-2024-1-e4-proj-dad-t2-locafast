const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-config');
const createInitialData = require('./config/db/initialData');

// Variáveis de ambiente
require('dotenv').config();

const app = express();

// Configuração do CORS para permitir todas as origens e métodos necessários
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:8081',
  'http://localhost:3000',
  'https://amandapuceixo4-3gagyvgzh-amanda-britos-projects-5d771073.vercel.app'
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(
  express.urlencoded({
    extended: true
  })
);

createInitialData();

app.use(express.json());

// Rotas API
const clienteRoutes = require('./routes/clienteRoutes');
const carroRoutes = require('./routes/carroRoutes');
const reservaRoutes = require('./routes/reservaRoutes');
const colaboradorRoutes = require('./routes/colaboradorRoutes');
const loginRoutes = require('./routes/loginRoutes');
const contratoRoutes = require('./routes/contratoRoutes');

app.use('/login', loginRoutes);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Removido temporariamente o middleware de autenticação
// app.use(checkToken);

app.use('/cliente', clienteRoutes);
app.use('/carro', carroRoutes);
app.use('/reserva', reservaRoutes);
app.use('/colaborador', colaboradorRoutes);
app.use('/contrato', contratoRoutes);

// Conexão com o banco
mongoose.connect(
  process.env.STRING_CONEXAO
).then(() => {
  console.log("MongoDB conectado!");
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch((err) => console.log(err));