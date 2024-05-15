import React from "react";

import './style/form.css'

import Icon from "./icon";
import ButtonCadastro from "./buttonCadastro";

export default () => {
    return (
        <div className="form-container">
            <form className="form">
                <Icon size={"100px"} />
                <h2>LocaFast</h2>
                <div className="input-form-container">
                    <input className="input-form" type="text" placeholder="cpf"></input>
                    <i className='bx bx-user'></i>
                </div>
                <div className="input-form-container">
                    <input className="input-form" type="password" placeholder="senha"></input>
                    <i className='bx bx-lock-alt' ></i>
                </div>
                <ButtonCadastro text={"Entrar"} width={'85%'}/>
                <a href="#">Esqueceu a senha?</a>
            </form>
        </div>
    )
}
