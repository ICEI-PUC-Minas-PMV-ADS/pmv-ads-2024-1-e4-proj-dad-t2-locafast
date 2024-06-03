import React from "react";
import './style/card.css';

export default props => {

    return (
        <div className="card-container">
            <div className="top-card">
                <div className="info-container">
                    <i class='bx bx-info-circle'></i>
                </div>
                <div className="title-card-container">
                    <h2>{`Grupo ${props.group}`}</h2>
                </div>
                <div className="check-container">
                    <div className="check"></div>
                </div>
            </div>
            <div className="description-container">
                <h3>{props.description}</h3>
            </div>
            <div className="value-container">
                <h2>{`R$${props.value},00/dia`}</h2>
            </div>
        </div>
    );
}
