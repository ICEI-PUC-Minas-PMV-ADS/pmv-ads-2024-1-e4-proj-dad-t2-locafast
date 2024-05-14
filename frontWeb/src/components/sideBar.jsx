import React from "react";
import Icon from './icon'

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
                    <li className="search-box">
                        <i className="bx bx-search icon"></i>
                        <input type="search" placeholder="Pesquisa..." />
                    </li>
                    <ul className="menu-links">
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-calendar-alt icon"></i>
                                <span className="text nav-text">Reservas</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-clipboard icon"></i>
                                <span className="text nav-text">Contratos</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-car icon"></i>
                                <span className="text nav-text">Carros</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-user icon"></i>
                                <span className="text nav-text">Clientes</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className="bx bx-log-out icon"></i>
                                <span className="text nav-text">Clientes</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
