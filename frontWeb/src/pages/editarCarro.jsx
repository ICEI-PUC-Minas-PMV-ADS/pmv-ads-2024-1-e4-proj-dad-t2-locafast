import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const EditarCarro = () => {
  const { id } = useParams();
  const history = useHistory();

  const [placa, setPlaca] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    // Aqui você poderia carregar os dados do carro com o ID especificado para preencher os campos do formulário
    // Exemplo de como carregar dados fictícios para demonstração
    setPlaca('QOZ-1774');
    setMarca('Jeep');
    setModelo('Jeep Renegade');
    setAno('2022');
    setCor('Branco');
    setCategoria('SUV');
  }, [id]);

  const handleEditarCarro = () => {
    // Implemente a lógica para editar o carro com o ID específico
    console.log('Editar carro com ID', id, 'com os seguintes dados:', { placa, marca, modelo, ano, cor, categoria });
    // Aqui você pode chamar uma função de serviço ou API para editar o carro

    // Após editar, redireciona para a página de listagem de carros
    history.push('/carro');
  };

  return (
    <div className="container">
      <h2>Editar Carro</h2>
      <form onSubmit={handleEditarCarro}>
        <label>
          Placa:
          <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} />
        </label>
        <label>
          Marca:
          <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
        </label>
        <label>
          Modelo:
          <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
        </label>
        <label>
          Ano:
          <input type="text" value={ano} onChange={(e) => setAno(e.target.value)} />
        </label>
        <label>
          Cor:
          <input type="text" value={cor} onChange={(e) => setCor(e.target.value)} />
        </label>
        <label>
          Categoria:
          <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
        </label>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EditarCarro;
