import React, { useState } from 'react';

import "../pages/style/cadastroCarro.css";


function cadastroCarro() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        // Adicione aqui a lógica de login
    };

    return (
        <div>
            <header className="header">
                <h1>LocaFast</h1>
            </header>
            <br />
            <div className='body'>
                <h2 className='titulo'>Cadastro de carros</h2>
                <h3>Marca</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe a marca"
                />
                <br />
                <h3>Modelo</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe o modelo"
                />
                <br />
                <h3>Número da placa</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe o número da placa"
                />
                <br />
                <h3>Número do chassi</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe o número do chassi"
                />
                <br />
                <h3>Ano de fabricação</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe o ano de fabricação"
                />
                <br />
                <h3>Cor</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe a cor do veículo"
                />
                <br />
                <h3>Categoria do véiculo</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe a categoria do veículo"
                />
                <br /><br /><br /><br />
                <button className="botao" onClick>  Cadastrar carro</button>
                <p>{message}</p>
            </div>
            <br></br>
            <br />
            <br />
            <br />
            <br />
            <div className="footer">
                <p>&copy; 2024 - LocaFast Aluguel de Carros</p>
            </div>
        </div>
    );
}

export default cadastroCarro;
