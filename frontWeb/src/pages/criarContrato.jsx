import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../config/axiosConfig';
import "../pages/style/criarContrato.css";

const CriarContrato = () => {
  const [formData, setFormData] = useState({
    carroId: '',
    reservaId: '',
    colaboradorId: '',
    status: 'ativo',
    dataRetirada: '',
    dataDevolucao: '',
    agenciaRetirada: '',
    agenciaDevolucao: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/contrato', formData);
      navigate('/app/contrato');
    } catch (error) {
      console.error('Erro ao criar contrato:', error);
    }
  };

  return (
    <div className="itens-container">
      <form className="contrato-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID do Carro:</label>
          <input type="text" name="carroId" value={formData.carroId} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>ID da Reserva:</label>
          <input type="text" name="reservaId" value={formData.reservaId} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>ID do Colaborador:</label>
          <input type="text" name="colaboradorId" value={formData.colaboradorId} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleChange} required>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
            <option value="cancelado">Cancelado</option>
          </select>
        </div>
        <div className="form-group">
          <label>Data de Retirada:</label>
          <input type="date" name="dataRetirada" value={formData.dataRetirada} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Data de Devolução:</label>
          <input type="date" name="dataDevolucao" value={formData.dataDevolucao} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Agência de Retirada:</label>
          <input type="text" name="agenciaRetirada" value={formData.agenciaRetirada} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Agência de Devolução:</label>
          <input type="text" name="agenciaDevolucao" value={formData.agenciaDevolucao} onChange={handleChange} required />
        </div>
        <button type="submit" className="botao">Criar Contrato</button>
      </form>
    </div>
  );
};

export default CriarContrato;
