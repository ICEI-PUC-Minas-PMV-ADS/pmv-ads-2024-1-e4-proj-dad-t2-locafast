import React from "react";
import { useNavigate } from 'react-router-dom';

import './style/table.css';

export default props => {

    const navigate = useNavigate();

    const navigateTo = () => {
        navigate(props.goto);
    };

    const formatTime = (data) => {
        try {
            let newDate = new Date(data);

            let day = String(newDate.getDate()).padStart(2, '0');
            let month = String(newDate.getMonth() + 1).padStart(2, '0');
            let year = newDate.getFullYear();
            let hour = String(newDate.getHours()).padStart(2, '0');
            let minutes = String(newDate.getMinutes()).padStart(2, '0');

            return `${day}/${month}/${year} ${hour}:${minutes}`;
        } catch (error) {
            return false;
        }
    }

    return (
        <div id="table-container-id" className='table-container'>
            <section className="table-header">
                <div className="table-title">
                    <h1>{props.title}</h1>
                </div>
                <div className="button-container">
                    {
                        props.btnTxt ? <button onClick={navigateTo} id="create">{props.btnTxt}</button> : ""
                    }
                </div>
            </section>
            <section className="table-body">
                <table>
                    <thead>
                        <tr>
                            {
                                props.trs.map((item, index) => (
                                    <th key={index}>{item}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {props.data ?
                            props.data.map(item => {
                                let keys = Object.keys(item)
                                return (
                                    <tr key={item._id}>
                                        {
                                            keys.map((key, index) => {
                                                return (
                                                    key === "dateRetirada" || key === "dateDevolucao" ?
                                                        <td key={index}>{formatTime(item[key])}</td> :
                                                        <td key={index}>{item[key]}</td>
                                                )
                                            })
                                        }
                                        <td>
                                            <div className="buttons-container">
                                                {
                                                    props.edit ?
                                                        "" :
                                                        <button className='button' id="edit">Editar</button>
                                                }
                                                <button className='button' id="delete" onClick={() => props.onDelete(item._id)}>Apagar</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }) :
                            <tr></tr>
                        }
                    </tbody>
                </table>
            </section >
        </div >
    )
}
