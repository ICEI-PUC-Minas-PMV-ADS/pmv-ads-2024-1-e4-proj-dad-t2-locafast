import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import './style/table.css';

export default props => {

    const navigate = useNavigate();

    const navigateTo = () => {
        navigate(props.goto);
    };

    const mapTableHeader = props.trs.map((item) => (
        <th>{item}</th>
    ))

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
                            {mapTableHeader}
                        </tr>
                    </thead>
                    <tbody>
                        {props.data ?
                            props.data.map(item => {
                                let keys = Object.keys(item)
                                return (
                                    <tr key={item._id}>
                                        {
                                            keys.map(key => {
                                                return (
                                                    <td>{item[key]}</td>
                                                )
                                            })
                                        }
                                        <td>
                                            <div className="buttons-container">
                                                <button className='button' id="edit">Editar</button>
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
