import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Contrato from './pages/contrato.jsx';
import CriarContrato from './pages/criarContrato.jsx';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/app/contrato" />,
  },
  {
    path: "app",
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to="contrato" />
      },
      {
        path: "contrato",
        element: <Contrato />,
      },
      {
        path: "criarcontrato",
        element: <CriarContrato />
      },
      // Outras rotas
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
