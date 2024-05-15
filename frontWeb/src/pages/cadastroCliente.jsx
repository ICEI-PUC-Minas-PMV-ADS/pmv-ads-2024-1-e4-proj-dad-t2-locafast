import React, { useState } from 'react';

import FormCadastro from '../components/formCadastro';
import ButtonCadastro from '../components/buttonCadastro';

import "../pages/style/cadastroCliente.css";


function cadastroCliente() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className='cliente-container'>
            <form method='POST'>
                <div id='header-form'>
                    <h2>Cadastro de Cliente</h2>
                </div>
                <FormCadastro placeholder={[
                    'Nome',
                    'CPF',
                    'RG',
                    'Telefone',
                    'Email',
                    'Data Nascimento',
                    'Gênero',
                ]}
                />
                <div id='button-container'>
                    <ButtonCadastro text={"Cadastrar"} width={'65%'} />
                </div>
            </form>
        </div>
    );
}

export default cadastroCliente;
