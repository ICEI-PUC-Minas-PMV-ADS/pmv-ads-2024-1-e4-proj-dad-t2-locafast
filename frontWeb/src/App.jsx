/*import React from 'react';
import { Outlet } from "react-router-dom";

import './components/style/content.css'

import SideBar from './components/sideBar';

import './app.css'

function App() {
  return (
    <main className='app'>
      <SideBar />
      <div className='content'>
        <Outlet />
      </div>
    </main>
  );
}

export default App;
*/

// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/style/content.css';
import './app.css';
import Carro from './pages/carro';
import CadastroCarro from './pages/cadastroCarro';

function App() {
    return (
        <main className='app'>
            {/* Mantenha a SideBar aqui se necessário */}
            <div className='content'>
                <Router>
                    <Routes>
                        <Route path="/app/carro" element={<Carro />} />
                        <Route path="/app/cadastrocarro" element={<CadastroCarro />} />
                    </Routes>
                </Router>
            </div>
        </main>
    );
}

export default App;
