import React, { useState } from 'react';

import "../pages/style/cadastroReserva.css";
import FormCadastro from '../components/formCadastro';
import ButtonCadastro from '../components/buttonCadastro';


function cadastroReserva() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        // Adicione aqui a lógica de login
    };

    return (
        <div className='reserva-container'>
            <form method='POST'>
                <div id='header-form'>
                    <h2>Cadastro de Reserva</h2>
                </div>
                <FormCadastro placeholder={[
                    'Código de Cliente',
                    'Data de Retirada',
                    'Data de Devolução',
                    'Agência de Retirada',
                    'Agência de devolução',
                    'Categoria do veículo',
                    'Valor da Diária']}
                />
                <div id='button-container'>
                    <ButtonCadastro text={"Cadastrar"} width={'65%'} />
                </div>
            </form>
        </div>
    );
}

export default cadastroReserva;
