import React from "react";

import './style/table.css';

export default props => {

    const mapTableHeader = props.trs.map((item) => (
        <th>{item}</th>
    ))

    const mapTableTds = (obj) => {

        for (let item in obj) {
            return obj[item]
        }
    }

    return (
        <div className='table-container'>
            <section className="table-header">
                <h1>{props.title}</h1>
            </section>
            <section className="table-body">
                <table>
                    <thead>
                        <tr>
                            {mapTableHeader}
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map(item => {
                            let keys = Object.keys(item)
                            return (
                                <tr key={item.id}>
                                    {
                                        keys.map(key => {
                                            return (
                                                <td>{item[key]}</td>
                                            )
                                        })
                                    }
                                    <td>
                                        <div className="buttons-container">
                                            <button className='button' id="edit" >Editar</button>
                                            <button className='button' id="delete" >Apagar</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section >
        </div >
    )
}
