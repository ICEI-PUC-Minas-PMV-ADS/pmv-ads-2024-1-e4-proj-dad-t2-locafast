import React, { useState } from 'react';

import Table from '../components/table';

import "../pages/style/container.css"


const Contrato = () => {
    const [data, setData] = useState([
        { id: 1, clienteId: 'João Silva', carroId: '3', reservaId: '3', colaboradorId: 'colaboradorExample', dataRetirada: '22/04/2024', dataDevolucao: '27/05/2024', status: 'Ativo' },
        { id: 2, clienteId: 'Maria Souza', carroId: '2', reservaId: '2', colaboradorId: 'colaboradorExample', dataRetirada: '21/04/2024', dataDevolucao: '13/05/2024', status: 'Ativo' },
        { id: 3, clienteId: 'José Santos', carroId: '1', reservaId: '1', colaboradorId: 'colaboradorExample', dataRetirada: '17/03/2024', dataDevolucao: '17/04/2024', status: 'Finalizado' },
    ]);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const handleEdit = (id) => {
        // Implementar lógica de edição
        console.log(`Editar contrato com id ${id}`);
    };

    return (
        <div className='container'>
            <div className='itens-container'>
                <Table
                    goto={'/app/criarcontrato'}
                    btnTxt={'Abrir Contrato'}
                    title={'Contratos'}
                    trs={[
                        'Id',
                        'Cliente',
                        'Carro ID',
                        'Reserva ID',
                        'Colaborador ID',
                        'Data de Retirada',
                        'Data de Devolução',
                        'Status',
                        'Ações'
                    ]}
                    data={data}
                />
            </div>
        </div>
    );
};

export default Contrato;
