import React from "react";
import AsyncSelect from 'react-select/async';
import FormCadastro from './formCadastro';
import './style/reservaStep1.css';
import { useOutletContext } from "react-router-dom";

const agencias = [
    { value: '', label: '' },
    { value: 'Centro Florianópolis', label: 'Centro Florianópolis' },
    { value: 'Aeroporto Porto Alegre', label: 'Aeroporto Porto Alegre' },
    { value: 'Aeroporto Confins', label: 'Aeroporto Confins' }
];

const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
        const filteredOptions = agencias.filter(agencia =>
            agencia.label.toLowerCase().includes(inputValue.toLowerCase())
        );
        callback(filteredOptions);
    }, 1000);
};

function formatDate(dateString) {

    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() retorna de 0 a 11
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export default () => {
    const [formData, handleChange] = useOutletContext();

    const customNoOptionsMessage = () => {
        return "Resultados da pesquisa";
    };

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

    return (
        <div>
            <form method='POST'>
                <div id="cliente">
                    <div className="sub-title">
                        <h2>{'CLIENTE'}</h2>
                    </div>
                    <FormCadastro
                        placeholders={[
                            'clienteId',
                            'Nome',
                            'CPF',
                        ]}
                        id={'clientData'}
                        values={formData}
                        handleChange={handleChange}
                    >
                    </FormCadastro>
                    <div id="sub-title-icon">
                        <h2>{'LOCAL E DATA'}</h2>
                        <i className='bx bx-map' ></i>
                    </div>
                </div>
                <div id="info-retirada">
                    <div id="locais">
                        <div id="local-retirada">
                            <AsyncSelect
                                cacheOptions
                                loadOptions={loadOptions}
                                defaultOptions={null}
                                placeholder="Selecione a agência"
                                noOptionsMessage={customNoOptionsMessage}
                                styles={customStyles}
                            />
                        </div>
                        <div id="local-devolucao">
                            <AsyncSelect
                                cacheOptions
                                loadOptions={loadOptions}
                                defaultOptions={null}
                                placeholder="Selecione a agência"
                                noOptionsMessage={customNoOptionsMessage}
                                styles={customStyles}
                            />
                        </div>
                    </div>
                    <div id="data-retirada-input">
                        <input
                            type="text"
                            value={
                                formData['dateRetirada'] ?
                                    formatDate(formData['dateRetirada'].toString()) :
                                    ""
                            }
                            placeholder="Data de retirada"
                            disabled
                        />
                        <input
                            type="text"
                            value={
                                formData['dateDevolucao'] ?
                                    formatDate(formData['dateDevolucao'].toString()) :
                                    ""
                            }
                            placeholder="Data de devolução"
                            disabled
                        />
                    </div>
                    <div id="hora-retirada-input">
                        <input type="text" placeholder="Hora de retirada" />
                        <input type="text" placeholder="Hora de devolução" />
                    </div>
                </div>
            </form>
        </div>
    )
}
