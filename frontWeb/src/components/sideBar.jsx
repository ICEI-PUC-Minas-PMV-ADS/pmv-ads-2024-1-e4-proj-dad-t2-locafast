import React from "react";
import Icon from './icon'
import { Link } from "react-router-dom";

import './style/sideBar.css'

export default props => {

    function openClose(){
        const sidebar = document.getElementById("side-bar-id")
        sidebar.classList.toggle("close")
    }

    return (
        <nav id="side-bar-id" className="sidebar">
            <header>
                <div className="img-text">
                    <Icon size={'40px'}/>
                    <div className="text header-text">
                        <span className="application-name">LocaFast</span>
                    </div>
                </div>
                <button onClick={openClose}>
                    <i className="bx bx-chevron-right toggle"></i>
                </button>
            </header>
            <div className="menu-bar">
                <div className="menu">
                    <ul className="menu-links">
                        <li className="nav-link">
                            <Link  to={'reserva'}>
                                <i className="bx bx-calendar-alt icon"></i>
                                <span className="text nav-text">Reservas</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to={'contrato'}>
                                <i className="bx bx-clipboard icon"></i>
                                <span className="text nav-text">Contratos</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to={'carro'}>
                                <i className="bx bx-car icon"></i>
                                <span className="text nav-text">Carros</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to={'cliente'}>
                                <i className="bx bx-user icon"></i>
                                <span className="text nav-text">Clientes</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to={'cadastro'}>
                                <i className="bx bx-user-plus icon"></i>
                                <span className="text nav-text">Usuários</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to={'/'}>
                                <i className="bx bx-log-out icon"></i>
                                <span className="text nav-text">Sair</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
