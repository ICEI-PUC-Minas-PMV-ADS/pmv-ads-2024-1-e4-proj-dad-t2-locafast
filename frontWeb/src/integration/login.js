import axios from 'axios';

export default async function login(event) {

    event.preventDefault();

    const formData = new FormData(event.target);

    let cpf = formData.get('cpf')
    let password = formData.get('password')

    await axios.post('http://localhost:3002/login', { cpf: cpf, senha: password })
        .then(response => {

            localStorage.setItem('token', response.data.acessToken.acessToken);
            console.log('Token:', response.data.acessToken.acessToken);

            alert("logado")
        })
        .catch(error => {
            console.error('Erro ao enviar solicitação de login:', error);
        });

}
