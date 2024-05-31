import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";

import "../pages/style/cadastroReserva.css";
import FormCadastro from '../components/formCadastro';
import ButtonCadastro from '../components/buttonCadastro';
import axios from '../config/axiosConfig';
import Calendar from '../components/calendar';

function CadastroReserva() {
    const [formData, setFormData] = useState({
        clienteId: '',
        agenciaRetirada: '',
        agenciaDevolucao: '',
        categoriaVeiculo: '',
        valorDiaria: '',
        dateRetirada: '',
        dateDevolucao: '',
        nomeRequisitante: '',
        telefoneRequisitante: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

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
            alert('Reserva criada com sucesso!');
        } catch (error) {
            console.error('Erro ao criar reserva:', error);
        }
    };

    return (
        <div className='reserva-container'>
            <div className='calendars-container'>
                <div className='calendar-single'>
                    <Calendar title={'Retirada'} />
                </div>
                <div className='calendar-single'>
                    <Calendar title={'Devolução'} />
                </div>
            </div>
            <div className='reserva-form-container'>
                <div id='header-form'>
                    <h2>Cadastro de Reserva</h2>
                </div>
                <div className='top-form'>
                    <FormCadastro
                        placeholders={[
                            'Nome Requisitante',
                            'Telefone Requisitante',
                        ]}
                        values={formData}
                        handleChange={handleChange}
                    />

                </div>
                <nav className='nav-bar'>
                    <ul className='nav-links'>
                        <li><Link to={'reserva-passo-1'}>{'1. DADOS E LOCAL'}</Link></li>
                        <li><Link to={'reserva-passo-2'}>{'2. GRUPO E PREÇO'}</Link></li>
                        <li><Link to={'reserva-passo-3'}>{'3. DETALHES E CONFIRMAÇÃO'}</Link></li>
                    </ul>
                </nav>
                <div className='steps-container'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default CadastroReserva;
