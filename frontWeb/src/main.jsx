import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import './pages/style/carro.css'
import Login from './pages/login.jsx';
import Cadastro from './pages/cadastro.jsx';
import Reserva from './pages/reserva.jsx';
import CadastroReserva from './pages/cadastroReserva.jsx';
import reducers from './reducers.js'
import Contrato from './pages/contrato.jsx';
import Carro from './pages/carro.jsx';
import Cliente from './pages/cliente.jsx';
import CadastroCarro from './pages/cadastroCarro.jsx';
import CadastroCliente from './pages/cadastroCliente.jsx';
import CriarContrato from './pages/criarContrato.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  },
  {
    path: '/reserva',
    element: <Reserva />,
  },
  {
    path: '/cadastroreserva',
    element: <CadastroReserva />,
  },
  {
    path: '/cadastrocarro',
    element: <CadastroCarro />,
  },
  {
    path: '/cadastrocliente',
    element: <CadastroCliente />,
  },
  {
    path: '/criarcontrato',
    element: <CriarContrato />,
  },
  {
    path: '/carro',
    element: <Carro />,
  },
  {
    path: '/contrato',
    element: <Contrato />,
  },
  {
    path: '/cliente',
    element: <Cliente />,
  }
]);

const store = createStore(reducers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
