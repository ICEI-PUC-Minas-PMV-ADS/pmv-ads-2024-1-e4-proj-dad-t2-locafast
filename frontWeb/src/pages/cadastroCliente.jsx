import React, { useState } from 'react';

import "../pages/style/cadastroCliente.css";


function cadastroCliente() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div>
            <header className="header">
                <h1>LocaFast</h1>
            </header>
            <br />
            <div className='body'>
                <h2 className='titulo'>Cadastro de clientes</h2>
                <h3>ID do Cliente</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe o id do cliente"
                />
                <br />
                <h3>Nome de cliente</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe o nome do cliente"
                />
                <br />
                <h3>CPF</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe o CPF do cliente"
                />
                <br />
                <h3>Telefone</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe o telefone do cliente"
                />
                <br />
                <h3>Email</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe o email do cliente"
                />
                <br />
                <h3>Data de nascimento</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe a data de nascimento do cliente"
                />
                <br />
                <h3>Gênero</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe o gênero do cliente"
                />
                <br /><br /><br /><br />
                <button className="botao" onClick>  Cadastrar cliente</button>
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

export default cadastroCliente;
