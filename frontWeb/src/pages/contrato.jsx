import React, { useState, useEffect } from 'react';
import TableContrato from '../components/tableContrato'; // Certifique-se de que o caminho está correto
import "../pages/style/contrato.css"; // Certifique-se de que o caminho está correto

const Contrato = () => {
    const [data, setData] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editFormData, setEditFormData] = useState({});

    useEffect(() => {
        const contracts = JSON.parse(localStorage.getItem('contracts')) || [];
        setData(contracts);
    }, []);

    const handleEditClick = (contrato) => {
        setEditingId(contrato.id);
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

    const handleSaveClick = () => {
        const updatedData = data.map(contrato => (contrato.id === editFormData.id ? editFormData : contrato));
        localStorage.setItem('contracts', JSON.stringify(updatedData));
        setData(updatedData);
        setEditingId(null);
    };

    const deleteContrato = (id) => {
        const updatedData = data.filter(contrato => contrato.id !== id);
        localStorage.setItem('contracts', JSON.stringify(updatedData));
        setData(updatedData);
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
