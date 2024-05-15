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

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        path: "reserva",
        element: <Reserva />,
      },
      {
        path: "cadastroreserva",
        element: <CadastroReserva />
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
