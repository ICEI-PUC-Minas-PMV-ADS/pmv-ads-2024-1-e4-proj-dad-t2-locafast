import React from "react";
import './style/form.css'
import LfIcon from '../icons/lfIcon.png'

export default () => {
    return (
        <div className="form-container">
            <form className="form">
                <div className="lf-icon-form-container">
                    <img className="lf-icon-form" src={LfIcon} alt="LF Icon"></img>
                </div>
                <h2>LocaFast</h2>
                <div className="input-form-container">
                    <input className="input-form" type="text" placeholder="cpf"></input>
                    <i class='bx bx-user'></i>
                </div>
                <div className="input-form-container">
                    <input className="input-form" type="password" placeholder="senha"></input>
                    <i class='bx bx-lock-alt' ></i>
                </div>
                <button className="button-form">Entrar</button>
                <a href="#">Esqueceu a senha?</a>
            </form>
        </div>
    )
}
