import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toastr } from 'react-redux-toastr';

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

    const deleteReserva = async (id) => {
        toastr.confirm("Deseja excluir a reserva?", {
            onOk: async () => {
                try {
                    await axios.delete(`/reserva/${id}`);
                    setData(data.filter(reserva => reserva._id !== id));
                } catch (error) {
                    toastr.error("Erro", "Erro ao excluir reserva.")
                }
            },
            onCancel: () => {}
        })
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
                        'Solicitante',
                        'Tel. Solicitante',
                        'ColaboradorId',
                        'Ação'
                    ]}
                    data={data}
                    onDelete={deleteReserva}
                    edit="noEdit"
                />
            </div>
        </div>
    );
};

export default Reserva;
