import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Content from './components/content';

import './app.css'

function App() {
  return (
    <main className='app'>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </main>
  );
}

export default App;
