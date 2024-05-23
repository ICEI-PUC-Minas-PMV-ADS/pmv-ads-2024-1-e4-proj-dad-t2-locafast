import React, { useState } from 'react';

import "../pages/style/cadastroReserva.css";
import FormCadastro from '../components/formCadastro';
import ButtonCadastro from '../components/buttonCadastro';
import axios from '../config/axiosConfig'


function cadastroReserva() {

    const [formData, setFormData] = useState({
        clienteId: '',
        agenciaRetirada: '',
        agenciaDevolucao: '',
        categoriaVeiculo: '',
        valorDiaria: '',
        dateRetirada: '',
        dateDevolucao: ''
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
            alert('Reserva criada com sucesso:');
        } catch (error) {
            console.error('Erro ao criar reserva:', error);
        }
    };

    return (
        <div className='reserva-container'>
            <form method='POST' onSubmit={handleSubmit}>
                <div id='header-form'>
                    <h2>Cadastro de Reserva</h2>
                </div>
                <FormCadastro placeholders={[
                    'clienteId',
                    'agenciaRetirada',
                    'agenciaDevolucao',
                    'categoriaVeiculo',
                    'valorDiaria'
                ]}
                values={formData}
                handleChange={{
                    clienteId: handleChange,
                    agenciaRetirada: handleChange,
                    agenciaDevolucao: handleChange,
                    categoriaVeiculo: handleChange,
                    valorDiaria: handleChange,
                    dateRetirada: handleChange,
                    dateDevolucao: handleChange
                }}
                >
                    <input 
                        type='date' 
                        id='dateRetirada'
                        value={formData.dateRetirada}
                        onChange={handleChange}
                    />
                    <input 
                        type='date' 
                        id='dateDevolucao'
                        value={formData.dateDevolucao}
                        onChange={handleChange}
                    />
                </FormCadastro>
                <div id='button-container'>
                    <ButtonCadastro text={"Cadastrar"} width={'65%'} />
                </div>
            </form>
        </div>
    );
}

export default cadastroReserva;
