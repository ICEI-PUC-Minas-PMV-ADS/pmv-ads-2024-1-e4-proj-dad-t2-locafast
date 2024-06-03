import React from 'react';
import { useOutletContext } from "react-router-dom";
import ButtonCadastro from '../components/buttonCadastro';

export default () => {
    const [formData, handleChange, handleSubmit] = useOutletContext();

    return (
        <div id='button-container'>
            <ButtonCadastro text={"Criar Reserva"} width={'35%'} onClick={handleSubmit} />
        </div>
    )
}
