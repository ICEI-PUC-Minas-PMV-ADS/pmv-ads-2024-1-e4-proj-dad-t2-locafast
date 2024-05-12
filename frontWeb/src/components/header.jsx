import React from "react";
import './style/header.css'

export default props => {
    return (
        <header className="header">
            <h1>{props.title}</h1>
        </header>
    )
}
