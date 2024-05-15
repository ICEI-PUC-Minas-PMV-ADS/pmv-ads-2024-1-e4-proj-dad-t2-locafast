import React, { useState } from 'react';

import FormCadastro from '../components/formCadastro';
import ButtonCadastro from '../components/buttonCadastro';

import "../pages/style/criarContrato.css";

function criarContrato() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className='contrato-container'>
            <form method='POST'>
                <div id='header-form'>
                    <h2>Abertura de contrato</h2>
                </div>
                <FormCadastro placeholder={[
                    'Reserva',
                    'Placa',
                    'Data de Retirada',
                    'Data de Devolução',
                    'Agência de Retirada',
                    'Agência de devolução'
                ]}
                />
                <div id='button-container'>
                    <ButtonCadastro text={"Abrir Contrato"} width={'65%'} />
                </div>
            </form>
        </div>
    );
}

export default criarContrato;
