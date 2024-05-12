import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login.jsx';
import Cadastro from './pages/cadastro.jsx';
import Carro from './pages/carro.jsx';
import CadastroCarro from './pages/cadastroCarro.jsx';
import Cliente from './pages/cliente.jsx';
import Reserva from './pages/reserva.jsx';
import CadastroCliente from './pages/cadastroCliente.jsx';
import CadastroReserva from './pages/cadastroReserva.jsx';
import Contrato from './pages/contrato.jsx';
import CriarContrato from './pages/criarContrato.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/carro" element={<Carro />} />
        <Route path="/cadastroCarro" element={<CadastroCarro />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/cadastroCliente" element={<CadastroCliente />} />
        <Route path="/cadastroReserva" element={<CadastroReserva />} />
        <Route path="/contrato" element={<Contrato />} />
        <Route path="/criarContrato" element={<CriarContrato />} />
      </Routes>
    </Router>
  );
}

export default App;
