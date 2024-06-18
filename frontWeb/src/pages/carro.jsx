/*import React, { useState } from 'react';

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
*/
/*
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCarros, addCarro, updateCarro } from './dadosCarro'; // Atualize o caminho conforme necessário
import Table from '../components/table'; 

const Carro = () => {
  const [carrosData, setCarrosData] = useState([]);

  useEffect(() => {
    loadCarros();
  }, []);

  const loadCarros = () => {
    // Carrega os carros usando a função exportada
    const carros = getCarros();
    setCarrosData(carros);
  };

  const handleDelete = (id) => {
    // Implemente a lógica de exclusão usando a função exportada ou localmente aqui
    console.log(`Excluir carro com id ${id}`);
  };

  const renderCarros = () => {
    return carrosData.map((carro) => (
      <div key={carro.id} className="carro-item">
        <div>Marca: {carro.marca}</div>
        <div>Modelo: {carro.modelo}</div>
        <div>Placa: {carro.placa}</div>
        <div>Chassi: {carro.chassi}</div>
        <div>Ano de Fabricação: {carro.anoFabricacao}</div>
        <div>Cor: {carro.cor}</div>
        <div>Categoria: {carro.categoria}</div>
        <div>
          <button onClick={() => handleDelete(carro.id)}>Excluir</button>
          <Link to={`/editarCarro/${carro.id}`}>Editar</Link>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <h2>Carros</h2>
      <Link to="/app/cadastrocarro">Cadastrar Carro</Link>
      <div className="carros-list">
        {renderCarros()}
      </div>
    </div>
  );
};

export default Carro;
*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from '../components/table'; 
import "../pages/style/container.css";
import { getCarros } from './dadosCarro'; // Atualize o caminho conforme necessário

const Carro = () => {
  const [carrosData, setCarrosData] = useState([]);

  useEffect(() => {
    loadCarros();
  }, []);

  const loadCarros = () => {
    const carros = getCarros();
    setCarrosData(carros);
  };

  const handleDelete = (id) => {
    setCarrosData(carrosData.filter(item => item.id !== id));
  };

  const handleEdit = (id) => {
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
          data={carrosData.map(carro => ({
            id: carro.id,
            marca: carro.marca,
            modelo: carro.modelo,
            placa: carro.placa,
            chassi: carro.chassi,
            fabricacaoAno: carro.anoFabricacao,
            cor: carro.cor,
            categoria: carro.categoria,
            acoes: (
              <>
                <button onClick={() => handleDelete(carro.id)}>Excluir</button>
                <Link to={`/app/editarCarro/${carro.id}`}>Editar</Link>
              </>
            )
          }))}
        />
      </div>
    </div>
  );
};

export default Carro;
