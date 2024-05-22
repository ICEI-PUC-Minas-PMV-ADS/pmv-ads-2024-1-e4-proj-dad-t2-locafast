import React from "react";

import './style/formCadastro.css'

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
