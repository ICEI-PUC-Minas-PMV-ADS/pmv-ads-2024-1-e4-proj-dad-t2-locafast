import React from 'react';
import { Outlet } from "react-router-dom";
import './components/style/content.css';
import SideBar from './components/sideBar';
import './app.css';

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
