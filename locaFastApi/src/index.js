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

//rotas Api
const clienteRoutes = require('./routes/clienteRoutes')
const colaboradorRoutes = require('./routes/colaboradorRoutes')
const loginRoutes = require('./routes/loginRoutes')
app.use('/cliente', clienteRoutes)
app.use('/colaborador', colaboradorRoutes)
app.use('login', loginRoutes)

//rota principal
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