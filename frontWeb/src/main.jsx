import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import './pages/style/carro.css'
import Login from './pages/login.jsx';
import Cadastro from './pages/cadastro.jsx';
import reducers from './reducers.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />
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
