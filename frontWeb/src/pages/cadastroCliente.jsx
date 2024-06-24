import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../config/axiosConfig';
import '../pages/style/cadastroCliente.css';

const CadastroCliente = () => {
    const [formData, setFormData] = useState({
        numeroCnh: '',
        validadeCnh: '',
        estadoEmissor: '',
        nome: '',
        cpf: '',
        rg: '',
        telefone: '',
        email: '',
        dataNascimento: '',
        status: 'ativo',
        genero: 'masculino'
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

    try {
        await axios.post('/cliente', formData);
        alert('Cliente cadastrado com sucesso!');
        navigate('/app/cliente');
    } catch (error) {
        console.error('Erro ao criar cliente:', error);
        alert('Erro ao criar cliente. Veja o console para mais detalhes.');
    }
};

return (
    <div className="itens-container">
        <form onSubmit={handleSubmit} className="cliente-form">
            <div className="form-group">
                <label htmlFor="numeroCnh">Número da CNH:</label>
                <input type="text" id="numeroCnh" value={formData.numeroCnh} onChange={handleChange} placeholder="Número da CNH" />
            </div>
            <div className="form-group">
                <label htmlFor="validadeCnh">Validade da CNH:</label>
                <input type="date" id="validadeCnh" value={formData.validadeCnh} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="estadoEmissor">Estado Emissor:</label>
                <input type="text" id="estadoEmissor" value={formData.estadoEmissor} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" value={formData.nome} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="cpf">CPF:</label>
                <input type="text" id="cpf" value={formData.cpf} onChange={handleChange} />
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
                <input type="email" id="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="dataNascimento">Data de Nascimento:</label>
                <input type="date" id="dataNascimento" value={formData.dataNascimento} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label htmlFor="status">Status:</label>
                <select id="status" value={formData.status} onChange={handleChange}>
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="genero">Gênero:</label>
                <select id="genero" value={formData.genero} onChange={handleChange}>
                    <option value="ativo">Masculino</option>
                    <option value="inativo">Feminino</option>
                </select>
            </div>
            <button type="submit" className="botao">Cadastrar Cliente</button>
        </form>
    </div>
);
};

export default CadastroCliente; 
