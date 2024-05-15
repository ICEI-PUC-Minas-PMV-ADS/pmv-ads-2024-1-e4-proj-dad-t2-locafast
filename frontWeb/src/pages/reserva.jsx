import React, { useState, useEffect } from 'react';

import Table from '../components/table';

import "../pages/style/container.css"
import { Outlet } from 'react-router-dom';

const Reserva = () => {
    const [data, setData] = useState([
        { id: 1, clienteId: '123', dateRetirada: '2024-05-10', dateDevolucao: '2024-05-15', agenciaRetirada: 'Ag. Matriz', agenciaDevolucao: 'Ag. Filial Cardec', categoriaVeiculo: 'A', valorDiaria: '150', colaboradorId: '456' },
        { id: 2, clienteId: '456', dateRetirada: '2024-05-12', dateDevolucao: '2024-05-18', agenciaRetirada: 'Ag. Filial Cardec', agenciaDevolucao: 'Ag. Matriz', categoriaVeiculo: 'B', valorDiaria: '180', colaboradorId: '789' },
        { id: 3, clienteId: '123', dateRetirada: '2024-05-10', dateDevolucao: '2024-05-15', agenciaRetirada: 'Ag. Matriz', agenciaDevolucao: 'Ag. Filial Cardec', categoriaVeiculo: 'A', valorDiaria: '150', colaboradorId: '456' },
        { id: 4, clienteId: '456', dateRetirada: '2024-05-12', dateDevolucao: '2024-05-18', agenciaRetirada: 'Ag. Filial Cardec', agenciaDevolucao: 'Ag. Matriz', categoriaVeiculo: 'B', valorDiaria: '180', colaboradorId: '789' },
        { id: 5, clienteId: '123', dateRetirada: '2024-05-10', dateDevolucao: '2024-05-15', agenciaRetirada: 'Ag. Matriz', agenciaDevolucao: 'Ag. Filial Cardec', categoriaVeiculo: 'A', valorDiaria: '150', colaboradorId: '456' },
        { id: 6, clienteId: '456', dateRetirada: '2024-05-12', dateDevolucao: '2024-05-18', agenciaRetirada: 'Ag. Filial Cardec', agenciaDevolucao: 'Ag. Matriz', categoriaVeiculo: 'B', valorDiaria: '180', colaboradorId: '789' },
        { id: 7, clienteId: '123', dateRetirada: '2024-05-10', dateDevolucao: '2024-05-15', agenciaRetirada: 'Ag. Matriz', agenciaDevolucao: 'Ag. Filial Cardec', categoriaVeiculo: 'A', valorDiaria: '150', colaboradorId: '456' },
        { id: 8, clienteId: '456', dateRetirada: '2024-05-12', dateDevolucao: '2024-05-18', agenciaRetirada: 'Ag. Filial Cardec', agenciaDevolucao: 'Ag. Matriz', categoriaVeiculo: 'B', valorDiaria: '180', colaboradorId: '789' },
    ]);

    const handleEdit = (id) => {
        console.log(`Editar reserva com id ${id}`);
    };

    const cadastroReserva = () => {
        // Implemente a lógica para navegar para a rota de cadastro de reserva
    };

    return (
        <div className='container'>
            <div className='itens-container'>
                <Table 
                    goto={'/app/cadastroreserva'}
                    btnTxt={'Criar Reserva'}
                    title={'Reservas'}
                    trs={[
                        'Id',
                        'Cliente',
                        'Retirada',
                        'Devolução',
                        'Agência de Retirada',
                        'Agência de Devolução',
                        'Categoria do Veículo',
                        'Diária (R$)',
                        'Colaborador',
                        'Ações'
                    ]}
                    data={data}
                />
            </div>
        </div>
    );
};

export default Reserva;
