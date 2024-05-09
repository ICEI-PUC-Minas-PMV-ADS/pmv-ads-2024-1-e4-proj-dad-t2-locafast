import React, { useState } from 'react';
<link rel="stylesheet" href="./pages/style/contrato.css" />

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
        <div>
            <header className="header">
                <h1>LocaFast</h1>
                <button className="header-button">Carros</button>
                <button className="header-button">Clientes</button>
                <button className="header-button">Reservas</button>
                <button className="header-button">Contratos</button>
            </header>
            <div className='titulo'>
                <h1>Contratos Feitos</h1>
            </div>

            <br /><br />

            <div>
                <button className='cadastro' onClick>Criar contrato</button>
            </div>

            <br /><br />

            <div className='tabela'>
                <table>
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Carro</th>
                            <th>Reserva</th>
                            <th>Colaborador</th>
                            <th>Data de Retirada</th>
                            <th>Data de Devolução</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.clienteId}</td>
                                <td>{item.carroId}</td>
                                <td>{item.reservaId}</td>
                                <td>{item.colaboradorId}</td>
                                <td>{item.dataRetirada}</td>
                                <td>{item.dataDevolucao}</td>
                                <td>{item.status}</td>
                                <td>
                                    <button className='editar' onClick={() => handleEdit(item.id)}>Editar</button>
                                    <button className='apagar' onClick={() => handleDelete(item.id)}>Apagar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="footer">
                <p>&copy; 2024 - LocaFast Aluguel de Carros</p>
            </div>
        </div>
    );
};

export default Contrato;