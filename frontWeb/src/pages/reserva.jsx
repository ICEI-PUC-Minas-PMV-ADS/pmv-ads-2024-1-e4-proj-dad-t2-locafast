import React, { useState } from 'react';

import { Form } from 'react-router-dom';

import "../pages/style/reserva.css";


const Reserva = () => {
    const [data, setData] = useState([
        { id: 1, clienteId: '123', dateRetirada: '2024-05-10', dateDevolucao: '2024-05-15', agenciaRetirada: 'Ag. Matriz', agenciaDevolucao: 'Ag. Filial Cardec', categoriaVeiculo: 'A', valorDiaria: '150', colaboradorId: '456' },
        { id: 2, clienteId: '456', dateRetirada: '2024-05-12', dateDevolucao: '2024-05-18', agenciaRetirada: 'Ag. Filial Cardec', agenciaDevolucao: 'Ag. Matriz', categoriaVeiculo: 'B', valorDiaria: '180', colaboradorId: '789' },
    ]);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const handleEdit = (id) => {
        // Implementar lógica de edição
        console.log(`Editar reserva com id ${id}`);
    };

    const cadastroReserva = () => {
        // Obtendo o history do router
        const history = router.history;
        // Navegando para a rota de cadastro de reserva
        history.push('/cadastroreserva');
    }

    return (
        <div>

            <header className="header">
                <h1>LocaFast</h1>
                <div className='navigator'>
                <Form action='/carro'>
                    <button className="header-button">Carros</button>
                </Form>
                <Form action='/cliente'>
                    <button className="header-button">Clientes</button>
                </Form>
                <Form action='/reserva'>
                    <button className="header-button">Reservas</button>
                </Form>
                <Form action='/contrato'>
                    <button className="header-button">Contratos</button>
                </Form>
                </div>
            </header>

            <div className='titulo'>
                <h1>Reservas Cadastradas</h1>
            </div>

            <br /><br />

            <div>
                <Form action='/cadastroreserva'>
                    <button className='cadastro' onClick>Cadastrar reserva</button>
                </Form>
            </div>

            <br /><br />

            <div className='tabela'>
                <table>
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Data de Retirada</th>
                            <th>Data de Devolução</th>
                            <th>Agência de Retirada</th>
                            <th>Agência de Devolução</th>
                            <th>Categoria do Veículo</th>
                            <th>Valor Diária (R$)</th>
                            <th>Colaborador</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.clienteId}</td>
                                <td>{item.dateRetirada}</td>
                                <td>{item.dateDevolucao}</td>
                                <td>{item.agenciaRetirada}</td>
                                <td>{item.agenciaDevolucao}</td>
                                <td>{item.categoriaVeiculo}</td>
                                <td>{item.valorDiaria}</td>
                                <td>{item.colaboradorId}</td>
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


export default Reserva;

