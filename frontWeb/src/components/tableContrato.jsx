import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style/tableContrato.css';

const TableContrato = ({ title, btnTxt, goto, trs, data, editingId, editFormData, handleEditFormChange, handleEditClick, handleCancelClick, handleSaveClick, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-title">
          <h1>{title}</h1>
        </div>
        <div className="button-container">
          <button onClick={() => navigate(goto)}>{btnTxt}</button>
        </div>
      </div>
      <div className="table-body">
        <table className="styled-table">
          <thead>
            <tr>
              {trs.map((tr, index) => (
                <th key={index}>{tr}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((contrato) => (
              editingId === contrato.id ? (
                <tr key={contrato.id}>
                  <td>{contrato.id}</td>
                  <td><input type="text" name="clienteId" value={editFormData.clienteId} onChange={handleEditFormChange} /></td>
                  <td><input type="text" name="reservaId" value={editFormData.reservaId} onChange={handleEditFormChange} /></td>
                  <td><input type="text" name="carroId" value={editFormData.carroId} onChange={handleEditFormChange} /></td>
                  <td><input type="text" name="colaboradorId" value={editFormData.colaboradorId} onChange={handleEditFormChange} /></td>
                  <td>
                    <select name="status" value={editFormData.status} onChange={handleEditFormChange}>
                      <option value="ativo">Ativo</option>
                      <option value="inativo">Inativo</option>
                      <option value="cancelado">Cancelado</option>
                    </select>
                  </td>
                  <td><input type="date" name="dataRetirada" value={editFormData.dataRetirada} onChange={handleEditFormChange} /></td>
                  <td><input type="date" name="dataDevolucao" value={editFormData.dataDevolucao} onChange={handleEditFormChange} /></td>
                  <td><input type="text" name="agenciaRetirada" value={editFormData.agenciaRetirada} onChange={handleEditFormChange} /></td>
                  <td><input type="text" name="agenciaDevolucao" value={editFormData.agenciaDevolucao} onChange={handleEditFormChange} /></td>
                  <td>
                    <button onClick={handleSaveClick}>Salvar</button>
                    <button onClick={handleCancelClick}>Cancelar</button>
                  </td>
                </tr>
              ) : (
                <tr key={contrato.id}>
                  <td>{contrato.id}</td>
                  <td>{contrato.clienteId}</td>
                  <td>{contrato.reservaId}</td>
                  <td>{contrato.carroId}</td>
                  <td>{contrato.colaboradorId}</td>
                  <td>{contrato.status}</td>
                  <td>{contrato.dataRetirada}</td>
                  <td>{contrato.dataDevolucao}</td>
                  <td>{contrato.agenciaRetirada}</td>
                  <td>{contrato.agenciaDevolucao}</td>
                  <td>
                    <button onClick={() => handleEditClick(contrato)}>Editar</button>
                    <button onClick={() => onDelete(contrato.id)}>Deletar</button>
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableContrato;
