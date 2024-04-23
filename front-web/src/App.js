import React from 'react';
import axios from 'axios';
import './styles/App.css';

function App() {

  function logar(event){
    event.preventDefault();

    const formData = new FormData(event.target);

    let cpf = formData.get('cpf')
    let password = formData.get('password')
    
    axios.post('http://localhost:3002/login', { cpf: cpf, senha: password })
      .then(response => {

        localStorage.setItem('token', response.data.token);
        console.log('Token armazenado no localStorage:', response.data.token);
        
        alert("logado")
      })
      .catch(error => {
        console.error('Erro ao enviar solicitação de login:', error);
      });
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100%',
      flexDirection: 'column',
      backgroundColor: 'aliceblue'
    }}>
      <h2 style={{marginBottom: '20px', color: '#333'}}>Acesse sua conta</h2>
      <form onSubmit={logar}
        action='#'
        style={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}>
        <input name='cpf'
          style={{
          marginBottom: '20px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px'
        }} placeholder='CPF' />
        <input name='password'
          style={{
          marginBottom: '20px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px'
        }} type='password' placeholder='Senha' />
        <button style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          padding: '10px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }} type='submit'>Logar</button>
      </form>
    </div>
  );
}

export default App;
