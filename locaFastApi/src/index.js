const express = require("express")
const mongoose = require("mongoose")

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger-config')

const app = express()

//variaveis de ambiente
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
const colaboradorRoutes = require('./routes/colaboradorRoutes')
app.use('/cliente', clienteRoutes);
app.use('/carro', carroRoutes);
app.use('/colaborador', colaboradorRoutes)
app.use('login', loginRoutes)

// Rota principal
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//conexão com o <banco></banco>
mongoose.connect(
    process.env.STRING_CONEXAO
).then(() => {
    console.log("MongoDB conectado!")
    app.listen(3001)
})
.catch((err) => console.log(err))

app.listen(3000)