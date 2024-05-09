import axios from "axios";

export default class Usuario {

    async UserRegister(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        let dataObj = {
            nome: formData.get('nome'),
            cpf: formData.get('cpf'),
            rg: formData.get('rg'),
            telefone: formData.get('telefone'),
            dataNascimento: formData.get('dataNascimento'),
            senha: formData.get('senha'),
            genero: formData.get('genero')
        }

        await axios.post('http://localhost:3002/colaborador', dataObj)
            .then(response => {

                alert("cadastrado")

            })
            .catch(error => {
                console.log(error.message)
            });

    }

    async getMyUserById() {
        const token = localStorage.getItem('token');
        let userId = null;
        if (token) {
            try {
                const decodedToken = jwt.verify(token, 'minha chave');
                userId = decodedToken.id;
            } catch (error) {
                console.error("Erro ao decodificar o token:", error);
            }
        } else {
            console.log("Token não encontrado.");
        }

        try {
            const response = await axios.get(`http://localhost:3002/colaborador/${userId}`);
            return response.data.id;
        } catch (error) {
            console.log(error.message);
        }
    }
}

