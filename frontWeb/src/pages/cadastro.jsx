import React, { useState } from 'react';
<link rel="stylesheet" href="./pages/style/cadastro.css" />


function Cadastro() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div>
            <header className="header">
                <h1>LocaFast</h1>
            </header>
            <br /><br />
            <div className='body'>
                <h2 className='titulo'>Crie sua conta</h2>
                <br />
                <div className='lado'>
                    <input className='login'
                        type="text"
                        placeholder="Usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input className='login'
                        type="text"
                        placeholder="Nome completo"
                    />
                </div>
                <br /><br /><br />
                <div className='lado2'>
                    <input className='login'
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input className='login'
                        type="text"
                        placeholder="CPF"
                    />
                </div>
                <br /><br /><br />
                <div className='lado'>
                    <input className='login'
                        type="text"
                        placeholder="RG"
                    />
                    <input className='login'
                        type="text"
                        placeholder="Telefone"
                    />
                </div>
                <br /><br /><br />
                <div className='lado2'>
                    <input className='login'
                        type="text"
                        placeholder="Data de nascimento"
                    />
                    <input className='login'
                        type="text"
                        placeholder="Gênero"
                    />
                </div>
                <br /><br /><br /><br />
                <button className="botao" onClick>  Criar Conta</button>

                <div class="footer">
                    <p>&copy; 2024 - LocaFast Aluguel de Carros</p>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;