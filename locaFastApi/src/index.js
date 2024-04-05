const express = require("express")
const mongoose = require("mongoose")

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger-config')

const checkToken = require('./config/auth/checkToken')

const app = express()

// variaveis de ambiente
require('dotenv').config()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// Rotas API
const clienteRoutes = require('./routes/clienteRoutes');
const carroRoutes = require('./routes/carroRoutes');
const reservaRoutes = require('./routes/reservaRoutes');
const colaboradorRoutes = require('./routes/colaboradorRoutes');
const loginRoutes = require('./routes/loginRoutes');

app.use('/login', loginRoutes);

//rotas que não precisam de autenticação favor inserir acima do app.use(checkToken)
app.use(checkToken)

app.use('/cliente', clienteRoutes);
app.use('/carro', carroRoutes);
app.use('/login', loginRoutes)
app.use('/reserva', reservaRoutes);
app.use('/colaborador', colaboradorRoutes);

// Rota principal
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//conexão com o banco
mongoose.connect(
    process.env.STRING_CONEXAO
).then(() => {
    console.log("MongoDB conectado!")
    app.listen(3001)
})
    .catch((err) => console.log(err))

app.listen(3000)
