import React from "react";
import './style/card.css';

export default props => {

    const { keyTitle, data, keysToRender } = props;

    return (
        <div className="card-container">
            <div className="title-container">
                <h2>{data[keyTitle]}</h2>
            </div>
            <div className="card-content-container">
                <ul>
                    {keysToRender.map((key, index) => (
                        <li key={index}>
                            {`${key}: ${data[key]}`}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
