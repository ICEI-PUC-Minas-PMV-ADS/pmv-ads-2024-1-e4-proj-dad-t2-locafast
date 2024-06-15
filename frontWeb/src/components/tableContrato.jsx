import React from "react";
import { useNavigate } from 'react-router-dom';
import './style/tableContrato.css';

export default props => {
    const navigate = useNavigate();

    const navigateTo = () => {
        navigate(props.goto);
    };

    const mapTableHeader = props.trs.map((item) => (
        <th key={item}>{item}</th>
    ));

    return (
        <div id="table-container-id" className='table-container'>
            <section className="table-header">
                <div className="table-title">
                    <h1>{props.title}</h1>
                </div>
                <div className="button-container">
                    {props.btnTxt ? <button onClick={navigateTo} id="create">{props.btnTxt}</button> : ""}
                </div>
            </section>
            <section className="table-body">
                <table className="contrato-table">
                    <thead>
                        <tr>
                            {mapTableHeader}
                        </tr>
                    </thead>
                    <tbody>
                        {props.data ?
                            props.data.map(item => (
                                <tr key={item._id}>
                                    {props.editingId === item._id ? (
                                        <>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="_id"
                                                    value={props.editFormData._id}
                                                    onChange={props.handleEditFormChange}
                                                    className="editable-input"
                                                    disabled
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="clienteId"
                                                    value={props.editFormData.clienteId}
                                                    onChange={props.handleEditFormChange}
                                                    className="editable-input"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="reservaId"
                                                    value={props.editFormData.reservaId}
                                                    onChange={props.handleEditFormChange}
                                                    className="editable-input"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="carroId"
                                                    value={props.editFormData.carroId}
                                                    onChange={props.handleEditFormChange}
                                                    className="editable-input"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="colaboradorId"
                                                    value={props.editFormData.colaboradorId}
                                                    onChange={props.handleEditFormChange}
                                                    className="editable-input"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="status"
                                                    value={props.editFormData.status}
                                                    onChange={props.handleEditFormChange}
                                                    className="editable-input"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="date"
                                                    name="dataRetirada"
                                                    value={new Date(props.editFormData.dataRetirada).toISOString().substring(0, 10)}
                                                    onChange={props.handleEditFormChange}
                                                    className="editable-input"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="date"
                                                    name="dataDevolucao"
                                                    value={new Date(props.editFormData.dataDevolucao).toISOString().substring(0, 10)}
                                                    onChange={props.handleEditFormChange}
                                                    className="editable-input"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="agenciaRetirada"
                                                    value={props.editFormData.agenciaRetirada}
                                                    onChange={props.handleEditFormChange}
                                                    className="editable-input"
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="agenciaDevolucao"
                                                    value={props.editFormData.agenciaDevolucao}
                                                    onChange={props.handleEditFormChange}
                                                    className="editable-input"
                                                />
                                            </td>
                                            <td>
                                                <div className="buttons-container">
                                                    <button className='button save-btn' onClick={props.handleSaveClick}>Salvar</button>
                                                    <button className='button cancel-btn' onClick={props.handleCancelClick}>Cancelar</button>
                                                </div>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{item._id}</td>
                                            <td>{item.clienteId}</td>
                                            <td>{item.reservaId}</td>
                                            <td>{item.carroId}</td>
                                            <td>{item.colaboradorId}</td>
                                            <td>{item.status}</td>
                                            <td>{new Date(item.dataRetirada).toLocaleDateString()}</td>
                                            <td>{new Date(item.dataDevolucao).toLocaleDateString()}</td>
                                            <td>{item.agenciaRetirada}</td>
                                            <td>{item.agenciaDevolucao}</td>
                                            <td>
                                                <div className="buttons-container">
                                                    <button className='button edit-btn' onClick={() => props.handleEditClick(item)}>Editar</button>
                                                    <button className='button delete-btn' onClick={() => props.onDelete(item._id)}>Apagar</button>
                                                </div>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            )) :
                            <tr></tr>
                        }
                    </tbody>
                </table>
            </section>
        </div>
    )
}
