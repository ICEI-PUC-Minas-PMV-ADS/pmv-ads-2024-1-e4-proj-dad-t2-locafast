/*import React, { useState } from 'react';

import FormCadastro from '../components/formCadastro';
import ButtonCadastro from '../components/buttonCadastro';

import "../pages/style/cadastroCarro.css";


function cadastroCarro() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        // Adicione aqui a lógica de login
    };

    return (
        <div className='cliente-container'>
            <form method='POST'>
                <div id='header-form'>
                    <h2>Cadastro de Carros</h2>
                </div>
                <FormCadastro placeholder={[
                    'Placa',
                    'Chassi',
                    'Modelo',
                    'Marca',
                    'Ano de Fabricacao',
                    'Categoria do veículo',
                    'Cor',
                    'categoria',
                ]}
                />
                <div id='button-container'>
                    <ButtonCadastro text={"Cadastrar"} width={'65%'} />
                </div>
            </form>
        </div>
    );
}

export default cadastroCarro;
*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate substitui useHistory

const CadastroCarro = () => {
  const navigate = useNavigate(); // useNavigate substitui useHistory
  const [placa, setPlaca] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleCadastroCarro = (e) => {
    e.preventDefault();
    // Implemente a lógica para cadastrar um novo carro
    console.log('Cadastrar carro com os seguintes dados:', { placa, marca, modelo, ano, cor, categoria });
    // Aqui você pode chamar uma função de serviço ou API para cadastrar o carro

    // Após cadastrar, redireciona para a página de listagem de carros
    navigate('/app/carro');
  };

  return (
    <div className="container">
      <h2>Cadastro de Carro</h2>
      <form onSubmit={handleCadastroCarro}>
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroCarro;
