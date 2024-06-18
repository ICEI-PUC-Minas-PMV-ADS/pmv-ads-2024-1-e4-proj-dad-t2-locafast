import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from "./pages/login.jsx";
import Cadastro from './pages/cadastro.jsx';
import Carro from './pages/carro.jsx';
import CadastroCarro from './pages/cadastroCarro.jsx';
import Cliente from './pages/cliente.jsx';
import Reserva from './pages/reserva.jsx';
import CadastroCliente from './pages/cadastroCliente.jsx';
import CadastroReserva from './pages/cadastroReserva.jsx';
import Contrato from './pages/contrato.jsx';
import CriarContrato from './pages/criarContrato.jsx';
import ReservaStep1 from './components/reservaStep1.jsx';
import ReservaStep2 from './components/reservaStep2.jsx';
import ReservaStep3 from './components/reservaStep3.jsx';

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store.js';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "app",
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to="reserva" />
      },
      {
        path: "reserva",
        element: <Reserva />,
      },
      {
        path: "cadastroreserva",
        element: <CadastroReserva />,
        children: [
          {
            path: '',
            element: <Navigate to="reserva-passo-1" />
          },
          {
            path: 'reserva-passo-1',
            element: <ReservaStep1 />
          },
          {
            path: 'reserva-passo-2',
            element: <ReservaStep2 />
          },
          {
            path: 'reserva-passo-3',
            element: <ReservaStep3 />
          }
        ]
      },
      {
        path: "contrato",
        element: <Contrato />,
      },
      {
        path: "carro",
        element: <Carro />,
      },
      {
        path: "cliente",
        element: <Cliente />,
      },
      {
        path: "cadastro",
        element: <Cadastro />,
      },
      {
        path: "cadastrocarro",
        element: <CadastroCarro />
      },
      {
        path: "cadastrocliente",
        element: <CadastroCliente />
      },
      {
        path: "criarcontrato",
        element: <CriarContrato />
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
