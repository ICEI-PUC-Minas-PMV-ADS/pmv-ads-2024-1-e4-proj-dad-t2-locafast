import React, { useState, useEffect } from 'react';
import axios from '../config/axiosConfig';
import TableContrato from '../components/tableContrato'; // Importando a nova tabela
import "../pages/style/contrato.css";

const Contrato = () => {
    const [data, setData] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editFormData, setEditFormData] = useState({});

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
        }
    }, []);

    const handleEditClick = (contrato) => {
        setEditingId(contrato._id);
        setEditFormData({ ...contrato });
    };

    const handleCancelClick = () => {
        setEditingId(null);
    };

    const handleEditFormChange = (e) => {
        const { name, value } = e.target;
        setEditFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSaveClick = async () => {
        try {
            const response = await axios.put(`/contrato/${editFormData._id}`, editFormData);
            const updatedData = data.map(contrato => (contrato._id === editFormData._id ? response.data : contrato));
            setData(updatedData);
            setEditingId(null);
        } catch (error) {
            console.error('Erro ao atualizar contrato:', error);
        }
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
        <div className="itens-container">
            <TableContrato
                title="Contratos"
                btnTxt="Criar Contrato"
                goto="/app/criarcontrato"
                trs={[
                    'Contrato',
                    'Cliente',
                    'Reserva',
                    'Carro',
                    'Colaborador',
                    'Status',
                    'Data de Retirada',
                    'Data de Devolução',
                    'Agência de Retirada',
                    'Agência de Devolução',
                    'Ações'
                ]}
                data={data}
                editingId={editingId}
                editFormData={editFormData}
                handleEditFormChange={handleEditFormChange}
                handleEditClick={handleEditClick}
                handleCancelClick={handleCancelClick}
                handleSaveClick={handleSaveClick}
                onDelete={deleteContrato}
            />
        </div>
    );
};

export default Contrato;
