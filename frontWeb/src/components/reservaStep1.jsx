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
                        values={formData}
                        handleChange={handleChange}
                    />
                </div>
                <div id="local-retirada">
                    <FormCadastro
                        placeholders={[
                            'agenciaRetirada',
                            'agenciaDevolucao'
                        ]}
                        values={formData}
                        handleChange={handleChange}
                    />
                </div>
            </form>
        </div>
    )
}