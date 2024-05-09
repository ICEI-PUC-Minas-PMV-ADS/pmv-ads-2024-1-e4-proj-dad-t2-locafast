import React, { useState } from 'react';
import '../pages/style/login.css';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        history.push('/cadastroReserva');
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br /><br /><br />
                <input className='login'
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br /><br /><br />
                <a href="">Esqueci minha senha</a>
                <br /><br /><br />
                <button className="botao" onClick={handleLogin}>  Entrar</button>
                <p>{message}</p>
                <br /><br />
                <button className="botao" onClick>Criar conta</button>
            </div>
            <div class="footer">
                <p>&copy; 2024 - LocaFast Aluguel de Carros</p>
            </div>
        </div>
    );
}

export default Login;