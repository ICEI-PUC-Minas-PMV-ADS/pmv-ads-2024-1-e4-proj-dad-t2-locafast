import React from "react";

import './style/buttonCadastro.css'

export default props => {
    return <button type="submit" className="button-form" style={{width: props.width}} onClick={props.onClick}>{props.text}</button>
}
