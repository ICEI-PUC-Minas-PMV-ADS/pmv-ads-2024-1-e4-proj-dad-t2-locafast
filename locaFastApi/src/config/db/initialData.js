const bcrypt = require("bcrypt")
const Colaborador = require("../../models/Colaborador")

async function createInitialData() {

    const existingAdmin = await Colaborador.findOne({ cpf: "99999999999" });

    if (existingAdmin) {
        return;
    }
    
    let password = await bcrypt.hash("admin123", 10)

    await Colaborador.create({
        nome: "Admin",
        cpf: "99999999999",
        rg: "99999999",
        telefone: "(31)999999999",
        dataNascimento: "09/09/9999",
        senha: password,
        genero: "Feminino"
    })

}

module.exports = createInitialData
