import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../pages/style/criarContrato.css";

const CriarContrato = () => {
    const [formData, setFormData] = useState({
        carroId: '',
        reservaId: '',
        colaboradorId: 'Admin',
        clienteId: '',
        status: 'ativo',
        dataRetirada: '',
        dataDevolucao: '',
        agenciaRetirada: '',
        agenciaDevolucao: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSend = {
            ...formData,
            id: Date.now(),
            dataRetirada: new Date(formData.dataRetirada).toISOString(),
            dataDevolucao: new Date(formData.dataDevolucao).toISOString()
        };

        const existingContracts = JSON.parse(localStorage.getItem('contracts')) || [];
        existingContracts.push(dataToSend);
        localStorage.setItem('contracts', JSON.stringify(existingContracts));

        alert('Contrato criado com sucesso!');
        navigate('/app/contrato');
    };

    return (
        <div className="itens-container">
            <form onSubmit={handleSubmit} className="contrato-form">
                <div className="form-group">
                    <label htmlFor="reservaId">ID da Reserva:</label>
                    <input type="text" id="reservaId" value={formData.reservaId} onChange={handleChange} placeholder="ID da Reserva" />
                </div>
                <div className="form-group">
                    <label htmlFor="colaboradorId">ID do Colaborador:</label>
                    <input type="text" id="colaboradorId" value={formData.colaboradorId} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="clienteId">ID do Cliente:</label>
                    <input type="text" id="clienteId" value={formData.clienteId} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="carroId">ID do Carro:</label>
                    <input type="text" id="carroId" value={formData.carroId} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="dataRetirada">Data de Retirada:</label>
                    <input type="date" id="dataRetirada" value={formData.dataRetirada} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="dataDevolucao">Data de Devolução:</label>
                    <input type="date" id="dataDevolucao" value={formData.dataDevolucao} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="agenciaRetirada">Agência de Retirada:</label>
                    <input type="text" id="agenciaRetirada" value={formData.agenciaRetirada} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="agenciaDevolucao">Agência de Devolução:</label>
                    <input type="text" id="agenciaDevolucao" value={formData.agenciaDevolucao} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status:</label>
                    <select id="status" value={formData.status} onChange={handleChange}>
                        <option value="ativo">Ativo</option>
                        <option value="inativo">Inativo</option>
                        <option value="cancelado">Cancelado</option>
                    </select>
                </div>
                <button type="submit" className="botao">Criar Contrato</button>
            </form>
        </div>
    );
};

export default CriarContrato;
