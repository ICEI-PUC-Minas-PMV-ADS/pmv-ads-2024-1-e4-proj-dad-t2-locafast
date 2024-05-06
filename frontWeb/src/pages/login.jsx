import React from 'react';
import { Form } from "react-router-dom";
<link rel="stylesheet" href="./pages/style/login.css" />

const initialState = {
    user: {cpf: '', senha: '', message: ''}
}

function Login() {

    const state = { ...initialState }

    const handleLogin = () => {
        // Adicione aqui a lógica de login
    };

    return (
        <div>
            <header className="header">
                <h1>LocaFast</h1>
            </header>
            <br /><br />
            <div className='body'>
                <h2 className='titulo'>Acesse sua conta</h2>
                <br />
                <input className='login'
                    type="text"
                    placeholder="Usuário"
                    value={state.cpf}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br /><br /><br />
                <input className='login'
                    type="password"
                    placeholder="Senha"
                    value={state.senha}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br /><br /><br />
                <a href="">Esqueci minha senha</a>
                <br /><br /><br />
                <button className="botao" onClick={handleLogin}>  Entrar</button>
                <p>{state.message}</p>
                <br /><br />
                <Form action='cadastro'>
                    <button className="botao" onClick>Criar conta</button>
                </Form>
            </div>
            <div class="footer">
                <p>&copy; 2024 - LocaFast Aluguel de Carros</p>
            </div>
        </div>
    );
}

export default Login;
