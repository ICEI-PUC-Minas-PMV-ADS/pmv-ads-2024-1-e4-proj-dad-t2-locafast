import React from "react";
import lfIcon from '../icons/lfIcon.png'

import './style/icon.css'

export default props => {
    return (
        <span className="lf-icon-form-container">
            <img className="lf-icon-form" src={props.src ? props.src : lfIcon} style={{ height: props.size,width: props.size }} alt="LF Icon"></img>
        </span>
    )
}
