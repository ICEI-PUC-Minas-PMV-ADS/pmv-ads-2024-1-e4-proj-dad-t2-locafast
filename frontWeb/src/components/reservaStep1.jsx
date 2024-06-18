import React, { useState, useEffect } from "react";
import AsyncSelect from 'react-select/async';
import { useOutletContext } from "react-router-dom";
import ReactInputMask from "react-input-mask";
import axios from '../config/axiosConfig';
import { toastr } from 'react-redux-toastr';
import './style/reservaStep1.css';

const agencias = [
    { value: 'Agência Matriz', label: 'Agência Matriz' },
    { value: 'Agência Filial Cardec', label: 'Agência Filial Cardec' },
    { value: 'Agência Central', label: 'Agência Central' },
    { value: 'Agência Paulista', label: 'Agência Paulista' },
    { value: 'Agência Pinheiros', label: 'Agência Pinheiros' },
    { value: 'Agência Vila Olímpia', label: 'Agência Vila Olímpia' },
    { value: 'Agência Morumbi', label: 'Agência Morumbi' },
    { value: 'Agência Barra da Tijuca', label: 'Agência Barra da Tijuca' },
    { value: 'Agência Copacabana', label: 'Agência Copacabana' },
    { value: 'Agência Leblon', label: 'Agência Leblon' },
    { value: 'Agência Botafogo', label: 'Agência Botafogo' },
    { value: 'Agência Ipanema', label: 'Agência Ipanema' },
    { value: 'Agência Niterói', label: 'Agência Niterói' },
    { value: 'Agência Salvador', label: 'Agência Salvador' },
    { value: 'Agência Porto Alegre', label: 'Agência Porto Alegre' },
    { value: 'Agência Curitiba', label: 'Agência Curitiba' },
    { value: 'Agência Florianópolis', label: 'Agência Florianópolis' },
    { value: 'Agência Belo Horizonte', label: 'Agência Belo Horizonte' },
    { value: 'Agência Brasília', label: 'Agência Brasília' },
    { value: 'Agência Recife', label: 'Agência Recife' }
];

const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
        const filteredOptions = agencias.filter(agencia =>
            agencia.label.toLowerCase().includes(inputValue.toLowerCase())
        );
        callback(filteredOptions);
    }, 1000);
};

const fetchClienteById = async (id, setNome, setCpf, setValidations, validations) => {
    try {
        const response = await axios.get(`/cliente/${id}`);
        if (response.data) {
            setNome(response.data.nome);
            setCpf(response.data.cpf);
            setValidations({
                ...validations,
                clienteId: {
                    value: id,
                    valid: true
                }
            });
        } else {
            toastr.error('Erro', 'Cliente não existe')
            setNome('');
            setCpf('');
            setValidations({
                ...validations,
                clienteId: {
                    value: id,
                    valid: false
                }
            });
        }
    } catch (error) {
        if(error.response.status == 404){
            toastr.error("Erro", "Cliente não existe")
        } else {
            toastr.error('Erro', 'Ocorreu um erro ao buscar cliente pelo id')
        }
        setNome('');
        setCpf('');
        setValidations({
            ...validations,
            clienteId: {
                value: id,
                valid: false
            }
        });
    }
};

const fetchClienteByCpf = async (cpf, setValidations, validations, setNome, setCpf) => {
    try {
        const response = await axios.get(`/cliente/cpf`, { params: { cpf } });
        if (response.data) {
            setValidations({
                ...validations,
                clienteId: {
                    value: response.data._id,
                    valid: true
                }
            });
        } else {
            toastr.error('Erro', 'Cliente não existe')
            setNome('');
            setCpf('');
            setValidations({
                ...validations,
                clienteId: {
                    value: "",
                    valid: false
                }
            });
        }
    } catch (error) {
        if(error.response.status == 404){
            toastr.error("Erro", "Cliente não existe")
        } else {
            toastr.error('Erro', 'Ocorreu um erro ao buscar cliente pelo cpf')
        }
        setNome('');
        setCpf('');
        setValidations({
            ...validations,
            clienteId: {
                value: "",
                valid: false
            }
        });
    }
};

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export default function ReservaStep1() {
    const [
        formData,
        setFormData,
        validations,
        setValidations,
        validateTime,
    ] = useOutletContext();

    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');

    useEffect(() => {
        if (validations.clienteId.value) {
            fetchClienteById(validations.clienteId.value, setNome, setCpf, setValidations, validations);
        }
    }, [validations.clienteId.value]);

    const customNoOptionsMessage = () => "Resultados da pesquisa";

    const customStyles = {
        control: (provided) => ({
            ...provided,
            minHeight: '54px',
            boxShadow: 'none',
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: '#fff',
            zIndex: 100
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#007bff' : '#fff',
            color: state.isSelected ? '#fff' : '#333',
            '&:hover': {
                backgroundColor: '#007bff',
                color: '#fff'
            }
        })
    };

    const handleSelectChange = (selectedOption, { name }) => {
        setValidations(prevState => ({
            ...prevState,
            [name]: {
                value: selectedOption ? selectedOption.value : '',
                valid: true
            }
        }));
    };

    console.log(validations)

    return (
        <div>
            <form method='POST'>
                <div id="cliente">
                    <div className="sub-title">
                        <h2>{'CLIENTE'}</h2>
                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                            name="clienteId"
                            placeholder="Id Cliente"
                            value={validations.clienteId.value}
                            onChange={(e) => setValidations({
                                ...validations,
                                clienteId: {
                                    value: e.target.value,
                                    valid: false
                                }
                            })}
                            onBlur={() => fetchClienteById(id, setNome, setCpf, setValidations, validations)}
                        />
                        <input
                            id="input-name"
                            type="text"
                            placeholder="Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            disabled
                        />
                        <ReactInputMask
                            placeholder="CPF"
                            mask={"999.999.999-99"}
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            onBlur={() => fetchClienteByCpf(cpf, setValidations, validations, setNome, setCpf)}
                        />
                    </div>
                    <div id="sub-title-icon">
                        <h2>{'LOCAL E DATA'}</h2>
                        <i className='bx bx-map'></i>
                    </div>
                </div>
                <div id="info-retirada">
                    <div id="locais">
                    <div id="local-retirada">
                        <AsyncSelect
                            cacheOptions
                            loadOptions={loadOptions}
                            defaultOptions={validations.agenciaRetirada.value ? [{ label: validations.agenciaRetirada.value, value: validations.agenciaRetirada.value }] : []}
                            placeholder="Selecione a agência"
                            value={validations.agenciaRetirada.value ? { label: validations.agenciaRetirada.value, value: validations.agenciaRetirada.value } : null}
                            onChange={(selectedOption) => handleSelectChange(selectedOption, { name: 'agenciaRetirada' })}
                            noOptionsMessage={customNoOptionsMessage}
                            styles={customStyles}
                        />
                    </div>
                    <div id="local-devolucao">
                        <AsyncSelect
                            cacheOptions
                            loadOptions={loadOptions}
                            defaultOptions={validations.agenciaDevolucao.value ? [{ label: validations.agenciaDevolucao.value, value: validations.agenciaDevolucao.value }] : []}
                            placeholder="Selecione a agência"
                            value={validations.agenciaDevolucao.value ? { label: validations.agenciaDevolucao.value, value: validations.agenciaDevolucao.value } : null}
                            onChange={(selectedOption) => handleSelectChange(selectedOption, { name: 'agenciaDevolucao' })}
                            noOptionsMessage={customNoOptionsMessage}
                            styles={customStyles}
                        />
                    </div>
                    </div>
                    <div id="data-retirada-input">
                        <input
                            className={validations.dateRetirada.valid || validations.dateRetirada.value === "" ? "" : "invalid"}
                            type="text"
                            value={validations.dateRetirada.value ? formatDate(validations.dateRetirada.value) : ""}
                            placeholder="Data de retirada"
                            disabled
                        />
                        <input
                            className={validations.dateDevolucao.valid || validations.dateDevolucao.value === "" ? "" : "invalid"}
                            type="text"
                            value={validations.dateDevolucao.value ? formatDate(validations.dateDevolucao.value) : ""}
                            placeholder="Data de devolução"
                            disabled
                        />
                    </div>
                    <div id="hora-retirada-input">
                        <ReactInputMask
                            className={validations.retiradaHora.valid || validations.retiradaHora.value === "" || validations.retiradaHora.value === "__:__" ? "" : "invalid"}
                            mask={"99:99"}
                            placeholder="Hora de retirada"
                            value={validations.retiradaHora.value}
                            onChange={(e) => setValidations(prevState => ({
                                ...prevState,
                                retiradaHora: { value: e.target.value, valid: true }
                            }))}
                            onBlur={(e) => setValidations(prevState => ({
                                ...prevState,
                                retiradaHora: { value: e.target.value, valid: validateTime(e.target.value) }
                            }))}
                        />
                        <ReactInputMask
                            className={validations.devolucaoHora.valid || validations.devolucaoHora.value === "" || validations.devolucaoHora.value === "__:__" ? "" : "invalid"}
                            mask={"99:99"}
                            placeholder="Hora de devolução"
                            value={validations.devolucaoHora.value}
                            onChange={(e) => setValidations(prevState => ({
                                ...prevState,
                                devolucaoHora: { value: e.target.value, valid: true }
                            }))}
                            onBlur={(e) => setValidations(prevState => ({
                                ...prevState,
                                devolucaoHora: { value: e.target.value, valid: validateTime(e.target.value) }
                            }))}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}
