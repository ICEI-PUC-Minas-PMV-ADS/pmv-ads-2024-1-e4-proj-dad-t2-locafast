import React from 'react';
import { useOutletContext } from "react-router-dom";
import ButtonCadastro from '../components/buttonCadastro';
import axios from '../config/axiosConfig';
import { toastr } from 'react-redux-toastr';

import './style/reservaStep3.css'

export default () => {
    const [
        formData,
        setFormData,
        validations,
        setValidations,
        validateTime,
    ] = useOutletContext();

    function calcDays(date1, date2) {
        const newDate1 = new Date(date1);
        const newDate2 = new Date(date2);

        if (isNaN(newDate1.getTime()) || isNaN(newDate2.getTime())) {
            return "";
        }

        const differenceInTime = Math.abs(newDate2.getTime() - newDate1.getTime());
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

        return differenceInDays.toString();
    }

    const days = calcDays(formData.dateRetirada, formData.dateDevolucao);

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/reserva', formData);
            toastr.success('Sucesso', 'Reserva criada com sucesso');
        } catch (error) {
            toastr.error('Erro', 'Erro ao criar a reserva');
        }
    }

    console.log(formData)

    return (
        <div id='reserva-step-3'>
            <div className='subtitle'>
                <h2>CONFIRMAÇÃO</h2>
            </div>
            <div className='info-message-grupo-container'>
                <div className='info-message'>
                    <div>
                        <div className="info-container-icon">
                            <i className='bx bx-info-circle'></i>
                        </div>
                        <h3>A apresentação do cartão de crédito para pré autorização é obrigatória</h3>
                    </div>
                </div>
                <div className='grupo-info'>
                    <h3>{`Reserva para o grupo ${formData.categoriaVeiculo}`}</h3>
                    <h3>Oferta diária especial</h3>
                </div>
            </div>
            <div className='subtitle'>
                <h2>LOCAIS</h2>
            </div>
            <div className='agencias-retirada'>
                <h3>Agência de retirada: {formData.agenciaRetirada}</h3>
                <h3>Agência de devolução: {formData.agenciaDevolucao}</h3>
            </div>
            <div className='subtitle'>
                <h2>DATA E HORA</h2>
            </div>
            <div className='data-info'>
                <h3>Retirada: {formData.dateRetirada.toString()}</h3>
                <h3>Devolução: {formData.dateDevolucao.toString()}</h3>
            </div>
            <div className='subtitle'>
                <h2>TOTAL</h2>
            </div>
            <div className='total-info'>
                <h3>{`${days} x R$${formData.valorDiaria}`}</h3>
                <h3>Total estimado: R${days * formData.valorDiaria}</h3>
            </div>
            <div id='button-container'>
                <ButtonCadastro text={"Criar Reserva"} width={'35%'} onClick={handleSubmit} />
            </div>
        </div>
    )
}
