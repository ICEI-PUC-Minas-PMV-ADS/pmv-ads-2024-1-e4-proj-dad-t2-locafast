import React, { useState } from 'react';

import Table from '../components/table';

import "../pages/style/container.css"

const Carro = () => {
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
        <div className='container'>
            <div className='itens-container'>
                <Table 
                    goto={'/app/cadastrocarro'}
                    btnTxt={'Cadastrar Carro'}
                    title={'Carros'}
                    trs={[
                        'Id',
                        'Marca',
                        'Modelo',
                        'Placa',
                        'Chassi',
                        'Ano Fabricação',
                        'Cor',
                        'Categoria',
                        'Ações'
                    ]}
                    data={data}
                />
            </div>
        </div>
    )
}

export default Carro;
