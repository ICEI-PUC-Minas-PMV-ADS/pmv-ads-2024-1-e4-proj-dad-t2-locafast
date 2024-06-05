import React, { useState } from 'react';
import { Form } from "react-router-dom";

import FormCadastro from '../components/formUser';
import ButtonCadastro from '../components/buttonCadastro';

import "../pages/style/cadastro.css";



function Cadastro() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className='userSign'>
            <form method='POST'>
                <div id='header-form'>
                    <h2>Cadastro de Usuário</h2>
                </div>
                <FormCadastro id={"top"} placeholder={['Nome']} />
                <div id='middle'>
                    <FormCadastro id={"middle-left"} placeholder={['CPF', 'RG', 'Telefone']} />
                    <FormCadastro id={"middle-right"} placeholder={['Senha']}>
                        
                        <input id='date' type='date'/>

                        <select>
                            <option>Masculino</option>
                            <option>Feminino</option>
                        </select>
                    </FormCadastro>
                </div>
                <div id='button-container'>
                    <ButtonCadastro text={"Cadastrar"} width={'65%'}/>
                </div>
            </form>
        </div>
    );
}

export default Cadastro;
