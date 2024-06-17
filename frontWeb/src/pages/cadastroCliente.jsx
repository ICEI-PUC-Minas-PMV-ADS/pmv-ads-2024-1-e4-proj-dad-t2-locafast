import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../config/axiosConfig';
import "../pages/style/cadastroCliente.css";


function cadastroCliente() {

    const [formData, setFormData] = useState({
        clienteId: '',
        numeroCnh: '',
        validadeCnh: '',
        estadoEmissor: '',
        nome: '',
        cpf: '',
        rg: '',
        telefone: '',
        email: '',
        dataNascimento: '',
        status: '',
        genero: '',
    });

    const handleChange = (field, value) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/cliente', formData);
            alert('Cliente criado com sucesso!');
            navigation.navigate('Cliente', { update: true });
        } catch (error) {
            console.error('Erro ao criar cliente:', error);
            alert('Erro ao criar contrato. Veja o console para mais detalhes.');
        }
    };

    return (
        <div className="itens-container">
            <form onSubmit={handleSubmit} className="cliente-form">
                <div className="form-group">
                    <label htmlFor="clienteId">ID do Cliente:</label>
                    <input type="text" id="clienteId" value={formData.reservaId} onChange={handleChange} placeholder="ID do Cliente" />
                </div>
                <div className="form-group">
                    <label htmlFor="numeroCnh">Número da CNH:</label>
                    <input type="text" id="numeroCnh" value={formData.numeroCnh} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="validadeCnh">Validade da CNH:</label>
                    <input type="text" id="validadeCnh" value={formData.validadeCnh} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="estadoEmissor">Estado emissor:</label>
                    <input type="text" id="estadoEmissor" value={formData.estadoEmissor} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="date" id="nome" value={formData.nome} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="cpf">CPF:</label>
                    <input type="date" id="cpf" value={formData.cpf} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="rg">RG:</label>
                    <input type="text" id="rg" value={formData.rg} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="text" id="telefone" value={formData.telefone} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="dataNascimento">Data de nascimento:</label>
                    <input type="text" id="dataNascimento" value={formData.dataNascimento} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status:</label>
                    <select id="status" value={formData.status} onChange={handleChange}>
                        <option value="ativo">Ativo</option>
                        <option value="inativo">Inativo</option>
                        <option value="cancelado">Cancelado</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="genero">Gênero:</label>
                    <input type="text" id="genero" value={formData.genero} onChange={handleChange} />
                </div>
                <button type="submit" className="botao">Criar Cliente</button>
            </form>
        </div>
    );
}

export default cadastroCliente;
