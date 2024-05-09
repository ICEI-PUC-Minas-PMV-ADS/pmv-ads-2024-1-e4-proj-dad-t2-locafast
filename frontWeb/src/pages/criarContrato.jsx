import React, { useState } from 'react';
import "../pages/style/criarContrato.css";

function criarContrato() {

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
                <h2 className='titulo'>Criar contrato</h2>

                <h3>ID do cliente</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe o ID do cliente"
                />
                <br />
                <h3>ID do carro</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe o ID do carro"
                />
                <br />
                <h3>ID da reserva</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe o ID da reserva"
                />
                <br />
                <h3>ID do colaborador</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe o ID do colaborador"
                />
                <br />
                <h3>Data de retirada</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe a data de retirada"
                />
                <br />
                <h3>Data de devolução</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe a data de devolução"
                />
                <h3>Status</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe o status do contrato"
                />
                <br /><br /><br /><br />
                <button className="botao" onClick>  Criar contrato</button>
                <p>{message}</p>
            </div>
            <br /><br />
            <div className="footer">
                <p>&copy; 2024 - LocaFast Aluguel de Carros</p>
            </div>
        </div>
    );
}

export default criarContrato;