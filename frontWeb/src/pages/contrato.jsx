import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../config/axiosConfig';
import Table from '../components/table';
import "../pages/style/container.css";

const Contrato = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const fetchData = async () => {
        try {
          const response = await axios.get('/contrato');
          setData(response.data);
        } catch (error) {
          console.error('Erro na requisição:', error);
        }
      };

      fetchData();
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleEdit = (id) => {
    console.log(`Editar contrato com id ${id}`);
  };

  const deleteContrato = async (id) => {
    try {
      await axios.delete(`/contrato/${id}`);
      setData(data.filter(contrato => contrato._id !== id));
    } catch (error) {
      console.error('Erro ao deletar contrato:', error);
    }
  };

  return (
    <div className='container'>
      <div className='itens-container'>
        <Table
          goto={'/app/criarcontrato'}
          btnTxt={'Criar Contrato'}
          title={'Contratos'}
          trs={[
            'Id',
            'Carro',
            'Reserva',
            'Colaborador',
            'Status',
            'Data de Retirada',
            'Data de Devolução',
            'Agência de Retirada',
            'Agência de Devolução',
            'Ações'
          ]}
          data={data}
          onDelete={deleteContrato}
        />
      </div>
    </div>
  );
};

export default Contrato;
