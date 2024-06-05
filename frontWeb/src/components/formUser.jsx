import React from "react";

import ButtonCadastro from "./buttonCadastro";

import './style/formUser.css'

export default props => {

    return (
        <div id={props.id ? props.id : ""} className="input-container">
            {
                props.placeholder.map(el => {
                    return <input id={el} placeholder={el}></input>
                })
            }
            {
                props.children > 1 ?
                props.children.map(child => {
                    return child
                }) :
                props.children
            }
        </div>
    )
}