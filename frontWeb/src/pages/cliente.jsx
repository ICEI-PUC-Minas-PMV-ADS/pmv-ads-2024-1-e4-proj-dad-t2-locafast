import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from '../config/axiosConfig'
import Table from '../components/table';

import "../pages/style/container.css"

const Cliente = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {

            const fetchData = async () => {
                try {
                    const response = await axios.get('/cliente');
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

    const deleteCliente = async (id) => {
        try {
            await axios.delete(`/cliente/${id}`);
            setData(data.filter(cliente => cliente._id !== id));
        } catch (error) {
            console.error('Erro ao deletar cliente:', error);
        }
    };


    return (
        <div className='container'>
            <div className='itens-container'>
                <Table
                    goto={'/app/cadastrocliente'}
                    btnTxt={'Criar Cliente'}
                    title={'Clientes'}
                    trs={[
                        'Id',
                        'Numero da CNH',
                        'Validade da CNH',
                        'Estado',
                        'Nome',
                        'CPF',
                        'RG',
                        'Telefone',
                        'Email',
                        'Data de Nascimento',
                        'Status',
                        'Gênero',
                    ]}
                    data={data}
                    onDelete={deleteCliente}
                />
            </div>
        </div>
    );
};


export default Cliente; 
