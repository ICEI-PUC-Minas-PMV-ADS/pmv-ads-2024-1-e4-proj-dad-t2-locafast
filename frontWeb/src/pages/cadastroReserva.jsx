import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import ReactInputMask from 'react-input-mask';
import Calendar from '../components/calendar';
import { toastr } from 'react-redux-toastr';
import "../pages/style/cadastroReserva.css";

function CadastroReserva() {
    const [formData, setFormData] = useState({
        clienteId: '',
        agenciaRetirada: '',
        agenciaDevolucao: '',
        categoriaVeiculo: '',
        nomeRequisitante: '',
        telefoneRequisitante: '',
        valorDiaria: '',
        dateRetirada: '',
        dateDevolucao: '',
    });

    const [blocked, setBlocked] = useState(true)

    const [validations, setValidations] = useState({
        clienteId: { value: "", valid: false },
        agenciaRetirada: { value: "", valid: false },
        agenciaDevolucao: { value: "", valid: false },
        categoriaVeiculo: { value: "", valid: false },
        nomeRequisitante: { value: "", valid: false },
        telefoneRequisitante: { value: "", valid: false },
        valorDiaria: { value: "", valid: false },
        dateRetirada: { value: "", valid: false },
        dateDevolucao: { value: "", valid: false },
        retiradaHora: { value: "", valid: false },
        devolucaoHora: { value: "", valid: false }
    });

    useEffect(() => {
        const allValid = Object.keys(validations).every(
            key => validations[key].valid && validations[key].value !== ""
        );
        setBlocked(!allValid);
        if (allValid) {
            setFormData({
                clienteId: validations.clienteId.value,
                agenciaRetirada: validations.agenciaRetirada.value,
                agenciaDevolucao: validations.agenciaDevolucao.value,
                categoriaVeiculo: validations.categoriaVeiculo.value,
                nomeRequisitante: validations.nomeRequisitante.value,
                telefoneRequisitante: validations.telefoneRequisitante.value,
                valorDiaria: validations.valorDiaria.value,
                dateRetirada: setTimeFromString(validations.dateRetirada.value, validations.retiradaHora.value),
                dateDevolucao: setTimeFromString(validations.dateDevolucao.value, validations.devolucaoHora.value),
            })
        }
    }, [validations]);

    const location = useLocation();

    const validateDates = (dateRetirada, dateDevolucao) => {
        try {
            const retiradaDate = new Date(dateRetirada);
            const devolucaoDate = new Date(dateDevolucao);

            if (retiradaDate > devolucaoDate) {
                toastr.error("Data inválida", "A data de devolução não pode ser anterior a data de retirada")
                return false;
            }
            return true;
        } catch (error) {
            return true;
        }
    };

    function setTimeFromString(date, timeString) {
        const [hours, minutes] = timeString.split(':').map(Number);
        const newDate = new Date(date)
        newDate.setHours(hours);
        newDate.setMinutes(minutes);
        newDate.setSeconds(0);
        newDate.setMilliseconds(0);
        return newDate.toString();
    }

    const handleDateChange = (field) => (date) => {
        const newValidations = {
            ...validations,
            [field]: {
                value: date,
                valid: true,
            }
        };

        if (field === "dateRetirada") {
            newValidations.dateDevolucao.valid = validateDates(date, validations.dateDevolucao.value);
        } else if (field === "dateDevolucao") {
            newValidations.dateRetirada.valid = validateDates(validations.dateRetirada.value, date);
        }

        setValidations(newValidations);
    };

    const validateTime = (value) => {
        const [hours, minutes] = value.split(':').map(Number);
        return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60;
    };

    const telefoneMask = "(99)9999-9999";

    return (
        <div className='reserva-container'>
            <div className='calendars-container'>
                <div className='calendar-single'>
                    <Calendar
                        title={'Retirada'}
                        selectedDate={validations.dateRetirada.value}
                        onDateChange={handleDateChange('dateRetirada')}
                    />
                </div>
                <div className='calendar-single'>
                    <Calendar
                        title={'Devolução'}
                        selectedDate={validations.dateDevolucao.value}
                        onDateChange={handleDateChange('dateDevolucao')}
                    />
                </div>
            </div>
            <div className='reserva-form-container'>
                <div id='header-form'>
                    <h2>Cadastro de Reserva</h2>
                </div>
                <div className='top-form'>
                    <div className="input-container">
                        <input
                            id="nomeRequisitante"
                            name="nomeRequisitante"
                            placeholder='Nome Requisitante'
                            onChange={(e) => setValidations({
                                ...validations,
                                nomeRequisitante: {
                                    value: e.target.value,
                                    valid: e.target.value === "" ? false : true
                                }
                            })}
                        />
                        <ReactInputMask
                            id="telefoneRequisitante"
                            name="telefoneRequisitante"
                            mask={telefoneMask}
                            placeholder='Telefone Requisitante'
                            onChange={(e) => setValidations({
                                ...validations,
                                telefoneRequisitante: {
                                    value: e.target.value,
                                    valid: e.target.value.replace(/_/g, '').length === telefoneMask.replace(/_/g, '').length
                                }
                            })}
                        />
                    </div>
                </div>
                <nav className='nav-bar'>
                    <ul className='nav-links'>
                        <li className={location.pathname === '/app/cadastroreserva/reserva-passo-1' ? 'active' : ''}>
                            <Link to={'reserva-passo-1'}>{'1. DADOS E LOCAL'}</Link>
                        </li>
                        <li className={location.pathname === '/app/cadastroreserva/reserva-passo-2' ? 'active' : ''}>
                            <Link to={'reserva-passo-2'}>{'2. GRUPO E PREÇO'}</Link>
                        </li>
                        <li className={`${location.pathname === '/app/cadastroreserva/reserva-passo-3' ? 'active' : ''} ${blocked ? 'blocked' : ''}`}>
                            <Link
                                to={blocked ? '#' : 'reserva-passo-3'}
                                onClick={(e) => {
                                    if (blocked) e.preventDefault();
                                }}
                            >
                                {'3. DETALHES E CONFIRMAÇÃO'}
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='steps-container'>
                    <Outlet context={[
                        formData,
                        setFormData,
                        validations,
                        setValidations,
                        validateTime,
                    ]} />
                </div>
            </div>
        </div>
    );
}

export default CadastroReserva;
