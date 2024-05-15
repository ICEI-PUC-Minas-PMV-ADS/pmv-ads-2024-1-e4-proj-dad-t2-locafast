import axios from 'axios';

export default async function login({ cpf, senha }) {
    try {

        const response = await axios.post('http://localhost:3000/login', {
            cpf: cpf,
            senha: senha
        }, {
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            }
        });
        
        if (response.status === 200) {
            const accessToken  = response.data;
            //console.log(accessToken.acessToken.acessToken);// resposta
            localStorage.setItem('token', accessToken.acessToken.acessToken);
            console.log('Token:', accessToken.acessToken.acessToken);
            //alert("Logado com sucesso!");
            return true; // Indicando que o login foi bem-sucedido
        } else {
            console.error('Erro ao fazer login:', response.statusText);
            alert("Erro na senha ou cpf. Por favor, tente novamente.");
            return false; // Indicando que ocorreu um erro durante o login
        }
    } catch (error) {
        console.error('Erro ao enviar solicitação de login:', error);
        alert("Erro ao fazer login. Por favor, tente novamente.");
        return false; // Indicando que ocorreu um erro durante o login
    }
}
