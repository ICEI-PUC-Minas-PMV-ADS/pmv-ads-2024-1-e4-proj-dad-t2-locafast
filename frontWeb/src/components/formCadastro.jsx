import React from "react";

import './style/formCadastro.css'

export default props => {

    return (
        <div id={props.id ? props.id : ""} className="input-container">
            {
                props.placeholders.map((placeholder, index) => (
                    <input 
                        key={index}
                        id={placeholder}
                        placeholder={placeholder}
                        value={props.values[placeholder]}
                        onChange={props.handleChange[placeholder]}
                    />
                ))
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
