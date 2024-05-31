import React, { useState } from 'react';
import { Form } from "react-router-dom";

import FormCadastro from '../components/formCadastro';
import ButtonCadastro from '../components/buttonCadastro';

import "../pages/style/cadastro.css";
import axios from '../config/axiosConfig'


function Cadastro() {

    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        rg: '',
        telefone: '',
        generoo: '',
        dataNascimento: '',
        senha: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/reserva', {
                clienteId: formData.clienteId,
                agenciaRetirada: formData.agenciaRetirada,
                agenciaDevolucao: formData.agenciaDevolucao,
                categoriaVeiculo: formData.categoriaVeiculo,
                valorDiaria: formData.valorDiaria,
                dateRetirada: formData.dateRetirada,
                dateDevolucao: formData.dateDevolucao
            });
            alert('Reserva criada com sucesso:');
        } catch (error) {
            console.error('Erro ao criar reserva:', error);
        }

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
