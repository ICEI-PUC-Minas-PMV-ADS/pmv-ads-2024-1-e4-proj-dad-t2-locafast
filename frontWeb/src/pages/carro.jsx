import React, { useState } from 'react';

import { Form } from 'react-router-dom';



const Table = () => {
    const [data, setData] = useState([
        { id: 1, marca: 'Jeep', modelo: 'Jeep Renegade', placaNumero: 'QOZ-1774', chassiNumero: '9BW231GW10A846776', fabricacaoAno: 2022, cor: 'Branco', veiculoCategoria: "SUV" },
        { id: 2, marca: 'Honda', modelo: 'Honda Civic', placaNumero: 'CMG-3164', chassiNumero: '9AS231GW10A846788', fabricacaoAno: 2021, cor: 'Preto', veiculoCategoria: "Sedã" },
        { id: 3, marca: 'Fiat', modelo: 'Fiat Mobi', placaNumero: 'FRD-4486', chassiNumero: '9BW231GW10A821456', fabricacaoAno: 2020, cor: 'Vermelho', veiculoCategoria: "Subcompacto" },
        { id: 4, marca: 'Hyundai', modelo: 'Hyundai HB20', placaNumero: 'HMG-0248', chassiNumero: '9BW231GW10A89785', fabricacaoAno: 2021, cor: 'Branco', veiculoCategoria: "Subcompacto" },
        { id: 5, marca: 'Fiat', modelo: 'Fiat Cronos', placaNumero: 'JSQ-7436', chassiNumero: '9BW231GW10A849963', fabricacaoAno: 2019, cor: 'Prata', veiculoCategoria: "Sedã" },
        { id: 6, marca: 'Volkswagen', modelo: 'Volkswagen Polo', placaNumero: 'JJK-1960', chassiNumero: '9NF231GW10A846902', fabricacaoAno: 2024, cor: 'Azul', veiculoCategoria: "Subcompacto" },
    ]);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const handleEdit = (id) => {
        // Implementar lógica de edição
        console.log(`Editar item com id ${id}`);
    };

    return (

        <div>
            <div className='titulo'>
                <h1>Carros Cadastrados</h1>
            </div>

            <br /><br />

            <div>
                <Form action='/cadastrocarro'>
                    <button className='cadastro' onClick>Cadastrar carro</button>
                </Form>
            </div>

            <br /><br />

            <div className='tabela'>
                <table>
                    <thead>
                        <tr>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Número de placa</th>
                            <th>Número do chassi</th>
                            <th>Ano de fabricação</th>
                            <th>Cor</th>
                            <th>Categoria do veículo</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.marca}</td>
                                <td>{item.modelo}</td>
                                <td>{item.placaNumero}</td>
                                <td>{item.chassiNumero}</td>
                                <td>{item.fabricacaoAno}</td>
                                <td>{item.cor}</td>
                                <td>{item.veiculoCategoria}</td>
                                <td>
                                    <button className='detalhes' onClick={() => handleDetails(item.id)}>Detalhes</button>
                                    <button className='editar' onClick={() => handleEdit(item.id)}>Editar</button>
                                    <button className='apagar' onClick={() => handleDelete(item.id)}>Apagar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

function Carro() {
    return (
        <div>
            <header className="header">
                <h1>LocaFast</h1>

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

            </header>
            <div className='tabela'>
                <Table /> {/* Aqui está usando o componente Table */}
            </div>
            <div className="footer">
                <p>&copy; 2024 - LocaFast Aluguel de Carros</p>
            </div>
        </div>
    );
}

export default Carro;
