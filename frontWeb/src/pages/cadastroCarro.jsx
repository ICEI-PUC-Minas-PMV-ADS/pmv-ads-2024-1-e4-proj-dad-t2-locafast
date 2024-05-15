import React, { useState } from 'react';

import FormCadastro from '../components/formCadastro';
import ButtonCadastro from '../components/buttonCadastro';

import "../pages/style/cadastroCarro.css";


function cadastroCarro() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        // Adicione aqui a lógica de login
    };

    return (
        <div className='cliente-container'>
            <form method='POST'>
                <div id='header-form'>
                    <h2>Cadastro de Carros</h2>
                </div>
                <FormCadastro placeholder={[
                    'Placa',
                    'Chassi',
                    'Modelo',
                    'Marca',
                    'Ano de Fabricacao',
                    'Categoria do veículo',
                    'Cor',
                    'categoria',
                ]}
                />
                <div id='button-container'>
                    <ButtonCadastro text={"Cadastrar"} width={'65%'} />
                </div>
            </form>
        </div>
    );
}

export default cadastroCarro;
