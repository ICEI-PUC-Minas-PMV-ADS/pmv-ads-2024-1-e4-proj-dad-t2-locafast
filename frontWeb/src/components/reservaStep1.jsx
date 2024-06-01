import React, { useState } from "react";

import FormCadastro from './formCadastro'
import './style/reservaStep1.css'

export default () => {

    const [formData, handleChange] = useState()

    return (
        <div>
            <form method='POST'>
                <div id="cliente">
                    <div className="sub-title">
                        <h2>{'CLIENTE'}</h2>
                    </div>
                    <FormCadastro
                        placeholders={[
                            'clienteId',
                            'Nome',
                            'CPF',
                        ]}
                        id={'clientData'}
                        values={formData}
                        handleChange={handleChange}
                    >
                    </FormCadastro>
                    <div id="sub-title-icon">
                        <h2>{'LOCAL E DATA'}</h2>
                        <i class='bx bx-map' ></i>
                    </div>
                </div>
                <div id="local-retirada">
                    
                </div>
            </form>
        </div>
    )
}
