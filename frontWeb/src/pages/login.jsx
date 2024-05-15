import React from 'react';

import FormLogin from "../components/formLogin";

import '../pages/style/login.css';

const initialState = {
    user: {cpf: '', senha: '', message: ''}
}

function Login() {

    const state = { ...initialState }

    const handleLogin = () => {
        history.push('/cadastroReserva');
    };

    return (
        <div className="loginPage">
            <FormLogin />
        </div>
    );
}

export default Login;
