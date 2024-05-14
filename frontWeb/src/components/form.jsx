import React from "react";

import './style/form.css'

import LfIcon from '../icons/lfIcon.png'
import Icon from "./icon";

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
                <button className="button-form">Entrar</button>
                <a href="#">Esqueceu a senha?</a>
            </form>
        </div>
    )
}
