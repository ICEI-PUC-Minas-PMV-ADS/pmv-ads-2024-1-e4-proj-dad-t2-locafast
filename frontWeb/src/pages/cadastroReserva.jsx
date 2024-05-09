import React, { useState } from 'react';

function cadastroReserva() {

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
                <h2 className='titulo'>Cadastro de reserva</h2>

                <h3>ID do cliente</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe o ID do cliente"
                />
                <br />
                <h3>Data de retirada</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe a data de retirada do veículo"
                />
                <br />
                <h3>Data de devolução</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe a data de devolução do veículo"
                />
                <br />
                <h3>Agência de retirada</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe a agência de retirada do veículo"
                />
                <br />
                <h3>Agência de devolução</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe a agência de devolução do veículo"
                />
                <br />
                <h3>Categoria do véiculo</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe a categoria do veículo"
                />
                <h3>Valor da diária</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe o valor da diária do veículo"
                />
                <h3>ID do colaborador</h3>
                <input className='login'
                    type="text"
                    placeholder="Informe o ID do colaborador"
                />
                <br /><br /><br /><br />
                <button className="botao" onClick>  Cadastrar reserva</button>
                <p>{message}</p>
            </div>
            <br /><br />
            <div className="footer">
                <p>&copy; 2024 - LocaFast Aluguel de Carros</p>
            </div>
        </div>
    );
}

export default cadastroReserva;
