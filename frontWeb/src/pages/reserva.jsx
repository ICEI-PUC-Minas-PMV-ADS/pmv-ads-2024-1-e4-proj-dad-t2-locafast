import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from '../config/axiosConfig'
import Table from '../components/table';

import "../pages/style/container.css"

const Reserva = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {

            const fetchData = async () => {
                try {
                    const response = await axios.get('/reserva');
                    setData(response.data);
                } catch (error) {
                    console.error('Erro na requisição:', error);
                }
            };

            fetchData();
        } else {
            navigate('/')
        }
    }, [navigate]);


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
